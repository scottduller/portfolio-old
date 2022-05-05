import ProjectCard from '@components/ProjectCard';
import Head from 'next/head';
import React from 'react';

const projects = () => {
  return (
    <>
      <Head>
        <title>Scott Duller | Projects</title>
      </Head>
      <div className="grid grid-cols-1 justify-items-stretch gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </>
  );
};

export default projects;
