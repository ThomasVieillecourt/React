import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>Thomas</h1>
            <DynamicText />
          </div>
        </div>

        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
