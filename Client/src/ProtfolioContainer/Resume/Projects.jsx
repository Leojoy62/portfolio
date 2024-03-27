import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer"></div>
          <div>
            <h5 className="text-2xl text-orange-600 font-bold">YourChef</h5>

            <p className="text-xl font-semibold">
              A Full Stack Online Restaurant App
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold">
            Details
          </button>
          <a
            href="https://your-chef-74f95.web.app/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Live
          </a>
          <a
            href="https://your-chef-74f95.web.app/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer"></div>
          <div>
            <h5 className="text-2xl text-orange-600 font-bold">CarFixer</h5>

            <p className="text-xl font-semibold">
              A Full Stack Car Repairing App
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold">
            Details
          </button>
          <a
            href="https://genius-car-96391.web.app/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Live
          </a>
          <a
            href=""
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex justify-between items-center gap-5">
          <div className="pointer"></div>
          <div>
            <h5 className="text-2xl text-orange-600 font-bold">Miro</h5>

            <p className="text-xl font-semibold">A Front-end Task Project</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold">
            Details
          </button>
          <a
            href="https://miro-lemon.vercel.app/"
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Live
          </a>
          <a
            href=""
            target="blank"
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
