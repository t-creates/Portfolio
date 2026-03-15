import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { motion, AnimatePresence } from 'framer-motion';
import { urlFor } from '../../utils/client';

/*
Add design patterns used for project and data structures used.
link projects with expertise statements
Add multiple types
Add multiple tags
*/

const Project = ({ projects, idx = 0 }) => {
  const {
    image,
    name,
    sourceCode,
    website,
    description,
    neww,
    gallery,
    tags,
    quickFacts,
  } = projects || {};

  const [show, setShow] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const delay = (idx % 6) * 75;
  const imageUrl = image
    ? urlFor(image)
      .width(600)
      .height(350)
      .fit('crop')
      .quality(90)
      .url()
    : '';

  const galleryImages = useMemo(() => {
    const mapped = Array.isArray(gallery)
      ? gallery
        .map((item, index) => {
          if (typeof item === 'string') {
            return { src: item, alt: `${name || 'Project'} gallery ${index + 1}` };
          }
          const src = item?.imageUrl || (item?.image ? urlFor(item.image).width(1200).fit('max').url() : '');
          if (!src) return null;
          return { src, alt: item?.alt || item?.headline || name || 'Gallery image' };
        })
        .filter(Boolean)
      : [];

    if (!mapped.length && imageUrl) {
      return [{ src: imageUrl, alt: name || 'Project hero' }];
    }
    return mapped;
  }, [gallery, imageUrl, name]);

  const featureList = Array.isArray(projects?.features) && projects.features.length
    ? projects.features
    : [];

  const tagsList = Array.isArray(tags) ? tags : [];
  const secondaryTags = Array.isArray(projects?.projectTypeGroup?.secondaryTags) ? projects.projectTypeGroup.secondaryTags : [];
  const combinedTags = [...tagsList, ...secondaryTags];
  const quickFactsList = Array.isArray(quickFacts) && quickFacts.length ? quickFacts : [];
  const videoSrc = projects?.videoUrl
    || projects?.demoVideoUrl
    || (typeof projects?.demoVideo === 'string' ? projects.demoVideo : projects?.demoVideo?.asset?.url)
    || '';

  return (
    <motion.article
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div
        className={`layered-card rounded-3xl flex flex-col h-full bg-white shadow-xl max-w-[420px] min-h-[480px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${show ? 'ring-2 ring-green-200' : ''}`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="relative w-full h-[240px] overflow-hidden rounded-t-3xl bg-black/5">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          ) : (
            <div className="h-full w-full bg-neutral/40" />
          )}
          <div className="absolute inset-x-4 bottom-4 flex justify-between">
            <div className="flex gap-2 flex-wrap">
              {combinedTags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black/70 shadow">
                  {tag}
                </span>
              ))}
            </div>
            {neww ? <div className="badge badge-secondary bg-green-600 text-xs border-none test">NEW</div> : null}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-black aboutTitle">{name}</h2>
            <div className="flex gap-2">
              {website ? (
                <a href={website} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 rounded-full border border-black/10 px-3 py-1 text-sm text-black/70 hover:bg-black/80 hover:text-white transition">
                  <FaExternalLinkAlt /> Live
                </a>
              ) : null}
              {sourceCode ? (
                <a href={sourceCode} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 rounded-full border border-black/10 px-3 py-1 text-sm text-black/70 hover:bg-black/80 hover:text-white transition">
                  <FaGithub /> Code
                </a>
              ) : null}
            </div>
          </div>
          <p className="text-black/70 test flex-1">{description}</p>
          {quickFactsList.length ? (
            <div className="grid grid-cols-2 gap-3">
              {quickFactsList.slice(0, 2).map((fact) => (
                <div key={`${name}-${fact.label}`} className="rounded-2xl border border-dashed border-black/10 bg-black/5 p-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/50">{fact.label}</p>
                  <p className="text-sm font-semibold text-black/80">{fact.value}</p>
                </div>
              ))}
            </div>
          ) : null}
          <button
            type="button"
            className="rounded-full bg-black text-white py-2 px-5 text-sm font-semibold hover:bg-green-700/90 transition"
            onClick={() => setDetailsOpen(true)}
          >
            View Details
          </button>
        </div>
      </div>

      {mounted
        ? createPortal(
          <AnimatePresence>
            {detailsOpen ? (
              <motion.div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-3 py-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
              <button
                type="button"
                className="absolute right-6 top-6 rounded-full border border-black/10 p-2 text-black hover:bg-black hover:text-white transition"
                onClick={() => setDetailsOpen(false)}
              >
                <FaTimes />
              </button>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-black">Media</h3>
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay={galleryImages.length > 1}
                    interval={5000}
                    swipeable
                    className="rounded-2xl overflow-hidden"
                  >
                    {galleryImages.map((media) => (
                      <div key={media.src}>
                        <img src={media.src} alt={media.alt} className="rounded-2xl object-cover max-h-[360px]" />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-black">Details</h3>
                  <p className="text-black/70">{description || 'Detailed project notes are being prepared.'}</p>
                  {featureList.length ? (
                    <ul className="space-y-2 text-black/80">
                      {featureList.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                <div className="flex flex-wrap gap-2">
                  {combinedTags.map((tag) => (
                      <span key={`${name}-${tag}`} className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-black/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {videoSrc ? (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-black mb-3">Demo Video</h3>
                  <video
                    src={videoSrc}
                    controls
                    className="w-full rounded-2xl border border-black/10 bg-black/5"
                    poster={galleryImages[0]?.src || ''}
                  >
                    <track kind="captions" />
                  </video>
                </div>
              ) : null}
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )
        : null}
    </motion.article>
  );
};

export default Project;
