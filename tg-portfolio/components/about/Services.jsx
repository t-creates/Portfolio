import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { urlFor } from '../../utils/client';

const fallbackServices = [
  {
    id: 'service-1',
    title: 'Custom Software & AI Integrations',
    image: '/icons/fullstack.svg',
    summary: 'Custom software, ETL, and AI copilots for automotive or industrial teams.',
    timeline: '4–8 weeks',
    exampleProject: 'GIS Emission Map + data enrichment pipeline',
    applications: [
      { label: 'GIS dashboards' },
      { label: 'AI log copilots' },
      { label: 'Product information workflows' },
    ],
  },
  {
    id: 'service-2',
    title: 'Full Stack Applications',
    image: '/icons/fullstack.svg',
    summary: 'End-to-end product development for ecommerce, tools, and dashboards.',
    timeline: '6–10 weeks',
    exampleProject: 'OhCanadaSupply.ca commerce + inventory suite',
    applications: [
      { label: 'Commerce portals' },
      { label: 'Internal tooling' },
      { label: 'Customer dashboards' },
    ],
  },
  {
    id: 'service-3',
    title: 'Web Apps & Landing Pages',
    image: '/icons/code-typing-animate.svg',
    summary: 'SEO-friendly landing pages, business profiles, and reporting sites.',
    timeline: '2–4 weeks',
    exampleProject: 'B/D Electric Systems site + reporting dashboards',
    applications: [
      { label: 'Landing pages' },
      { label: 'Web dashboards' },
      { label: 'Business profiles' },
    ],
  },
  {
    id: 'service-4',
    title: 'Data Integrations & Analysis',
    image: '/icons/consulting.svg',
    summary: 'Automotive data pipelines, ETL jobs, and AI analytics dashboards.',
    timeline: '3–6 weeks',
    exampleProject: 'Automotive data pipeline + AI log analyzer',
    applications: [
      { label: 'ETL orchestration' },
      { label: 'AI analytics boards' },
      { label: 'Sales dashboards' },
    ],
  },
  {
    id: 'service-5',
    title: 'Freelance Partnerships',
    image: '/icons/freelance.svg',
    summary: 'Fractional engineering support to keep roadmaps moving.',
    timeline: '2–4 week blocks',
    exampleProject: 'Roadmap support for reporting dashboards',
    applications: [
      { label: 'Feature delivery' },
      { label: 'Prototype spikes' },
      { label: 'Fractional leadership' },
    ],
  },
  {
    id: 'service-6',
    title: 'Technical Consulting',
    image: '/icons/consulting.svg',
    summary: 'Audits and strategy decks for code health, AI readiness, and data platforms.',
    timeline: '1–3 weeks',
    exampleProject: 'Platform review for custom ERP + ETL migration',
    applications: [
      { label: 'Code audits' },
      { label: 'Platform roadmaps' },
      { label: 'AI readiness' },
    ],
  },
];

