import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Skills = () => {
  return (
    <div data-aos="fade-up">
      <div className="md:flex md:justify-between flex flex-col md:flex-row justify-center items-center">
        <div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">JavaScript</h5>
            </div>
            <ProgressBar
              completed={80}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
          <div className="my-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">Node JS</h5>
            </div>
            <ProgressBar
              completed={75}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">React JS</h5>
            </div>
            <ProgressBar
              completed={95}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">HTML</h5>
            </div>
            <ProgressBar
              completed={95}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
        </div>
        <div className="mt-6 md:mt-0 lg:mt-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">Express JS</h5>
            </div>
            <ProgressBar
              completed={75}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
          <div className="my-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">MongoDB</h5>
            </div>
            <ProgressBar
              completed={80}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">Next JS</h5>
            </div>
            <ProgressBar
              completed={60}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="pointer"></div>
              <h5 className="text-2xl text-orange-600 font-bold">CSS</h5>
            </div>
            <ProgressBar
              completed={90}
              customLabel=""
              bgColor="orangered"
              baseBgColor="black"
              transitionDuration="1s"
              transitionTimingFunction="ease-in-out"
              width="300px"
              height="14px"
              animateOnRender={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
