import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const aboutHighlights = [
  { label: 'Experience', value: '4 years in software development' },
  { label: 'Focus', value: 'Web applications, data systems, and automation' },
  { label: 'Approach', value: 'Clear communication with practical delivery' },
];

const About = () => (
  <motion.section className="sm:p-2 md:p-6 rounded-[32px] bg-white/80 shadow-lg backdrop-blur layered-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
    <div className="flex flex-col gap-6">
      <p className="text-sm uppercase tracking-[0.4em] text-black/60">About</p>
      <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold">Engineer + collaborator based in Alberta</h1>
      <p className="text-xl text-black/75 font-medium test">
        I craft maintainable software that feels personal—blending product intuition with solid engineering so teams can launch with
        confidence. From AI-assisted workflows to resilient web platforms, I focus on outcomes that are measurable and human-centered.
      </p>
      <p className="text-xl text-black/75 font-medium test">
        Outside of code, you&apos;ll find me hiking mountain ranges, practicing archery, or digging into philosophy.
        Those disciplines influence how I lead projects: clarity before action, patience under pressure, and thoughtful iteration.
      </p>
      <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
        {aboutHighlights.map((highlight) => (
          <div key={highlight.label} className="rounded-2xl border border-black/10 bg-neutral-50/80 p-4 layered-card">
            <p className="text-xs uppercase tracking-[0.35em] text-black/50">{highlight.label}</p>
            <p className="text-2xl font-semibold text-black/80">{highlight.value}</p>
          </div>
        ))}
      </motion.div>
      <div className="space-y-3 text-black/75 text-lg">
        <p className="font-semibold text-black">How I like to partner:</p>
        <ul className="space-y-2">
          <li>• Clear scopes, weekly progress visibility, and direct communication.</li>
          <li>• Practical architecture choices that keep future maintenance manageable.</li>
          <li>• Software that balances speed, readability, and production reliability.</li>
        </ul>
      </div>
      <Link href="/contact">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-lg font-semibold text-black hover:bg-black hover:text-white transition">
          Want to work together?
          <span aria-hidden="true">→</span>
        </p>
      </Link>
    </div>
  </motion.section>
);

export default About;
