import React from "react";
import Profile from "./Profile";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
  return (
    <div>
      <Profile />
      <AboutMe />
      <Resume />
      <ContactMe />
    </div>
  );
};

export default Home;
