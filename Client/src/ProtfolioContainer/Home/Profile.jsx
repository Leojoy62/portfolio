import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Profile.css";
import pp from "../../../public/PP Size.jpg";

import Typical from "react-typical";
import ProFooter from "./ProFooter";
import NavBar from "./NavBar";

const Profile = () => {
  return (
    <div id="home" className="profile-container bg-bgcolor">
      <div>
        <NavBar />
      </div>
      <div className="flex justify-between  pt-10 pb-24 px-[5%]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-8 text-4xl text-white justify-center items-center">
            <RiFacebookBoxFill className="hover:text-orange-600" />
            <FaSquareGithub className="hover:text-orange-600" />
            <FaLinkedin className="hover:text-orange-600" />
            <FaSquareXTwitter className="hover:text-orange-600" />
          </div>
          <div className="mt-3 mb-5">
            <h1 className="text-4xl font-bold text-white">
              Hello, I'm{" "}
              <span className="text-orange-600">Leonard Joy Mridha</span>
            </h1>
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-white">
              <Typical
                loop={Infinity}
                steps={[
                  "MERN Stack Developer",
                  1000,
                  "Web App Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Software Developer",
                  1000,
                ]}
              />
            </h1>
          </div>
          <div className="my-5">
            <p className="text-gray-400 text-xl">
              Knack of building applications with front and back end operations.
            </p>
          </div>
          <div className="flex gap-6">
            <button className="btn btn-outline hover:bg-orange-600 text-white px-10 rounded-3xl text-lg font-bold">
              Hire Me
            </button>
            <a
              href="../../../public/Resume_of_Leonard_Joy_Mridha(MERN).pdf"
              download={"Resume_of_Leonard_Joy_Mridha(MERN)"}
            >
              <button className="btn bg-orange-600 hover:bg-black border-0 text-white px-10 rounded-3xl text-lg font-bold">
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <img src={pp} alt="" />
        </div>
      </div>

      <ProFooter />
    </div>
  );
};

export default Profile;
