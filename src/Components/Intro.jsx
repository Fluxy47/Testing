import React, { useEffect, useRef } from "react";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import gsap from "gsap";
import useHoverAnimation from "../util/useHoverAnimation";
import useTextEffect from "../util/useTextEffect";
import { useNavigate } from "react-router-dom";

function Intro({ setText, setIsVisible, setIsDirect }) {
  const navigate = useNavigate();
  const circle = useRef(null);
  const Text = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef();

  const circleAnimate = useMouseMovementAnimation(circle);
  const TextAnimate = useMouseMovementAnimation(Text);
  useHoverAnimation(circle, overlayRef);
  useTextEffect(textRef, "gray", "black");

  const handleNavigation = () => {
    setText("About");
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      navigate("/About");
    }, 1500);
  };

  return (
    <div className="  md:overflow-visible flex flex-col md:flex-row justify-center  items-center mx-[10px] md:mx-[40px] lg:mx-auto gap-[1em] md:gap-[4em] mt-[2em] md:mt-[8em]  md:mb-[20em] relative">
      <div className=" sm:max-w-[30rem] lg:max-w-[38rem] xl:max-w-[45rem] ">
        <h2
          ref={textRef}
          className="text-2xl md:text-3xl 2xl:text-4xl font-[450] text-[#1C1D20]">
          Creating Unforgettable Gaming Experiences. Together, we'll redefine
          the future of gaming. Innovative, immersive, and always on the cutting
          edge.
        </h2>
      </div>
      <div className=" flex  justify-evenly md:justify-between items-center sm:ml-[-2.3em]">
        <div className="max-w-[11rem]  sm:max-w-[15rem]">
          <p className="text-[#464444]">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the game design world.
          </p>
        </div>
        <div
          onClick={handleNavigation}
          ref={circleAnimate}
          className=" w-32 h-32 relative top-[3em] md:top-0 sm:w-48 sm:h-48 rounded-full bg-[#1C1D20] md:mt-[15em] lg:mt-[12em]  md:absolute flex items-center justify-center overflow-hidden cursor-pointer">
          <div
            ref={overlayRef}
            className="w-48 h-48 absolute  bg-[#455CE9] rounded-full translate-y-full"
          />
          <h2
            ref={TextAnimate}
            className="text-white absolute text-lg flex justify-center items-center w-full h-full ">
            About me
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
