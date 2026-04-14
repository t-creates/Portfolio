import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Hero, About, Services, Project, ProjectTypeFilter, Toolbox } from '../components';
import { client } from '../utils/client';
import Contact from '../components/contact/Contact';
import Expertise from '../components/Expertise';
import { getDisplayProjectType } from '../utils/projectHelper';

import { PORTFOLIO_QUERY } from '../lib/queries';

const Home = ({
  hero = [],
  services = [],
  projects = [],
  techno = [],
  expertise = [],
}) => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredProjects = useMemo(() => projects.filter((project) => {
    const type = getDisplayProjectType(project);
    const typeMatch = selectedType === 'all' || type === selectedType;
    const tags = [
      ...(project.tags || []),
      ...(project.projectTypeGroup?.secondaryTags || []),
    ].map((tag) => (typeof tag === 'string' ? tag.toLowerCase() : tag));
    const tagMatch = selectedTag === 'all' || tags.includes(selectedTag.toLowerCase());
    return typeMatch && tagMatch;
  }), [projects, selectedType, selectedTag]);

  return (
    <div className="transition-none transform-none animate-none">
      <Head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Travis Geislinger',
              url: 'https://travisg.tech',
              jobTitle: 'Software Developer',
              sameAs: [
                'https://github.com/t-creates',
                'https://www.linkedin.com/in/travis-geislinger-889b81188/',
              ],
              knowsAbout: [
                'Custom software development',
                'Full stack development',
                'ETL pipelines',
                'GIS applications',
                'AI automation',
                'React',
                'Next.js',
                '.NET',
                'Python',
                'SQL Server',
              ],
            }),
          }}
        />
      </Head>
      <Hero hero={hero} />
      <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 scroll-mt-28 md:scroll-mt-24" id="services">
        <div className="w-full h-full md:p-6 sm:pt-5 mb-10 sm:p-0">
          <Services services={services} />
        </div>
      </div>
      <div className="mt-10 lg:px-24 sm:p-1 sm:pt-11 scroll-mt-28 md:scroll-mt-24" id="about">
        <div className="w-full h-full md:p-11 sm:pt-5">
          <About />
        </div>
      </div>
      <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 my-10">
        <div className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0 scroll-mt-28 md:scroll-mt-24" id="expertise">
          <Expertise expertise={expertise} />
        </div>
      </div>
      {/* <Skills /> */}

      {/* New Projects */}
      <div
        className="mt-10 md:px-6 lg:px-16 sm:p-1 sm:pt-11 scroll-mt-28 md:scroll-mt-24"
        id="projects"
      >
        <div className="lg:mx-24 sm:mx-0">
          <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5">
            Projects
          </h1>
          {/* Project Filters */}
          <div id="project-filters" className="flex w-full justify-center items-center">
            <ProjectTypeFilter
              projects={projects}
              selectedType={selectedType}
              selectedTag={selectedTag}
              onSelectType={setSelectedType}
              onSelectTag={setSelectedTag}
            />
          </div>
          <div
            className="lg:grid lg:grid-cols-3 sm:grid-cols-1 md:flex sm:grid gap-5 mt-5
          justify-between items-stretch w-full h-full scrollbar-hide flex-wrap"
          >
            {/* New Projects */}
            {filteredProjects?.map((project, index) => (
              <Project
                key={project._id}
                projects={project}
                idx={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 md:px-6 lg:px-24 sm:p-1 sm:pt-11 block scroll-mt-28 md:scroll-mt-24" id="toolbox">
        <Toolbox techno={techno} />
      </div>
      {/*
    <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 my-10">
      <div
        className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0"
      >
        <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5">Experience
        </h1>
        <Experience companies={ex} />
      </div>
    </div>
     */}
      <div className="md:px-16 lg:px-24 sm:p-1 sm:pt-11 mt-10 w-full scroll-mt-28 md:scroll-mt-24" id="contact">
        <div className="w-full h-full md:p-6 sm:pt-5 mb-10 lg:m-12 sm:m-0">
          <h1 className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold md:pb-5 sm:p-0">Contact</h1>
          <Contact />
        </div>
      </div>
    </div>

  );
};

// Data Fetching
export async function getServerSideProps() {
  try {
    const data = await client.fetch(PORTFOLIO_QUERY);
    return {
      props: {
        hero: data.hero ? [data.hero] : [],
        services: data.services || [],
        projects: data.projects || [],
        techno: data.techno || [],
        expertise: data.expertise || [],
      },
    };
  } catch (err) {
    return {
      props: { hero: [], /* clientsTest: [], */ projects: [], techno: [], ex: [], expertise: [] },
    };
  }
}

export default Home;
