import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    axios.get('https://my-portfolio-server-livid.vercel.app/projects')
    .then(data=>{
      setProjects(data.data)
    })
  },[])
    return (
      <div className="bg-[#0f172a] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-[#3FC8B1] text-xl md:text-2xl font-semibold mb-2 text-center">Projects</h2>
        <hr className="w-1/5 mx-auto border-t-2 border-[#3FC8B1] mb-6 md:mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;