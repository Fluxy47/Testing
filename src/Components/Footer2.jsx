import React, { useRef, useState } from "react";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import useHoverAnimation from "../util/useHoverAnimation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Footer2({ route, setIsVisible, setIsDirect, img, name, setText }) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const circle = useRef(null);
  const overlayRef = useRef();

  const circleAnimate = useMouseMovementAnimation(circle);

  useHoverAnimation(circleAnimate, overlayRef);

  const handleNavigation = () => {
    setText(name);
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      navigate(route);
    }, 1500);
  };

  const handleNavigation2 = () => {
    setText("Work");
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      navigate("/Work");
    }, 1500);
  };

  return (
    <section className="h-screen absolute  bg-[#1c1d20] w-full flex justify-center items-center">
      <section className=" flex flex-col items-center mt-[5em]">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={handleNavigation}
          className=" flex flex-col items-center cursor-pointer">
          <h2 className="text-white text-2xl font-[350] ">Next Project</h2>
          <motion.h1
            animate={{ color: isHover ? "grey" : "white" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white relative top-14 text"
            style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}>
            {name}
          </motion.h1>
          <motion.img
            animate={{ y: isHover ? "-55%" : 0 }}
            transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
            src={img}
            className="w-[25vw] h-[40vh] mt-[5em] image"
          />
        </div>
        <div className="absolute bottom-[1em] z-[99999]  bg-[#1c1d20] border-t-2 border-[grey]  w-[80%] h-[40vh] flex items-center justify-center mt-[10em] ">
          {/* <button
            onClick={handleNavigation2}
            className="rounded-full w-44 h-[5rem] border-2 border-[grey] text-white cursor-pointer">
            All Work
          </button> */}
          <button
            ref={circleAnimate}
            className="w-44 h-[5rem]  relative rounded-full border-[1px] bg-transparent text-white font-[450] text-lg overflow-hidden">
            <div
              ref={overlayRef}
              className="w-full h-full relative  bg-[#455CE9] rounded-full translate-y-full"
            />

            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              All Work
            </span>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Footer2;
