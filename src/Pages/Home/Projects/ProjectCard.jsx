import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, imageUrl, liveLink, githubLink, technologies }) => {
    return (
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg"> {/* Card styling */}
        <img src={imageUrl} alt={title} className="w-full rounded-lg mb-4" /> {/* Project image */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3> {/* Project title */}
        <div className="flex justify-between items-center mb-4">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-[#3FC8B1] hover:underline">see Live</a> {/* Live link */}
        </div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white"> {/* Github link */}
          <FaGithub className="mr-2" /> project github link
        </a>
        <div className="mt-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md mr-2 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };
  

export default ProjectCard;