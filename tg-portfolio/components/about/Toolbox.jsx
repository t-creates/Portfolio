import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../utils/client';
import {
  TOOLBOX_CATEGORY_COPY,
  TOOLBOX_CATEGORY_ORDER,
  TOOLBOX_FALLBACK,
  getToolCategory,
  getToolIcon,
} from '../../utils/toolboxConfig';

const Toolbox = ({ techno = [] }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const tools = useMemo(() => {
    const merged = new Map();

    TOOLBOX_FALLBACK.forEach((tech) => {
      merged.set(tech.name, tech);
    });

    techno.forEach((tech) => {
      merged.set(tech.name, {
        ...merged.get(tech.name),
        ...tech,
      });
    });

    return Array.from(merged.values());
  }, [techno]);

  const grouped = useMemo(() => {
    const result = {};
    tools.forEach((tech) => {
      const category = getToolCategory(tech);
      if (!result[category]) result[category] = [];
      result[category].push(tech);
    });
    return TOOLBOX_CATEGORY_ORDER
      .filter((category) => result[category]?.length)
      .map((category) => [category, result[category]]);
  }, [tools]);

  useEffect(() => {
    if (!activeCategory && grouped.length) {
      setActiveCategory(grouped[0][0]);
    }
  }, [activeCategory, grouped]);

  const renderCategoryCard = ([category, techList]) => (
    <motion.article
      key={category}
      className="layered-card rounded-3xl border border-black/10 bg-neutral-50/85 p-5 flex flex-col gap-4 shadow-inner"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-black">{category}</h3>
          <p className="mt-1 text-sm leading-relaxed text-black/55">
            {TOOLBOX_CATEGORY_COPY[category]}
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-black/40">{techList.length} tools</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {techList.map((tech) => {
          const Icon = getToolIcon(tech.name, category);
          return (
            <div key={tech._id || tech.name} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-3 text-sm text-black/70 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-gradient-to-br from-green-50 to-slate-100 text-xl text-slate-800">
                {tech?.image ? (
                  <img src={urlFor(tech.image)} alt={tech.name} className="h-7 w-7 object-contain" />
                ) : (
                  <Icon aria-hidden="true" />
                )}
              </div>
              <div className="min-w-0 flex flex-col">
                <span className="truncate font-semibold text-sm text-black">{tech.name}</span>
                {tech.proficiency || tech.projectsUsed ? (
                  <span className="text-xs text-black/50">
                    {tech.proficiency ? `${tech.proficiency}` : ''}
                    {tech.projectsUsed ? ` · ${tech.projectsUsed}+ builds` : ''}
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );

  return (
    <motion.section className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0 rounded-[32px] bg-white/70 shadow-lg backdrop-blur" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-black/60">Toolbox</p>
        <h2 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold">Core tools I build with</h2>
        <p className="text-lg text-black/70 max-w-3xl">
          Languages, frameworks, AI tooling, cloud platforms, and data systems used across application builds, automation work, dashboards, and integrations.
        </p>
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 md:hidden">
        {grouped.map(([category]) => (
          <button
            key={category}
            type="button"
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'border-green-600 bg-green-600 text-white'
                : 'border-black/10 bg-white text-black/70'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 md:hidden">
        {grouped
          .filter(([category]) => category === activeCategory)
          .map(renderCategoryCard)}
      </div>

      <div className="mt-8 hidden gap-6 md:grid xl:grid-cols-3">
        {grouped.map(renderCategoryCard)}
      </div>
    </motion.section>
  );
};

export default Toolbox;
