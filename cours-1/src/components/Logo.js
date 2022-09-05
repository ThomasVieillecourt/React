import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* {Les images importées depuis les balises img sont accessibles dans "public"} */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React Word</h3>
    </div>
  );
};

export default Logo;
