import React, { useState } from "react";
import Details from "./Details";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [projectNum, setProjectNum] = useState(1);

  const toggleModal = (value = true) => {
    setIsOpen(value);
  };

  const toggleProjectNum = (val) => {
    setProjectNum(val);
  };

  return (
    <div data-aos="fade-up">
      {isOpen && (
        <Details
          toggleModal={toggleModal}
          data={
            projectNum === 1 ? (
              <div>
                <p>
                  <span className="text-orange-600 font-bold">YourChef:</span> A
                  full-stack restaurant management application. <br />
                  <span className="text-orange-600 font-bold">
                    Front-end:
                  </span>{" "}
                  React.js, Axios, React Router, Tanstack Query, Firebase,
                  Tailwind CSS <br />
                  <span className="text-orange-600 font-bold">
                    Back-end:
                  </span>{" "}
                  Node.js, Express.js, MongoDB, JWT. <br />
                  <span className="text-orange-600 font-bold">
                    Payment Integration:
                  </span>{" "}
                  Stripe <br />
                  <span className="text-orange-600 font-bold">
                    Project Highlights:
                  </span>{" "}
                  Designed and implemented an intuitive user interface for
                  customers to browse menus, place orders, and make
                  reservations, enhancing the overall user experience. <br />
                  Integrated Stripe for secure and efficient online payment
                  processing. <br />
                  Utilized Tan Stack Query to optimize data fetching.
                  Implemented Firebase to manage user authentication.
                </p>
              </div>
            ) : projectNum === 2 ? (
              <div>
                <p>
                  <span className="text-orange-600 font-bold">CarFixer:</span>{" "}
                  From this website, people can get an appointment for servicing
                  their cars. They can also buy different parts for their cars
                  with any type of service. <br />
                  <span className="text-orange-600 font-bold">
                    Front-end:
                  </span>{" "}
                  React.js, React Router, Firebase <br />
                  <span className="text-orange-600 font-bold">
                    Back-end:
                  </span>{" "}
                  Node.js, Express.js, JWT, MongoDB. <br />
                  <span className="text-orange-600 font-bold">
                    Project Highlights:
                  </span>{" "}
                  Users can easily search for their desired services and filter
                  services on a price basis. Easy to place orders.{" "}
                </p>
              </div>
            ) : projectNum === 3 ? (
              <div>
                <p>
                  <span className="text-orange-600 font-bold">Miro:</span> A
                  front-end project (Task). <br />
                  <span className="text-orange-600 font-bold">
                    Technologies Used:
                  </span>{" "}
                  <br />
                  React: I used React JS for interactive UI design. <br />
                  CSS3: I used a little bit raw css for Styling and to design
                  the visual appearance of the webpage. <br />
                  Tailwind CSS: Frontend framework for building responsive and
                  mobile-first projects. <br />
                  DaisyUI: I have implemented daisy ui for iteractive and
                  responsive navbar. <br />
                  <span className="text-orange-600 font-bold">
                    Project Highlights:
                  </span>{" "}
                  <br />
                  Responsive Design: The webpage is designed to adapt seamlessly
                  to various screen sizes and devices, ensuring a consistent
                  user experience.
                </p>
              </div>
            ) : null
          }
        />
      )}
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
          <button
            onClick={() => {
              toggleModal(true);
              toggleProjectNum(1);
            }}
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
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
          <button
            onClick={() => {
              toggleModal(true);
              toggleProjectNum(2);
            }}
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
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
          <button
            onClick={() => {
              toggleModal(true);
              toggleProjectNum(3);
            }}
            className="bg-orange-600 text-white py-2 px-4 rounded-3xl font-semibold"
          >
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
