import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer2 from "./Footer2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { ProjectArr } from "../util/Constant";

import JamMaster from "../layouts/JamMaster";
import DinoRescue from "../layouts/DinoRescue";
import ScaryTeacher from "../layouts/ScaryTeacher";
import SenCity from "../layouts/SenCity";
import StoneAge from "../layouts/StoneAge";

import useDrivePicker from "react-google-drive-picker";

gsap.registerPlugin(ScrollTrigger);

function ProjectLayout({ setIsVisible, setIsDirect, setText }) {
  const [currentProject, setCurrentProject] = useState(null);
  console.log("project", currentProject);
  const location = useLocation();
  const pathname = location.pathname;
  console.log("asd", pathname);
  let path = pathname.substring(6);

  useEffect(() => {
    const matchingProject = ProjectArr.find(
      (project) => project.identifier === path
    );
    setCurrentProject(matchingProject);
  }, [pathname]); // Update only when path changes

  const elementRef = useRef();

  useEffect(() => {
    // Select the carousel container using the ref
    const element = elementRef.current;

    // Create a timeline for the animations
    const tl = gsap.timeline();

    // Set initial position
    gsap.set(element, { y: "-20%" });

    // Add animation to the timeline
    tl.to(element, {
      y: "-=70%",
      scrollTrigger: {
        trigger: element,
        scrub: 0.5,
      },
    });

    // ScrollTrigger update on component unmount
    return () => {
      tl.kill();

      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  console.log("hi", currentProject?.name);

  return (
    <div className="min-h-screen text-black ">
      <NavBar
        setText={setText}
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
      />
      <div className="flex flex-col  justify-center  items-center mt-[13em]  mx-auto ">
        <h1 className="text-[2.2em] md:text-[5em] xl:text-[8em] leading-tight  self-start mx-auto">
          {currentProject?.name}
        </h1>

        <section className=" flex flex-col md:flex-row items-center justify-center gap-[3em] mt-[5em] w-full">
          <div className=" mx-[15px] md:mx-0 flex flex-col gap-[1em] md:gap-[2em] items-start w-full max-w-[20em]">
            <p className="text-[0.7em] text-[#999D9E]">ROLE / SERVICES</p>
            <div className="h-[1px] w-full bg-[#adb4b6]" />
            <h2 className=" text-[0.8em] md:text-base font-semibold">
              {currentProject?.role}
            </h2>
          </div>
          <div className="flex flex-col gap-[2em] items-start  w-full md:max-w-[20em]">
            <p className="text-[0.7em] text-[#999D9E]">Genre</p>
            <div className="h-[1px] w-full bg-[#999D9E]" />
            <h2 className="text-[0.8em] md:text-base font-semibold">
              {currentProject?.genre}
            </h2>
          </div>
          <a
            href={currentProject?.link}
            target="_blank"
            className="w-52 h-52 bg-[#455CE9] rounded-full flex justify-center items-center cursor-pointer">
            <a className="text-white font-semibold">{currentProject?.status}</a>
          </a>
        </section>
      </div>

      <div className=" md:w-[80vw] mx-[15px] md:mx-auto mt-[5em] text-lg">
        <h1 className=" text-[1em] md:text-3xl font-[450]">
          {currentProject?.Intro}
        </h1>
      </div>
      {path === "SenCity" && <SenCity />}
      {path === "Scary-Teacher-Stone-Age" && <StoneAge />}
      {path === "Jam-Master" && <JamMaster />}
      {path === "Dino-Rescue" && <DinoRescue />}
      {path === "Scary-Teacher" && <ScaryTeacher />}

      <div
        ref={elementRef}
        className="bg-white w-full h-[500px] rounded-br-[25%] rounded-bl-[25%] absolute z-[39] "></div>
      <Footer2
        route={currentProject?.nextRoute}
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
        img={currentProject?.img}
        name={currentProject?.nextName}
      />
    </div>
  );
}

export default ProjectLayout;
