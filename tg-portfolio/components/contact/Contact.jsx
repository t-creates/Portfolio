import React from 'react';
import dynamic from 'next/dynamic';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const contactMethods = [
  {
    label: 'Email',
    value: 'geislinger@proton.me',
    href: 'mailto:geislinger@proton.me',
    icon: AiOutlineMail,
    description: 'Fastest way to reach me. Expect a reply within one business day.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/travis-geislinger',
    href: 'https://www.linkedin.com/in/travis-geislinger/',
    icon: FaLinkedin,
    description: 'Connect for professional inquiries or collaborations.',
  },
  {
    label: 'GitHub',
    value: 'github.com/t-creates',
    href: 'https://www.github.com/t-creates',
    icon: FaGithub,
    description: 'Browse live repositories and recent experiments.',
  },
];

const Contact = () => {
  const textToCopy = 'geislinger@proton.me';
  const CC = dynamic(() => import('../copyClipboard').then((mod) => mod.CopyClipboard), { ssr: false });

  return (
    <motion.section className="mt-10 w-full" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
      <div className="flex flex-col gap-8 rounded-[32px] bg-gradient-to-br from-black via-slate-900 to-emerald-900 p-5 text-white sm:p-8 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">Contact</p>
            <h3 className="aboutTitle text-4xl font-semibold mt-2">Let&apos;s build what&apos;s next</h3>
            <p className="text-slate-200 mt-3">
              Drop a message through the form or reach out directly through one of the channels below.
            </p>
          </div>
          <div className="grid gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10 transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">{method.label}</p>
                    <p className="font-semibold text-white">{method.value}</p>
                    <p className="text-sm text-white/70">{method.description}</p>
                  </div>
                </motion.a>
              );
            })}
            <div className="flex items-center gap-3 text-sm text-white/70">
              <span>Copy email</span>
              <div className="rounded-full bg-white/10 px-3 py-1">
                <CC content={textToCopy} />
              </div>
            </div>
          </div>
        </div>
        <div className="layered-card flex-1 rounded-3xl bg-white p-4 text-black shadow-2xl sm:p-6">
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
