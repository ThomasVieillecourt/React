import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = ` translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://twitter.com/viei_thomas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <img
              src="./assets/img/twitter3D.png"
              alt="icone twitter"
              width={"40px"}
            />
          </li>
        </a>

        <a
          href="https://www.behance.net/thomasvieillecourt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <img
            src="./assets/img/behance.png"
            alt="icone behance"
            width={"40px"}
          />
        </a>

        <a
          href="https://github.com/ThomasVieillecourt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <img
            src="./assets/img/github.png"
            alt="icone github"
            width={"40px"}
          />
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
