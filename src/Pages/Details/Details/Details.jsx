import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const project = useLoaderData();
    const {
        title,
        imageUrl,
        liveLink,
        githubLink,
        technologies,
        description,
        challenges,
        lackings
    } = project || {};

    return (
        <div className="w-[95%]  md:w-[80%] mx-auto py-8 bg-gray-900 text-white min-h-screen"> {/* Added container and styling */}
            <div className="max-w-3xl mx-auto"> {/* Content wrapper */}
            <h2 className="text-[#3FC8B1] text-xl md:text-2xl font-semibold mb-2 text-center">{title}</h2>
            <hr className="w-1/5 mx-auto border-t-2 border-[#3FC8B1] mb-6 md:mb-8" />

                {imageUrl && (
                    <div className="mb-6 rounded-lg overflow-hidden shadow-lg"> {/* Image container */}
                        <img src={imageUrl} alt={title} className="w-full object-cover" />
                    </div>
                )}

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#4CBACE]">Description</h2>
                    <p className="text-gray-300">{description}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#4CBACE]">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {technologies?.map((tech) => (
                            <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#4CBACE]">Challenges</h2>
                    <p className="text-gray-300">{challenges}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-[#4CBACE]">Areas for Improvement</h2>
                    <p className="text-gray-300">{lackings}</p>
                </div>

                <div className="flex justify-center gap-4 mt-12 md:mt-16"> {/* Links section */}
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#3FC8B1] text-black px-4 py-2 rounded-md hover:bg-[#32a893] transition duration-300">
                            Live Site
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300">
                            GitHub Repo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;