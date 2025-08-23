import ExperiseSection from './ExperiseSection';

const Expertise = ({ expertise }) => {
  const sections = Array.isArray(expertise) ? expertise : [expertise].filter(Boolean);
  return (
    <>
      <h1
        className="aboutTitle text-black sm:text-4xl md:text-5xl font-bold pb-5"
      >Expertise
      </h1>
      {sections.map((section, idx) => (
        <ExperiseSection expertiseSection={section} key={section?._id || idx} />
      ))}
    </>
  );
};

export default Expertise;
