import vscode from '../../../assets/1082429_code_editor_microsoft_programming_visual_icon.png';
import chrome from '../../../assets/2993698_chrome_logo_logos_icon.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMongoose,  SiPostman, SiGithub, SiGooglechrome } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="bg-[#0f172a] text-white py-12 px-6 mt-5 md:mt-8">
      <div className="max-w-5xl mx-auto"> 
      <h2 className="text-[#3FC8B1] text-xl md:text-2xl font-semibold mb-2 text-center">Skills</h2>
      <hr className="w-1/5 mx-auto border-t-2 border-[#3FC8B1] mb-6 md:mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 

          {/* Frontend Section */}
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg"> {/* Card styling */}
            <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml w-10 h-10 text-blue-400"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
              <h3 className="text-2xl font-semibold ml-2">Frontend</h3>
            </div>
            <ul className="list-disc lg:pl-6 space-y-2 mt-8">
              <li><FaHtml5 className="inline mr-2 text-orange-500 text-3xl"/> HTML</li>
              <li><FaCss3Alt className="inline mr-2 text-blue-500 text-3xl"/> CSS</li>
              <li><FaJsSquare className="inline mr-2 text-yellow-500 text-3xl"/> JavaScript</li>
              <li><FaReact className="inline mr-2 text-cyan-500 text-3xl"/> ReactJs</li>
              <li><SiNextdotjs className="inline mr-2 text-3xl"/> NEXT.js</li>
              <li><SiTailwindcss className="inline mr-2 text-sky-500 text-3xl"/> tailwindcss</li>
            </ul>
          </div>

          {/* Backend Section */}
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database w-8 h-8 text-green-400"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
              <h3 className="text-2xl font-semibold ml-2">Backend</h3>
            </div>
            <ul className="list-disc lg:pl-6 space-y-2 mt-8">
              <li><FaNodeJs className="inline mr-2 text-green-500 text-3xl"/> NodeJs</li>
              <li><SiExpress className="inline mr-2 text-3xl"/> ExpressJs</li>
              <li><SiMongodb className="inline mr-2 text-green-700 text-3xl"/> MongoDB</li>
            </ul>
          </div>

          {/* Tools Section */}
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu w-8 h-8 text-pink-400"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
              <h3 className="text-2xl font-semibold ml-2">Tools</h3>
            </div>
            <ul className="list-disc lg:pl-6 space-y-2 mt-8">
              <li className='flex items-center gap-4 md:gap-[14px] '><img className='w-7 h-7' src={vscode} alt="" /> Vs Code</li>
              <li><SiPostman className="inline mr-2 text-orange-600 text-3xl"/> postman</li>
              <li><SiGithub className="inline mr-2 text-3xl"/> github</li>
              <li className='flex items-center gap-[14px]'><img className='w-7 h-7' src={chrome} alt="" /> Chrome Developer Tool</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;