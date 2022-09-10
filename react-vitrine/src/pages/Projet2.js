import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Projet2 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};

export default Projet2;
