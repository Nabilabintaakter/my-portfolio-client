import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';

const Education = () => {
  return (
    <div className="bg-[#1D293A] text-white py-12 px-6 mt-5 md:mt-10">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-[#3FC8B1] text-xl md:text-2xl font-semibold mb-2 text-center">Education</h2>
      <hr className="w-1/5 mx-auto border-t-2 border-[#3FC8B1] mb-6 md:mb-16" />
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>

          {/* Education Item 1 */}
          <Slide direction="left" triggerOnce>
            <div className="flex items-center mb-12">
              <div className="w-1/2 text-right pr-4">
                <div className="bg-[#20c997] p-4 rounded-lg inline-block">
                  <h3 className="font-bold text-xl"><span className='text-gray-700 font-semibold text-lg'>(2015-2016)</span> SSC</h3>
                  <p className="text-sm">Sabuj Biddyapith School and College, Dhaka</p>
                </div>
              </div>
              <div className="bg-white p-[2px] rounded-full  flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 bg-[#3FC8B1] rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </Slide>

          {/* Education Item 2 */}
          <Slide direction="right" triggerOnce>
            <div className="flex items-center mb-12">
              <div className="w-1/2"></div>
              <div className="bg-white p-[2px] rounded-full  flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 bg-[#3FC8B1] rounded-full flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="w-1/2 text-left pl-4">
                <div className="bg-[#20c997] p-4 rounded-lg inline-block">
                  <h3 className="font-bold text-xl">HSC <span className='text-gray-700 font-semibold text-lg'>(2016-2018)</span></h3>
                  <p className="text-sm">Dr. Mahbubur Rahman Mollah College, Dhaka</p>
                </div>
              </div>
            </div>
          </Slide>

          {/* Education Item 3 */}
          <Slide direction="left" triggerOnce>
            <div className="flex items-center mb-12">
              <div className="w-1/2 text-right pr-4">
                <div className="bg-[#20c997] p-4 rounded-lg inline-block">
                  <h3 className="font-bold text-xl"><span className='text-gray-700 font-semibold text-lg'>(2019-2024)</span> BSc in EEE</h3>
                  <p className="text-sm">Faridpur Engineering College (Affiliated to Dhaka University)</p>
                </div>
              </div>
              <div className="bg-white p-[2px] rounded-full flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 bg-[#3FC8B1] rounded-full flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Education;
