import React from "react";

const WorkHistory = () => {
  return (
    <div data-aos="fade-up">
      <div className="md:flex justify-between items-center">
        <div className="flex flex-col justify-center md:flex-row md:justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div className="">
            <h5 className="text-2xl text-orange-600 font-bold">
              BW Solutions, Bangladesh
            </h5>

            <p className="text-xl font-semibold">Full Stack Developer</p>
          </div>
        </div>
        <div className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold mt-5 md:mt-0 text-center">
          Oct 2023 - Dec 2023
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
