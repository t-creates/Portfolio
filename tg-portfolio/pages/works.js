import React, { useState, useEffect } from 'react';
import Projects from '../components/Projects';
import { client } from '../utils/client';
import { projectsQuery } from '../utils/queries';

const works = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(projectsQuery).then((projectsData) => {
      setProjects(projectsData);
      setLoading(false);
    });
  }, []);

  if (loading) return 'loading';

  return (
    <Projects projects={projects} />
  );
};
export default works;
