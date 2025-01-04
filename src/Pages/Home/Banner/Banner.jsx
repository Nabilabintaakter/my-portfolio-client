import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFacebookSquare } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';
import { Typewriter } from "react-simple-typewriter";



const Banner = () => {
    return (
        <div className=" text-white flex flex-col md:flex-row items-center md:justify-between px-6 h-[900px] md:h-[500px] py-10 md:py-12 max-w-screen-2xl mx-auto">
            {/* Left Section */}
            <div className="md:w-2/3">
                <p className="text-lg text-[#3FC8B1] font-semibold">Assalamualaikum!</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-3">
                    I'm{" "}
                    <span className="text-[#3FC8B1]">
                        <Typewriter
                            words={["Nabila Binta Akter", "A Front-End Developer"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={60}
                            delaySpeed={2000}
                        />
                    </span>
                </h1>
                <p className="md:text-lg mt-4 w-full md:w-[70%]">
                    Dedicated and enthusiastic Front-End Developer with expertise in
                    modern technologies like HTML, CSS, Tailwind CSS, DaisyUI, JavaScript, React, Node.js, Express.js, and MongoDB.
                    Passionate about crafting user-friendly and efficient web
                    applications.
                </p>
                <div className="mt-4 flex gap-3 items-center">
                    <a
                        href="mailto:nabilabintaakter@gmail.com"
                        className="flex items-center space-x-2 text-[#3FC8B1] hover:text-[#4CBACE]"
                        target='blank'
                    >
                        <img
                            src="https://i.ibb.co.com/fM0jgs0/7089163-gmail-google-icon.png"
                            alt="Gmail"
                            className="w-8"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100011463773064" target='blank'
                        className="flex items-center space-x-2 text-[#3FC8B1] hover:text-[#4CBACE]"
                    >
                        <img className='w-8' src="https://i.ibb.co.com/WzybH1k/317727-facebook-social-media-social-icon.png" alt="facebook" />
                    </a>
                    <a
                        href="https://github.com/Nabilabintaakter" target='blank'
                        className="flex items-center space-x-2 text-[#3FC8B1] hover:text-[#4CBACE]"
                    >
                        <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 1024 1024" class="w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                    </a>
                </div>
                <div className="mt-6 flex space-x-4">
                    <a
                        href="https://docs.google.com/document/d/1XUZcBlDpaEgMvyWPZnibB-HraJvg9L4T1pPlOksbDGA/export?format=pdf"
                        download="Nabila_Binta_Akter_Resume.pdf"
                    >
                        <button className="bg-[#3FC8B1] hover:bg-[#3FC8B1] text-white px-4 py-2 rounded-lg resume-btn">
                            Download Resume
                        </button>
                    </a>
                </div>



            </div>

            {/* Right Section */}
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
                <div className=' flex flex-col items-center'>
                    <h2 className="text-4xl font-bold text-[#5BABEE] mb-4 lg:mb-6">Skills</h2>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-[#4CBACE] text-7xl">
                        <FaHtml5 className='hover:scale-110 transition-all duration-500 ease-out' title="HTML5" />
                        <FaCss3Alt className='hover:scale-110 transition-all duration-500 ease-out' title="CSS3" />
                        <SiTailwindcss className='hover:scale-110 transition-all duration-500 ease-out' title="Tailwind CSS" />
                        <SiJavascript className='hover:scale-110 transition-all duration-500 ease-out' title="JavaScript" />
                        <FaReact className='hover:scale-110 transition-all duration-500 ease-out' title="React.js" />
                        <FaNodeJs className='hover:scale-110 transition-all duration-500 ease-out' title="Node.js" />
                        <SiExpress className='hover:scale-110 transition-all duration-500 ease-out' title="Express.js" />
                        <SiMongodb className='hover:scale-110 transition-all duration-500 ease-out' title="MongoDB" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