const Services = ({ services: servicesData = [] }) => {
  const services = servicesData.length ? servicesData : fallbackServices;
  const [selectedService, setSelectedService] = useState(null);
  const [enableScrollAnimations, setEnableScrollAnimations] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const syncAnimations = (event) => {
      setEnableScrollAnimations(event.matches);
    };

    syncAnimations(mediaQuery);
    mediaQuery.addEventListener('change', syncAnimations);

    return () => {
      mediaQuery.removeEventListener('change', syncAnimations);
    };
  }, []);

  const closeModal = () => {
    setSelectedService(null);
    setFormData({
      name: '',
      email: '',
      message: '',
      company: '',
    });
    setFeedback('');
    setSending(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!selectedService) return;
    setSending(true);
    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      subject: `Service request: ${selectedService.title}`,
      message: `${formData.message}\n\nRequested service: ${selectedService.title}`,
    };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const { error } = await res.json();
    if (error) {
      setFeedback('Something went wrong—please try again or email me directly.');
    } else {
      setFeedback('Thanks for reaching out! I will respond shortly.');
      setFormData({
        name: '',
        email: '',
        message: '',
        company: '',
      });
    }
    setSending(false);
  };

  return (
    <motion.section
      className="md:p-6 sm:p-1"
      initial={enableScrollAnimations ? { opacity: 0, y: 40 } : false}
      whileInView={enableScrollAnimations ? { opacity: 1, y: 0 } : undefined}
      animate={!enableScrollAnimations ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-black/60">Services</p>
        <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold">Ways we can collaborate</h1>
        <p className="text-lg text-black/70 max-w-3xl">
          Pick the lane that matches what you need: custom software, full stack builds,
          web experiences, data integrations, embedded partnerships, or advisory.
          Each tile highlights the service fit, common application types, and a representative build.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 scrollbar-hide mt-10">
        {services.map((service) => {
          const imageSrc = service.imageUrl || (service.image ? urlFor(service.image) : '');
          const exampleProject = service.exampleProject || service.caseStudy || '';
          const applications = Array.isArray(service.applications) && service.applications.length
            ? service.applications
            : [];

          return (
            <motion.article
              key={service.id || service.title}
              className="group layered-card relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white/90 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              initial={enableScrollAnimations ? { opacity: 0, y: 30 } : false}
              whileInView={enableScrollAnimations ? { opacity: 1, y: 0 } : undefined}
              animate={!enableScrollAnimations ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.12, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(135deg,rgba(187,247,208,0.22),rgba(255,255,255,0)_55%)]" />
                <div className="absolute right-0 top-0 h-44 w-44 bg-[linear-gradient(135deg,rgba(15,23,42,0.06),rgba(34,197,94,0.02))] [clip-path:polygon(32%_0,100%_0,100%_100%,0_58%)]" />
                <div className="absolute bottom-0 left-0 h-32 w-40 bg-[linear-gradient(135deg,rgba(34,197,94,0.08),rgba(255,255,255,0))] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
              </div>
              <div className="relative z-10 flex h-full flex-col p-6">
                <div className="flex items-start gap-4">
                  <div className="relative flex h-18 w-18 shrink-0 items-center justify-center rounded-[1.4rem] border border-white/60 bg-white/60 shadow-sm backdrop-blur">
                    {imageSrc ? (
                      <Image src={imageSrc} alt={service.title} layout="fill" className="object-contain p-4" />
                    ) : (
                      <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(34,197,94,0.22),rgba(15,23,42,0.08))]" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-black text-2xl font-semibold leading-tight">{service.title}</h2>
                    {service.tagline ? (
                      <p className="text-sm text-black/55">{service.tagline}</p>
                    ) : null}
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-lg leading-9 text-black/75">{service.summary}</p>

                {applications.length ? (
                  <div className="mt-6 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-black/50">Popular builds</p>
                    <div className="flex flex-wrap gap-2">
                      {applications.map((app) => {
                        const key = `${service.id || service.title}-${app.label}`;
                        const baseClass = 'inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold text-black transition hover:border-black/25 hover:bg-black/5';
                        if (app.url) {
                          const external = app.url.startsWith('http');
                          return (
                            <a
                              key={key}
                              href={app.url}
                              target={external ? '_blank' : '_self'}
                              rel={external ? 'noreferrer' : undefined}
                              className={baseClass}
                            >
                              {app.label}
                            </a>
                          );
                        }
                        return (
                          <span key={key} className={baseClass}>
                            {app.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {exampleProject ? (
                  <div className="mt-6">
                    {exampleProject ? (
                      <div className="rounded-[1.6rem] border border-black/10 bg-white/75 p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-black/50">Representative build</p>
                        <p className="mt-3 text-xl font-semibold leading-snug text-black">{exampleProject}</p>
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/5 pt-5">
                  <p className="max-w-xl text-sm text-black/45">
                    Request this service to discuss scope, fit, and implementation.
                  </p>
                  <button
                    type="button"
                    className="shrink-0 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                    onClick={() => {
                      setSelectedService(service);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        message: service.requestTemplate || `Hi Travis,\n\nI am interested in ${service.title}. I would like to discuss scope, goals, and next steps.\n\nThanks!`,
                      });
                    }}
                  >
                    Request service
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedService ? (
          <motion.div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 py-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-black/50">Service Request</p>
                  <h3 className="text-2xl font-semibold text-black">{selectedService.title}</h3>
                  <p className="text-black/70 text-sm">This form sends through the same SendGrid endpoint as your main contact form.</p>
                </div>
                <button type="button" className="rounded-full border border-black/10 px-3 py-1 text-sm text-black" onClick={closeModal}>Close</button>
              </div>
              <form className="mt-6 space-y-4" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />
                <div>
                  <label htmlFor="service-name" className="flex flex-col gap-1 text-sm font-semibold text-black/70">
                    <span>Name</span>
                    <input
                      id="service-name"
                      name="name"
                      type="text"
                      className="w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 font-normal text-black"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="service-email" className="flex flex-col gap-1 text-sm font-semibold text-black/70">
                    <span>Email</span>
                    <input
                      id="service-email"
                      name="email"
                      type="email"
                      className="w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 font-normal text-black"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="service-message" className="flex flex-col gap-1 text-sm font-semibold text-black/70">
                    <span>Project details</span>
                    <textarea
                      id="service-message"
                      name="message"
                      rows="5"
                      className="w-full rounded-2xl border border-black/10 bg-black/5 px-4 py-3 font-normal text-black"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </label>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="rounded-full bg-black px-6 py-3 text-white font-semibold hover:bg-green-700 transition disabled:opacity-60"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send request'}
                  </button>
                  {feedback ? <p className="text-sm font-medium text-black/70">{feedback}</p> : null}
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default Services;
