import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../lib/sanity.image';
import { getExpertiseSectionCopy, getExpertiseItemCopy } from '../utils/expertiseContent';

const ExperiseSection = ({ expertiseSection }) => {
  const doc = Array.isArray(expertiseSection) ? expertiseSection[0] : (expertiseSection || {});
  const items = Array.isArray(doc.items) ? doc.items : [];
  const titleImgSrc = doc?.imageUrl || (doc?.image ? urlFor(doc.image).fit('max').url() : '');

  const metrics = Array.isArray(doc?.metrics) && doc.metrics.length > 0
    ? doc.metrics
    : [];
  const sectionDescription = getExpertiseSectionCopy(
    doc?.title,
    doc?.description || doc?.subtitle || '',
  );

  return (
    <motion.section
      className="mb-16 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-lg backdrop-blur layered-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-green-700/80">Capability</p>
          <h2 className="aboutTitle text-3xl font-bold text-black">
            {doc?.title || 'Expertise area'}
          </h2>
          <p className="text-black/70 text-lg">
            {sectionDescription}
          </p>
          {metrics.length ? (
            <motion.div className="grid gap-4 sm:grid-cols-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
              {metrics.map((metric, index) => (
                <div key={`${metric.label}-${index}`} className="rounded-2xl border border-dashed border-black/10 bg-white p-4 layered-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/50">{metric.label}</p>
                  <p className="text-xl font-semibold text-black/80">{metric.value}</p>
                </div>
              ))}
            </motion.div>
          ) : null}
        </div>
        <div className="flex-1 relative">
          {titleImgSrc ? (
            <img
              src={titleImgSrc}
              alt={doc?.title || 'Expertise visual'}
              loading="lazy"
              className="w-full h-full max-h-[320px] object-cover rounded-2xl border border-black/5 shadow-lg"
            />
          ) : (
            <div className="w-full h-64 rounded-2xl border border-black/5 bg-[linear-gradient(135deg,rgba(34,197,94,0.12),rgba(15,23,42,0.04))] shadow-lg" />
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((it, idx) => {
          const slug = it?.slug?.current || `item-${idx}`;
          const imgSrc = it?.imageUrl || (it?.image ? urlFor(it.image).width(200).fit('max').url() : '');
          const alt = it?.image?.alt || it?.subtitle || 'Expertise image';
          const itemCopy = getExpertiseItemCopy(it?.subtitle, it?.headline, it?.text);
          const lines = itemCopy.text;

          return (
            <motion.article
              key={slug}
              id={`expertise-${slug}`}
              className="rounded-2xl border border-black/5 bg-neutral-50/70 p-5 shadow-inner layered-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-4">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={alt}
                    loading="lazy"
                    className="h-16 w-16 rounded-xl border border-green-600/30 object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-xl border border-green-600/20 bg-green-50 text-sm font-semibold uppercase tracking-[0.2em] text-green-800 flex items-center justify-center">
                    {it?.subtitle?.split(' ').map((word) => word[0]).join('').slice(0, 2) || 'EX'}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {it?.subtitle || 'Capability highlight'}
                  </h3>
                  <p className="text-sm text-black/60">
                    {itemCopy.headline}
                  </p>
                </div>
              </div>
              {lines.length ? (
                <ul className="mt-4 space-y-2 text-black/70">
                  {lines.map((line, i) => (
                    <li key={`${slug}-${i}`} className="flex gap-2 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600/70" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ExperiseSection;
