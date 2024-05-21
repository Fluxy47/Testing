import React, { useEffect, useRef } from "react";
import NavBar from "../Components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
import pic from "../assets/pic.jpg";
import aboutpic from "../assets/aboutpic.jpg";
import { transform } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";

gsap.registerPlugin(ScrollTrigger);

function About({ setIsVisible, setIsDirect, setText }) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const Cont = useRef(null);
  const imageRef = useRef(null);
  const imageCont = useRef(null);
  const elementRef = useRef();
  const circleRef = useRef();
  const Text = useRef();

  const circleAnimate = useMouseMovementAnimation(circleRef);
  const TextAnimate = useMouseMovementAnimation(Text);

  useEffect(() => {
    const container = imageCont.current;
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      },
    });

    tl.fromTo(
      image,
      {
        yPercent: -20,
        ease: "none",
      },
      {
        yPercent: 20,
        ease: "none",
      }
    );
  }, []);

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

  const pinContainer = useRef();
  const pinElement = useRef();

  useEffect(() => {
    const Container = pinContainer.current;
    const element = pinElement.current;

    if (!isSmallDevice) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: Container,
        start: "top top",
        end: "bottom bottom",
        pin: element,
        scrub: 0.5,
      });

      // Clean up ScrollTrigger on unmount (optional)
      return () => scrollTrigger.kill();
    }
  }, []);

  return (
    <div>
      <NavBar
        color="black"
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
        setText={setText}
      />

      <section className="w-full lg:max-w-[90vw] mx-auto ">
        <div className="flex  flex-col items-start justify-start w-full mx-[25px] lg:ml-[11em] mt-[8em] ">
          <h1
            className="font-[450] tracking-normal  "
            style={{ fontSize: "calc(clamp(2.4em, 7vw, 8em) * .875)" }}>
            <span>From Player to Creator</span>
            <br />
            <span className=" lg:relative bottom-[30px]">
              My Passion for Game Design
            </span>
          </h1>

          <div className="bg-[grey] h-[1px]  w-[95%] sm:w-[80%]  mt-[5em] sm:mt-[3em] " />
          <a
            ref={circleAnimate}
            href="https://drive.google.com/drive/folders/18xyS7LY4qZ-oWw70C1dsUFB62gHovIIk?usp=sharing"
            target="_blank"
            className="rounded-[50%] overflow-hidden bg-[#455CE9] relative top-0 left-[20%] sm:left-[40%] lg:left-[55%] translate-x-1/2 -translate-y-1/2"
            style={{
              width: "clamp(9em, 13vw, 12em)",
              height: " clamp(9em, 13vw, 12em)",
            }}>
            <h1
              ref={TextAnimate}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[2em]">
              CV
            </h1>
          </a>

          <section className=" min-h-screen flex flex-col lg:flex-row mt-[-3em] lg:mt-[8em] justify-start items-center w-[90vw] mx-auto gap-[4em] lg:gap-x-[8em] sm:ml-[20px] relative right-[10%]">
            <div className="flex flex-col  w-full max-w-[90%] lg:max-w-[30em] gap-[1em] lg:self-start mt-[3em]">
              <p className="font-medium text-[#313232] text-[1.2em]">
                I am a dedicated game designer and developer with a profound
                passion for creating immersive gaming experiences. With two
                years of professional experience, I have successfully published
                four games, each reflecting my commitment to innovation and
                quality. My expertise lies in utilizing Unity, but I am eager to
                explore other game engines and technologies as opportunities
                arise. As a passionate gamer, my love for games fuels my
                creativity and drives me to continually push the boundaries of
                game design. My goal is to craft engaging, memorable experiences
                that captivate players and leave a lasting impact on the gaming
                community.
              </p>
            </div>
            <div
              ref={imageCont}
              className="overflow-hidden border-2 border-red-950 w-full lg:max-w-[60%] mr-[15px] flex justify-center">
              <img
                ref={imageRef}
                src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/aboutpic.jpg?tr=w-1200"
                className=" w-full"
              />
            </div>
          </section>
        </div>

        <section
          ref={pinContainer}
          className="flex flex-col md:flex-row justify-center relative mt-[5em] md:mt-0 z-[40] gap-[4em] md:gap-0">
          <section className="md:h-screen flex justify-center items-center md:ml-[50px]">
            <div
              ref={pinElement}
              className="md:border-l-[5px] border-[red] w-full md:max-w-[40em] xl:max-w-[48em]  flex items-center justify-center">
              <h1 className="text-[3em] md:text-[3.5rem] lg:text-[5rem] xl:text-[7rem] tracking-tighter leading-[1.02] ml-[30px]">
                I CAN HELP YOU WITH
              </h1>
            </div>
          </section>
          <section className="flex flex-col md:mt-[16em] md:mr-[80px] mx-[20px] gap-[4em] md:gap-0">
            <div className=" md:h-screen flex items-center justify-center ">
              <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
                <p className="text-[#adb4b6] text-[0.8em]">01</p>
                <div className="h-[1px] w-full bg-[#adb4b6] " />
                <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
                  Games Design
                </h2>{" "}
                <div className="w-full max-w-[50em]">
                  <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                    I specialize in crafting engaging and innovative game
                    concepts, ensuring that each project delivers a unique and
                    captivating player experience. My services include
                    comprehensive game design documentation, mechanic
                    development, and creative direction to bring your vision to
                    life.
                  </p>
                </div>
              </div>
            </div>

            <div className=" md:h-screen flex items-center justify-center ">
              <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
                <p className="text-[#adb4b6] text-[0.8em]">02</p>
                <div className="h-[1px] w-full bg-[#adb4b6] " />
                <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
                  Level Design
                </h2>{" "}
                <div className="w-full max-w-[50em]">
                  <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                    I provide expert level design services, creating immersive
                    and challenging environments that enhance gameplay and keep
                    players invested. From initial layout to intricate
                    detailing, I focus on designing levels that are both
                    visually stunning and strategically sound.
                  </p>
                </div>
              </div>
            </div>

            <div className=" md:h-screen flex items-center justify-center ">
              <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
                <p className="text-[#adb4b6] text-[0.8em]">03</p>
                <div className="h-[1px] w-full bg-[#adb4b6] " />
                <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
                  Game Development
                </h2>{" "}
                <div className="w-full max-w-[50em]">
                  <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                    With extensive experience in Unity and a readiness to
                    explore other engines, I offer full-cycle game development
                    services. From coding and prototyping to final polish and
                    deployment, I ensure your game runs smoothly and meets the
                    highest standards of quality.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      <div
        ref={elementRef}
        className="bg-white w-full h-[500px] rounded-br-[25%] rounded-bl-[25%] absolute z-[39] pt-[250px]"></div>
      <Footer setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
    </div>
  );
}

export default About;
