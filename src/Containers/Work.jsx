import React, { useRef, useEffect } from "react";
// import Projects from "../Components/Projects";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testing from "../Components/Testing";
import useHoverAnimation from "../util/useHoverAnimation";

function Work({ setIsVisible, setIsDirect }) {
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

  // const overlayRef = useRef();
  // const circleRef = useRef(null);
  // useHoverAnimation(circleRef, overlayRef);

  // const overlayRef2 = useRef();
  // const circleRef2 = useRef(null);
  // useHoverAnimation(circleRef2, overlayRef2);

  // const overlayRef3 = useRef();
  // const circleRef3 = useRef(null);
  // useHoverAnimation(circleRef3, overlayRef3);

  return (
    <div className="min-h-screen">
      <NavBar
        color="black"
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
      />
      {/* <section
        className="mt-[12em]"
        style={{
          paddingLeft: `calc(clamp(clamp(2.5em, 8vw, 8em)) * 2)`,
          paddingRight: "calc(clamp(2.5em, 8vw, 8em)) * 2)",
        }}>
        <div className="flex flex-wrap relative items-center justify-center">
          <div className="flex flex-col ml-[-385px]">
            <h1
              className="font-[450] tracking-normal m-0 p-0 "
              style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}>
              <span>Creating next level</span>
              <br />
              <span className="relative top-[-40px] ">digital products</span>
              <div className="bg-[grey] h-[1px] w-[139%] mt-[1em] " />
            </h1>
          </div>
        </div>
        <div
          className="rounded-[50%] overflow-hidden bg-[#455CE9] relative top-0 left-[55%] translate-x-1/2 -translate-y-1/2"
          style={{
            width: "clamp(9em, 13vw, 12em)",
            height: " clamp(9em, 13vw, 12em)",
          }}></div>
      </section> */}

      <section className="w-full lg:max-w-[90vw] mx-auto ">
        <div className="flex  flex-col items-start justify-start w-full mx-[25px] lg:ml-[11em] mt-[8em] ">
          <h1
            className="font-[450] tracking-normal  "
            style={{ fontSize: "calc(clamp(2.4em, 7vw, 8em) * .875)" }}>
            <span>Helping brands thrive</span>
            <br />
            <span className=" lg:relative bottom-[30px]">
              in the digital world
            </span>
          </h1>

          <div className="bg-[grey] h-[1px]  w-[95%] sm:w-[80%]  mt-[5em] sm:mt-[1em] " />
          <div
            className="rounded-[50%] overflow-hidden bg-[#455CE9] relative top-0 left-[20%] sm:left-[40%] lg:left-[55%] translate-x-1/2 -translate-y-1/2"
            style={{
              width: "clamp(9em, 13vw, 12em)",
              height: " clamp(9em, 13vw, 12em)",
            }}></div>
        </div>
      </section>

      {/* <section className="border-2 border-black flex w-[70vw] justify-between ">
          <section className="flex  gap-[0.5em] items-center justify-center">
            <div
              ref={circleRef}
              className="w-32 h-[70px] relative rounded-full border border-black overflow-hidden cursor-pointer">
              <div
                ref={overlayRef}
                className="w-full h-full relative  bg-[blue] rounded-full translate-y-full"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                All
              </p>
            </div>

            <div
              ref={circleRef2}
              className="w-32 h-[70px] relative rounded-full border border-black overflow-hidden cursor-pointer">
              <div
                ref={overlayRef2}
                className="w-full h-full relative  bg-[blue] rounded-full translate-y-full"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Design
              </p>
            </div>

            <div
              ref={circleRef3}
              className="w-36 h-[70px] relative rounded-full border border-black overflow-hidden cursor-pointer">
              <div
                ref={overlayRef3}
                className="w-full h-full relative  bg-[blue] rounded-full translate-y-full"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Development
              </p>
            </div>
          </section>

          <section className="flex gap-[0.5em]">
            {" "}
            <div className="bg-[#1C1D20] w-20 h-20 rounded-full  cursor-pointer flex items-center justify-center overflow-hidden">
             
              <div className="rounded-full w-full h-full flex items-center justify-center ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="1"
                    y1="7"
                    x2="29"
                    y2="7"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="15"
                    x2="29"
                    y2="15"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="23"
                    x2="29"
                    y2="23"
                    stroke="gray"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
           
            <div className="bg-[#1C1D20] w-20 h-20 rounded-full  cursor-pointer flex items-center justify-center overflow-hidden">
           
              <div className="rounded-full w-full h-full flex items-center justify-center ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="1"
                    y1="7"
                    x2="29"
                    y2="7"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="15"
                    x2="29"
                    y2="15"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="23"
                    x2="29"
                    y2="23"
                    stroke="gray"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </section>
        </section> */}

      <Testing setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
      {/* <Projects /> */}
      {/* <Work2 /> */}
      <div
        ref={elementRef}
        className="bg-white w-full h-[500px] rounded-br-[25%] rounded-bl-[25%] absolute z-[39] "></div>
      <Footer setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
    </div>
  );
}

export default Work;
