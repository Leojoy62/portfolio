import React, { useState } from "react";
import "./Resume.css";
import { MdCastForEducation } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Projects from "./Projects";
import Interest from "./Interest";
const Resume = () => {
  const [toogleMenu, setToggleMenu] = useState(1);

  const toggleTab = (index) => {
    setToggleMenu(index);
  };
  return (
    <div id="resume" className="px-[5%]">
      <div
        className="flex flex-col justify-center items-center my-10"
        data-aos="zoom-in"
      >
        <h1 className="text-5xl font-bold">Resume</h1>
        <p className="text-2xl my-5 text-gray-500">My Formal Bio Details</p>
        <div className="relative flex">
          <hr className="text-black w-[250px]  border-gray-700 border-2" />
          <span className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 px-8 py-[6px] rounded-xl"></span>
        </div>
      </div>
      <div className="flex gap-5  my-10 justify-between items-center ">
        <div className=" w-1/5 ">
          <div className="flex items-center">
            <div
              style={{ fontSize: "28px" }}
              className=" flex flex-col items-center  bg-black text-white px-3 py-10"
            >
              <MdCastForEducation className="mb-10" />
              <MdWorkHistory className="mb-10" />
              <GiSkills className="mb-10" />
              <GoProjectRoadmap className="mb-10" />
              <MdFavorite />
            </div>
            <ul className="text-xl font-semibold flex flex-col mt-10">
              <li
                onClick={() => toggleTab(1)}
                className={
                  toogleMenu === 1
                    ? "current-menu active resume-menu mb-10 pl-2"
                    : "mb-10 pl-2 resume-menu"
                }
              >
                Education
              </li>
              <li
                onClick={() => toggleTab(2)}
                className={
                  toogleMenu === 2
                    ? "current-menu mb-10 pl-2 resume-menu"
                    : "mb-10 pl-2 resume-menu"
                }
              >
                Work History
              </li>
              <li
                onClick={() => toggleTab(3)}
                className={
                  toogleMenu === 3
                    ? "current-menu mb-10 pl-2 resume-menu"
                    : "mb-10 pl-2 resume-menu"
                }
              >
                Skills
              </li>
              <li
                onClick={() => toggleTab(4)}
                className={
                  toogleMenu === 4
                    ? "current-menu mb-10 pl-2 resume-menu"
                    : "mb-10 pl-2 resume-menu"
                }
              >
                Projects
              </li>
              <li
                onClick={() => toggleTab(5)}
                className={
                  toogleMenu === 5
                    ? "current-menu mb-10 pl-2 resume-menu"
                    : "mb-10 pl-2 resume-menu"
                }
              >
                Interests
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-bar"></div>
        <div className="w-3/5  flex flex-col justify-center  scrollable-div py-5 pr-2 ">
          <div
            className={
              toogleMenu === 1
                ? "resume-content current-content"
                : "resume-content"
            }
          >
            <Education />
          </div>
          <div
            className={
              toogleMenu === 2
                ? "resume-content current-content"
                : "resume-content"
            }
          >
            <WorkHistory />
          </div>
          <div
            className={
              toogleMenu === 3
                ? "resume-content current-content"
                : "resume-content"
            }
          >
            <Skills />
          </div>
          <div
            className={
              toogleMenu === 4
                ? "resume-content current-content"
                : "resume-content"
            }
          >
            <Projects />
          </div>
          <div
            className={
              toogleMenu === 5
                ? "resume-content current-content"
                : "resume-content"
            }
          >
            <Interest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
