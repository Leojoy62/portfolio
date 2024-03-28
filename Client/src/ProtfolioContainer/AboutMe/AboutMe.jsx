import React from "react";
import aboutp from "../../../public/About.png";

const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center mt-24">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-5xl font-bold" data-aos="fade-right">
          About Me
        </h1>
        <p className="text-2xl my-5 text-gray-500" data-aos="fade-left">
          Why Choose Me?
        </p>
        <div className="relative flex" data-aos="zoom-in">
          <hr className="text-black w-[250px]  border-gray-700 border-2" />
          <span className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 px-8 py-[6px] rounded-xl"></span>
        </div>
      </div>
      <div className="shadow-gray-500 bg-gray-100 p-8 shadow-xl my-10">
        <div className="flex justify-between items-center gap-5">
          <div className="w-[40%]" data-aos="fade-right">
            <img src={aboutp} alt="" />
          </div>
          <div
            style={{ textAlign: "justify" }}
            className="w-[60%] text-xl"
            data-aos="fade-left"
          >
            <p>
              Greetings, I am{" "}
              <span className="font-bold">Leonard Joy Mridha</span>, a
              professional Full Stack Engineer (MERN Stack) who is passionate
              about making error-free websites with 100% client satisfaction. I
              always try to keep myself updated with the latest technology
              trends. I love to read news related to current technology. I
              interact with the programming and technological community via
              social media. I always try to share my thoughts and acknowledge
              other people's opinions relevant to current technology.{" "}
              <span className="font-bold">"QUICK ADAPTIBILITY" </span>
              is my strength.
            </p>
            <br />
            <h3 className="text-2xl font-semibold">Why Me?</h3>
            <br />
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="pointer"></div>
                <p>
                  Proficient in the MERN stack, with a focus on building
                  end-to-end web applications.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="pointer"></div>
                <p>Strong problem-solving skills and attention to detail.</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="pointer"></div>
                <p>
                  Collaborative team player with cross-functional experience.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="pointer"></div>
                <p>
                  Committed to continuous learning and staying updated with
                  industry trends.
                </p>
              </div>
            </div>

            <div className="flex gap-6 flex justify-center items-center mt-10">
              <a
                href="#contact"
                className="btn bg-black hover:bg-orange-600 text-white px-10 rounded-3xl text-lg font-bold"
              >
                Hire Me
              </a>
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
