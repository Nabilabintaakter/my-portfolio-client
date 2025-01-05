import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Education = () => {
  return (
    <div className="bg-[#1D293A] text-white py-12 px-6 mt-5 md:mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#3FC8B1] text-xl md:text-2xl font-semibold mb-2 text-center">Education</h2>
        <hr className="w-1/5 mx-auto border-t-2 border-[#3FC8B1] mb-6 md:mb-16" />
        <div>
          {/* Education Item 1 */}
          <Fade direction="down" triggerOnce>
            <div className="flex flex-col items-center mb-8">
              <div className="w-full bg-[#20c997] p-4 rounded-lg">
                <h3 className="font-bold text-xl">
                  <span className="text-gray-700 font-semibold text-lg">(2015-2016)</span> SSC
                </h3>
                <p className="text-sm">Sabuj Biddyapith School and College, Dhaka</p>
              </div>
            </div>
          </Fade>

          {/* Education Item 2 */}
          <Fade direction="down" triggerOnce>
            <div className="flex flex-col items-center mb-8">
              <div className="w-full bg-[#20c997] p-4 rounded-lg">
                <h3 className="font-bold text-xl">
                  HSC <span className="text-gray-700 font-semibold text-lg">(2016-2018)</span>
                </h3>
                <p className="text-sm">Dr. Mahbubur Rahman Mollah College, Dhaka</p>
              </div>
            </div>
          </Fade>

          {/* Education Item 3 */}
          <Fade direction="down" triggerOnce>
            <div className="flex flex-col items-center mb-8">
              <div className="w-full bg-[#20c997] p-4 rounded-lg">
                <h3 className="font-bold text-xl">
                  <span className="text-gray-700 font-semibold text-lg">(2019-2024)</span> BSc in EEE
                </h3>
                <p className="text-sm">
                  Faridpur Engineering College (Affiliated to Dhaka University)
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Education;
