import { useState } from "react";
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";
import emailCover from "../../../public/mailz.jpeg";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typical from "react-typical";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const templateInfo = {
      from_name: name,
      from_email: email,
      to_name: "Leonard",
      message: message,
    };

    emailjs
      .send("service_ghxvn5i", "template_o5qhwpp", templateInfo, {
        publicKey: "VElxHt9LM0uL9-oj3",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Email has sent to Joy!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email to Joy!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsLoading(false);
        }
      );
  };
  return (
    <div id="contact" className="mt-24">
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-5xl font-bold" data-aos="fade-right">
          Contact Me
        </h1>
        <p className="text-2xl my-5 text-gray-500" data-aos="fade-left">
          Let's Keep In Touch
        </p>
        <div className="relative flex" data-aos="zoom-in">
          <hr className="text-black w-[250px]  border-gray-700 border-2" />
          <span className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 px-8 py-[6px] rounded-xl"></span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-bgcolor w-[100%] h-[500px] rounded-xl p-5">
          <div className="flex gap-4">
            <div className="w-1/2" data-aos="fade-right">
              <div className="flex gap-2 ">
                <h2 className="text-white text-4xl font-bold mb-5">
                  Get In Touch
                </h2>
                <h1 className="text-3xl font-bold text-white">
                  <Typical loop={Infinity} steps={["", 1000, "", 1000]} />
                </h1>
              </div>
              <div className="flex gap-5 text-2xl text-white justify-start items-center">
                <a href="https://www.facebook.com/leojoy62/" target="blank">
                  <RiFacebookBoxFill className="hover:text-orange-600" />
                </a>
                <a href="https://github.com/Leojoy62" target="blank">
                  <FaSquareGithub className="hover:text-orange-600" />
                </a>
                <a href="https://www.linkedin.com/in/leojoy62/" target="blank">
                  <FaLinkedin className="hover:text-orange-600" />
                </a>
                <a href="https://twitter.com/LeoJoyz" target="blank">
                  <FaSquareXTwitter className="hover:text-orange-600" />
                </a>
              </div>
              <div className="mt-20 ">
                <p className="text-gray-500 text-2xl mb-1">
                  Send Your Email Here !
                </p>
                <div className="relative">
                  <div className="img-gradient">
                    <img src={emailCover} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 " data-aos="fade-left">
              <form onSubmit={sendEmail}>
                <div className="w-[100%] h-[400px] bg-gray-300 rounded-xl mt-14 p-5 flex flex-col items-center justify-center">
                  <div className="w-full">
                    <label className="text-xl font-semibold" htmlFor="name">
                      Name
                    </label>
                    <br />
                    <input
                      className="w-[100%] h-[40px] bg-gray-400 rounded-lg mt-1 px-2 text-xl"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full my-5">
                    <label className="text-xl font-semibold" htmlFor="email">
                      Email
                    </label>
                    <br />
                    <input
                      className="w-[100%] h-[40px] bg-gray-400 rounded-lg mt-1 px-2 text-xl"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xl font-semibold" htmlFor="message">
                      Message
                    </label>
                    <br />
                    <textarea
                      className="w-[100%] h-[80px] bg-gray-400 rounded-lg mt-1 p-2 text-xl"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="w-full mt-5">
                    <button
                      className="btn bg-bgcolor text-white px-10 border-orange-600 text-xl hover:bg-orange-600"
                      type="submit"
                    >
                      {isLoading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
