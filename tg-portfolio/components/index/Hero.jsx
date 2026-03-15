import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const fallbackHeroHighlights = [
  'Building custom software, full stack applications, and data-heavy dashboards for growing teams.',
  'Focused on practical systems that are maintainable, fast, and ready for production use.',
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } },
};

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const createBands = (modifier = 0) => [
  {
    id: 'band-top',
    colors: ['#0f172a', '#052e16'],
    path: 'polygon(0 50%, 40% 5%, 60% 0, 100% 40%, 70% 100%, 20% 95%)',
    origin: { top: '-18%', left: '-10%', width: '170%', height: '35%' },
    rotate: -18 + modifier * 0.05,
    blur: 18,
    delay: 0,
    depth: 0.15,
  },
  {
    id: 'band-left',
    colors: ['#22c55e', '#0f4c2a'],
    path: 'polygon(0 60%, 30% 0, 60% 5%, 100% 50%, 75% 100%, 25% 95%)',
    origin: { top: '5%', left: '-35%', width: '220%', height: '30%' },
    rotate: -8 + modifier * 0.05,
    blur: 20,
    delay: 0.3,
    depth: 0.3,
  },
  {
    id: 'band-right',
    colors: ['#0b3c24', '#052e16'],
    path: 'polygon(10% 0, 60% 0, 100% 60%, 80% 100%, 40% 90%, 0 40%)',
    origin: { top: '22%', right: '-30%', width: '200%', height: '30%' },
    rotate: 12 + modifier * 0.05,
    blur: 26,
    delay: 0.6,
    depth: 0.45,
  },
  {
    id: 'band-bottom',
    colors: ['#84cc16', '#22c55e'],
    path: 'polygon(0 50%, 35% 10%, 80% 0, 100% 40%, 65% 100%, 20% 90%)',
    origin: { bottom: '-15%', left: '-10%', width: '180%', height: '35%' },
    rotate: -3 + modifier * 0.04,
    blur: 24,
    delay: 0.9,
    depth: 0.65,
  },
  {
    id: 'band-beam',
    colors: ['rgba(34,197,94,0.25)', 'rgba(132,204,22,0.08)'],
    path: 'polygon(10% 0, 90% 10%, 100% 80%, 40% 100%, 0 70%)',
    origin: { top: '-5%', left: '15%', width: '140%', height: '80%' },
    rotate: 15 + modifier * 0.06,
    blur: 35,
    delay: 1.1,
    depth: 0.8,
  },
  {
    id: 'band-cross',
    colors: ['rgba(15, 118, 110, 0.4)', 'rgba(8, 47, 73, 0.2)'],
    path: 'polygon(0 30%, 45% 0, 100% 35%, 80% 100%, 40% 90%, 5% 60%)',
    origin: { top: '60%', left: '-20%', width: '220%', height: '30%' },
    rotate: -20 + modifier * 0.04,
    blur: 30,
    delay: 1.3,
    depth: 0.5,
  },
];

