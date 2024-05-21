import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";
// import useCarousel from "../util/UseCarousel";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Stoneage from "../assets/StoneAge.webp";
import JamMaster from "../assets/JamMaster.png";
import DinoRescue from "../assets/DinoRescue.png";
import ScaryTeacher from "../assets/ScaryTeacher.webp";
import SenCity from "../assets/SenCity.webp";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const arr = [
  {
    src: SenCity,
    route: "/work/SenCity",
  },
  {
    src: Stoneage,
    Name: "Scary Teacher Stone Age",
    route: "/work/Scary-Teacher-Stone-Age",
  },
  {
    src: JamMaster,
    route: "/work/Jam-Master",
  },
  {
    src: DinoRescue,
    route: "/work/Dino-Rescue",
  },
  {
    src: ScaryTeacher,
    route: "/work/Scary-Teacher",
  },
];

// mt-[5em] md:mt-[20em]

function Projects({ setIsVisible, setIsDirect }) {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      navigate(route);
    }, 1500);
  };

  const Caraousel1 = useRef();
  const Caraousel2 = useRef();
  const Cont = useRef();
  const mycont = useRef();

  const containerRef = useRef();

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 25 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-evenly  relative gap-[2em]  pb-[250px] z-[40] ">
      <h2
        style={{
          fontSize: " clamp(2.25rem, 1.2796rem + 4.852vw, 5.9375rem)",
        }}
        className=" mx-auto mt-[5em] md:mt-0">
        Work Highlights
      </h2>
      <section
        ref={sliderRef}
        className="keen-slider mt-[1em] md:mt-[8em] ml-[5px] md:ml-[50px]">
        {arr.map((item, idx) => (
          <div
            onClick={() => handleRoute(item.route)}
            key={idx}
            className="keen-slider__slide rounded-[60px] cursor-pointer max-h-[510vh] sm:max-h-[50vh] w-full max-w-[250px] sm:max-w-[350px]  ">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] text-white text-3xl">
              {item.name}
            </h1>
            <img
              src={item.src}
              alt=""
              className="w-[100vw] h-full object-fill "
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
