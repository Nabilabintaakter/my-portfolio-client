import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectsData = [
      {
        title: 'codecampJr.',
        imageUrl: 'image1.jpg', // Replace with your image path
        liveLink: 'https://your-live-link1.com',
        githubLink: 'https://github.com/your-github-link1',
        technologies: ['NextJs', 'TailwindCss', 'ExpressJs', 'MongoDB'],
      },
      {
        title: 'Tutorcamp.',
        imageUrl: 'image2.jpg', // Replace with your image path
        liveLink: 'https://your-live-link2.com',
        githubLink: 'https://github.com/your-github-link2',
        technologies: ['ReactJs+Vi', 'TailwindCss', 'ExpressJs', 'MongoDB'],
      },
      {
        title: 'dalia-mess-site',
        imageUrl: 'image3.jpg', // Replace with your image path
        liveLink: 'https://your-live-link3.com',
        githubLink: 'https://github.com/your-github-link3',
        technologies: ['ReactJs+Vi', 'TailwindCss', 'ExpressJs', 'MongoDB'],
      },
    ];
  
    return (
      <div className="bg-[#0f172a] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-[#3FC8B1] text-xl md:text-2xl font-semibold mb-2 text-center">Projects</h2>
        <hr className="w-1/5 mx-auto border-t-2 border-[#3FC8B1] mb-6 md:mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;