const Hero = ({ hero = [] }) => {
  const heroContent = hero?.[0] || hero || {};
  const bio = heroContent?.bio
    || 'I design and build software systems, data workflows, and polished web experiences for businesses that need reliable engineering and direct communication.';
  const heroHighlightsData = Array.isArray(heroContent?.highlights) && heroContent.highlights.length
    ? heroContent.highlights.map((item) => (typeof item === 'string' ? item : item?.text)).filter(Boolean)
    : fallbackHeroHighlights;
  const heroStatsData = Array.isArray(heroContent?.stats) && heroContent.stats.length
    ? [...heroContent.stats]
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map(({ label, value }) => ({ label, value }))
    : [];
  const [hoverStrength, setHoverStrength] = useState(0);
  const bands = createBands(hoverStrength);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = ((event.clientX / innerWidth) - 0.5) * 2;
      const y = ((event.clientY / innerHeight) - 0.5) * 2;
      setHoverStrength((Math.abs(x) + Math.abs(y)) * 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full overflow-hidden mainHero">
      <div className="hero-background">
        {bands.map((band) => (
          <motion.div
            key={band.id}
            className="hero-band"
            style={{
              '--band-start': band.colors[0],
              '--band-end': band.colors[1],
              top: band.origin.top,
              bottom: band.origin.bottom,
              left: band.origin.left,
              right: band.origin.right,
              width: band.origin.width,
              height: band.origin.height,
              filter: `blur(${band.blur}px)`,
              clipPath: band.path,
            }}
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={{
              opacity: 0.85,
              y: 0,
              rotate: band.rotate + hoverStrength * band.depth * 0.05,
              scale: 1 + hoverStrength * band.depth * 0.003,
            }}
            transition={{ duration: 1.6, delay: band.delay }}
          />
        ))}
        <div className="hero-gradient-mask" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <motion.div className="flex-1" initial="hidden" animate="visible" variants={textVariants}>
            <motion.div className="flex w-full max-w-[720px] flex-col gap-2" variants={listVariants}>
              <motion.p className="p-2 text-base uppercase tracking-[0.4em] text-slate-300" variants={listItemVariants}>Portfolio</motion.p>
              <motion.h1 className="p-2 font-extrabold navName md:text-7xl sm:text-5xl text-slate-100" variants={listItemVariants}>Hi,</motion.h1>
              <motion.h1 className="p-2 font-extrabold navName md:text-7xl sm:text-5xl text-slate-100" variants={listItemVariants}>I am Travis.</motion.h1>
              <motion.h2 className="p-2 font-semibold aboutTitle md:text-5xl sm:text-2xl md:leading-[4rem] text-slate-200" variants={listItemVariants}>
                A
                {' '}
                <span className="md:p-2 sm:p-1 font-bold text-green-300">Software Engineer</span>
                {' '}
                from Alberta, Canada.
              </motion.h2>
              <motion.h3 className="p-2 font-normal aboutTitle 2xl:text-3xl md:text-2xl sm:text-base text-slate-200/90 pb-2" variants={listItemVariants}>
                {bio}
              </motion.h3>
              <motion.ul className="flex flex-col gap-3 px-2 text-slate-300" variants={listVariants}>
                {heroHighlightsData.map((highlight) => (
                  <motion.li key={highlight} className="flex items-start gap-3 text-base md:text-lg" variants={listItemVariants}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-400/80" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div className="flex flex-col justify-center md:items-start sm:items-center mt-6 gap-4 md:flex-row" variants={listVariants}>
              <a target="_blank" rel="noreferrer" href="/travisGeislingerResume.pdf" className="z-10 w-full md:w-auto">
                <button
                  type="button"
                  className="bg-green-600 text-white hover:bg-white/10 hover:text-white py-3 px-6 border border-green-500/70 rounded w-full md:w-48 text-center test transition"
                >
                  Resume/CV
                </button>
              </a>
              <a href="#projects" className="z-10 w-full md:w-auto">
                <button
                  type="button"
                  className="bg-transparent text-slate-100 hover:text-white border border-white/30 hover:bg-white/10 py-3 px-6 rounded w-full md:w-48 text-center test transition"
                >
                  Explore Projects
                </button>
              </a>
            </motion.div>
            <motion.div className="px-3 pt-6 flex gap-6 text-slate-200" variants={listVariants}>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/travis-geislinger-889b81188/" className="z-10 inline-flex items-center gap-2 hover:text-white">
                <FaLinkedin className="text-3xl text-[#7FB3FF] hover:text-white cursor-pointer" />
                <span className="hidden sm:block text-base">LinkedIn</span>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.github.com/t-creates" className="z-10 inline-flex items-center gap-2 hover:text-white">
                <FaGithub className="text-3xl text-slate-100 cursor-pointer" />
                <span className="hidden sm:block text-base">GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {heroStatsData.length ? (
          <div className="mt-12 max-w-[760px]">
            <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={listVariants}>
              {heroStatsData.map((stat) => (
                <motion.div key={stat.label} className="relative z-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg p-5 shadow-lg" variants={listItemVariants}>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-300">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
