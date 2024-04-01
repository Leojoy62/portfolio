import React from "react";

const Education = () => {
  return (
    <div data-aos="fade-up">
      <div className="md:flex justify-between items-center">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div>
            <h5 className="text-2xl text-orange-600 font-bold">
              Daffodil Institute of IT, Bangladesh
            </h5>

            <p className="text-xl font-semibold">
              Bachelor of Science in Computer Science & Engineering
            </p>
          </div>
        </div>
        <div className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold mt-5 md:mt-0 text-center">
          2017-2022
        </div>
      </div>
      <div className="md:flex justify-between items-center my-10">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div>
            <h5 className="text-2xl text-orange-600 font-bold">
              Kabi Nazrul Govt. College
            </h5>

            <p className="text-xl font-semibold">
              Higher Secondary Certificate in Science
            </p>
          </div>
        </div>
        <div className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold mt-5 md:mt-0 text-center">
          2014-2016
        </div>
      </div>
      <div className="md:flex justify-between items-center">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer hidden md:block"></div>
          <div>
            <h5 className="text-2xl text-orange-600 font-bold">
              Kotalipara Public Institute
            </h5>

            <p className="text-xl font-semibold">
              Secondary School Certificate in Science
            </p>
          </div>
        </div>
        <div className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold mt-5 md:mt-0 text-center">
          2012-2014
        </div>
      </div>
    </div>
  );
};

export default Education;
