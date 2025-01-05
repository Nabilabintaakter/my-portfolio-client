import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { title, imageUrl, liveLink, description, technologies } = project || {}
  return (
    <div className="bg-[#1e293b] rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full mb-4 h-[180px] object-cover" />
      <div className='px-4'>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        {technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-5 items-center my-4">
          <Link className="bg-transparent border-2 border-[#32a893] text-white px-3 py-[6px] rounded-md hover:bg-[#32a893] transition duration-300 flex items-center" to={`/projects/${project._id}`}>View Details</Link>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3FC8B1] text-black px-4 py-2 rounded-md hover:bg-[#32a893] transition duration-300 flex items-center" // Button styles
          >
            Live Link
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;