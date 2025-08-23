import React from 'react';
import { urlFor } from '../lib/sanity.image';

const ExperiseSection = ({ expertiseSection }) => {
  // Accept either the doc itself or an array with a single doc
  const doc = Array.isArray(expertiseSection) ? expertiseSection[0] : (expertiseSection || {});
  const items = Array.isArray(doc.items) ? doc.items : [];

  const titleImgSrc = doc?.imageUrl || (doc?.image ? urlFor(doc.image).fit('max').url() : '');

  return (
    <section
      className="mb-24"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <h1 className="test text-green-700 text-2xl md:text-3xl font-bold mb-2 mt-5 pl-5">
        {doc?.title || 'Untitled'}
      </h1>

      <div className="flex sm:flex-col-reverse md:flex-row sm:mx-5">
        <div className="md:w-[50%] sm:w-[100%]">
          {items.map((it, idx) => {
            const slug = it?.slug?.current || `item-${idx}`;
            // Prefer GROQ-expanded URL; fall back to asset.url if you expanded elsewhere
            const imgSrc = it?.imageUrl || (it?.image ? urlFor(it.image).width(150).fit('max').url() : '');
            const alt = it?.image?.alt || it?.subtitle || 'Expertise image';
            const lines = Array.isArray(it?.text) ? it.text : [];

            return (
              <article id={`expertise-${slug}`} key={slug} className="w-full mt-12">

                {/* Image left, text right; stacks on small screens */}
                <div className="flex gap-5">
                  <div className="sm:col-span-4">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={alt}
                        loading="lazy"
                        className="max-w-[75px] min-w-[75px] h-auto rounded-full border border-green-700 object-cover"
                      />
                    ) : (
                      <div
                        className="xl:w-32 xl:h-32 lg:w-28 lg:h-28 sm:h-24 sm:w-24 bg-none"
                      >
                        <img src={urlFor(imgSrc)} alt={it?.subtitle || 'Untitled'} className="h-full w-full object-contain rounded-md bg-none" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    {/* Subtitle  */}
                    <h2 className="text-lg md:text-xl font-semibold text-black/75 mb-2">
                      {it?.subtitle || 'Untitled'}
                    </h2>
                    {lines.length > 0 ? (
                      <div className="list-disc pl-4 text-sm leading-6 text-gray-800">
                        {lines.map((line, i) => (
                          <div key={`${slug}-${i}`}>{line}</div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-sm">No details provided.</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="md:w-[50%] sm:w-[100%] m-auto">
          <img
            src={titleImgSrc}
            alt="test"
            loading="lazy"
            className="w-[90%] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiseSection;
