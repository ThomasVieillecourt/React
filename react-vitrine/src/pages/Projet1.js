import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Projet1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
        <img
          src="./assets/img/4.png"
          alt="illustration 3D curseur"
          id="cursor"
        />
      </div>
    </main>
  );
};

export default Projet1;
