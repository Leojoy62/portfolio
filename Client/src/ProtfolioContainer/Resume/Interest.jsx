import React from "react";

const Interest = () => {
  return (
    <div data-aos="fade-up">
      <div>
        <div className="flex items-center gap-3">
          <div className="pointer"></div>
          <div className="text-2xl text-orange-600 font-bold">
            Problem Solving
          </div>
        </div>
        <p className="text-xl font-semibold">
          I often solve problem. It helps me to think and do something out of my
          comfort zone.
        </p>
      </div>
      <div className="my-5">
        <div className="flex items-center gap-3">
          <div className="pointer"></div>
          <div className="text-2xl text-orange-600 font-bold">Learning</div>
        </div>
        <p className="text-xl font-semibold ">
          Learning new things is something I am always hunger for. I love to
          learn and explore new technologies.
        </p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <div className="pointer"></div>
          <div className="text-2xl text-orange-600 font-bold">Music</div>
        </div>
        <p className="text-xl font-semibold">
          I listen to music very often. I think it is something that helps me to
          be more productive.
        </p>
      </div>
    </div>
  );
};

export default Interest;
