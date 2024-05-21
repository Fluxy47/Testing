import React, { useEffect, useRef } from "react";
import Landing from "../Components/Landing";
import Intro from "../Components/Intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
// import Project2 from "../Components/Project2";
import { useLocation } from "react-router-dom";
import Projects from "../Components/Projects";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ setIsVisible, setIsDirect, setText }) => {
  const location = useLocation();

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

  return (
    <div className=" relative z-40 ">
      <Landing
        setText={setText}
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
      />
      <Intro
        setText={setText}
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
      />
      {/* <Project2 setIsVisible={setIsVisible} setIsDirect={setIsDirect} /> */}
      <Projects setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
      <div
        ref={elementRef}
        className="bg-white w-full h-[500px] rounded-br-[25%] rounded-bl-[25%] absolute z-[39] "></div>
      <Footer setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
    </div>
  );
};

export default Home;
