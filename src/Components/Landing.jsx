import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img2 from "../assets/img2.png";
gsap.registerPlugin(ScrollTrigger);

function Landing({ setIsVisible, setIsDirect, setText }) {
  const elementRef = useRef();
  const elementRef2 = useRef();
  useEffect(() => {
    // Select the carousel container using the ref
    const element = elementRef.current;
    const element2 = elementRef2.current;

    // Create a timeline for the animations
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    // Add animation to the timeline
    tl.to(element, {
      y: "-=80%",
      scrollTrigger: {
        trigger: element,
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
      },
    });

    tl2.to(element2, {
      y: "-=80%",
      scrollTrigger: {
        trigger: element2,
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
      },
    });

    // ScrollTrigger update on component unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  useEffect(() => {
    gsap.to(".loop-text", {
      x: "100%",
      duration: 5,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#DBD8D3] relative picclass">
      <NavBar
        color="white"
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
        setText={setText}
      />
      <img
        src={img2}
        className=" h-[100dvh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <section className="hidden md:flex w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between ">
        <div
          ref={elementRef}
          className="bg-[#1C1D20] h-[120px] w-[270px] rounded-r-full flex justify-center items-center">
          <div className="flex w-full justify-around">
            <span className="text-white text-center">
              <p className="text-xl mt-[5px]">Located</p>
              <p className="text-xl">in London</p>
            </span>
            <div className="lg:w-[70px] w-[50px] h-[50px] lg:h-[70px] rounded-full bg-[#999D9E]"></div>
          </div>
        </div>
        <div
          ref={elementRef2}
          className=" mr-[30px] lg:mr-[145px] text-white font-normal tracking-tighter lg:tracking-wider">
          <h1 className="text-[1.8em] lg:text-[2.4em] lg:mb-[5px]">Games</h1>
          <h1 className=" text-[1.8em] lg:text-[2.4em] ">
            Designer & Developer
          </h1>
        </div>
      </section>

      <div className=" w-full absolute bottom-[30%] md:bottom-0">
        <div className="flex items-center justify-center text-nowrap overflow-hidden text-white">
          <p className="loop-text text-[8em] md:text-[13em]">Muhammad Asad</p>

          <p className="loop-text text-[8em] md:text-[13em]">Muhammad Asad</p>

          <p className="loop-text text-[8em] md:text-[13em]">Muhammad Asad</p>
        </div>
      </div>

      <section className="absolute bottom-16 left-5 md:hidden  flex">
        <h4
          className="flex flex-col text-white"
          style={{ fontSize: "clamp(1.55em, 4vw, 2.5em)" }}>
          <span>Freelance</span>
          <span>Design and developer</span>
        </h4>
      </section>
    </div>
  );
}

export default Landing;
