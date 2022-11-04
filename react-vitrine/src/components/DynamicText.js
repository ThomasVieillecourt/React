import React from "react";
import styled, { keyframes } from "styled-components";

const DynamicText = () => {
  const reactArray = "Web Designer".split("");

  const animText = keyframes`
  0%{ opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(-30deg); filter:blur(6px);}
  25%{ opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
  75%{ opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
  100% { opacity: 0; transform: translateY(80px); filter:blur(2px);}
  `;

  const Wrapper = styled.h2`
    display: inline-block;

    span {
      display: inline-block;
      opacity: 0;
      animation-name: ${animText};
      animation-duration: 6s;
      aniamtion-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  `;

  //   useEffect(() => {
  //     const target = document.getElementById("text-target");
  //     let textArray = ["Thomas", "clear", "smart", "strong"];
  //     let wordIndex = 0;
  //     let letterIndex = 0;

  //     const createLetter = () => {
  //       const letter = document.createElement("span");

  //       target.appendChild(letter);
  //       letter.classList.add("letter");
  //       letter.style.opacity = "0";
  //       letter.style.animation = "anim 5s ease forwards";
  //       letter.textContent = textArray[wordIndex][letterIndex];

  //       setTimeout(() => {
  //         letter.remove();
  //       }, 2000);
  //     };

  //     const loop = () => {
  //       setTimeout(() => {
  //         if (wordIndex >= textArray.length) {
  //           wordIndex = 0;
  //           letterIndex = 0;
  //           loop();
  //         } else if (letterIndex < textArray[wordIndex].length) {
  //           createLetter();
  //           letterIndex++;
  //           loop();
  //         } else {
  //           letterIndex = 0;
  //           wordIndex++;
  //           setTimeout(loop, 2000);
  //         }
  //       }, 80);
  //     };
  //     loop();
  //   }, []);

  return (
    <Wrapper>
      {reactArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Wrapper>
  );
};

export default DynamicText;
