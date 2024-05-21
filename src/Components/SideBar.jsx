import React, { createRef, useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useHoverAnimation from "../util/useHoverAnimation";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const arr = [
  { name: "Home", route: "/" },
  { name: "Work", route: "/Work" },
  { name: "About", route: "/About" },
  { name: "Contact", route: "/Contact" },
];

function SideBar({ setIsVisible, setIsDirect, setText }) {
  const location = useLocation();
  const scrollY = useRef();
  const controls = useAnimation();
  const circle = useRef(null);
  const overlayRef = useRef();
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const svgRef = useRef();
  const Menu = useRef(null);
  const MenuAnimate = useMouseMovementAnimation(Menu);
  const circleAnimate = useMouseMovementAnimation(circle);

  useHoverAnimation(circle, overlayRef);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (route, name) => {
    setText(name);
    setIsDirect(true);
    setIsVisible(true);
    setIsOpen(false);
    setTimeout(() => {
      navigate(route);
    }, 1500);
  };

  //burger animation
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    if (isOpen) {
      tl.to(line1Ref.current, { y: 8, ease: "power2.out" }, "<")
        .to(line2Ref.current, { opacity: 0, ease: "power2.out" }, "<.2")
        .to(line3Ref.current, { y: -8, ease: "power2.out" }, "<")
        .to(
          line1Ref.current,
          { rotate: 45, transformOrigin: "center", ease: "power3.inOut" },
          ">"
        )
        .to(
          line3Ref.current,
          { rotate: -45, transformOrigin: "center", ease: "power3.inOut" },
          "<"
        );
    } else {
      tl.to(
        line1Ref.current,
        { rotate: 0, transformOrigin: "center", ease: "power3.inOut" },
        ">"
      )
        .to(
          line3Ref.current,
          { rotate: 0, transformOrigin: "center", ease: "power3.inOut" },
          "<"
        )
        .to(line1Ref.current, { y: 0, ease: "power2.out" }, "<")
        .to(line2Ref.current, { opacity: 1, ease: "power2.out" }, "<.2")
        .to(line3Ref.current, { y: 0, ease: "power2.out" }, "<");
    }

    tl.play();
  }, [isOpen]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (idx) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = (idx) => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    // Set initial active dot based on URL route name
    const activeIndex = arr.findIndex(
      (item) => item.route === location.pathname
    );
    setHoveredIndex(activeIndex !== -1 ? activeIndex : null);
  }, [arr, location]);

  const [isScrolled, setIsScrolled] = useState(false);

  const scrollTrigger = gsap.timeline({
    scrollTrigger: {
      start: "4% top",
      end: "+=10%",
      scrub: true,
      onUpdate: (self) => {
        // Check if scroll position is at start or end
        if (self.direction === -1 && self.progress <= 0.05) {
          setIsScrolled(false);
        } else if (self.direction === 1 && self.progress >= 0.95) {
          setIsScrolled(true);
        }
      },
    },
  });

  useEffect(() => {
    if (!isScrolled) {
      gsap.to(".myclass", {
        scale: 0,
        opacity: 0,
      });
    } else {
      gsap.set(".myclass", { scale: 0, opacity: 0 });

      gsap.to(".myclass", {
        scale: 1,
        opacity: 1,
      });
    }
  }, [isScrolled]);

  const elementsRef = useRef(arr.map(() => createRef()));

  // useEffect(() => {
  //   // Attach animation effects to each ref
  //   elementsRef.current.forEach((textRef) => {
  //     useMouseMovementAnimation(textRef.current);
  //   });
  // }, [elementsRef]);
  return (
    <>
      <motion.div
        ref={circleAnimate}
        transition={{ duration: 0.3, ease: "easeIn" }}
        data-value="-7"
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="myclass bg-[#1C1D20] w-20 h-20 rounded-full fixed top-6 right-3 z-[200] cursor-pointer overflow-hidden flex items-center justify-center ">
        <div
          ref={overlayRef}
          className="w-full h-full relative  bg-[#455CE9] rounded-full translate-y-full"
        />
        <div
          ref={MenuAnimate}
          className="absolute rounded-full w-full h-full flex items-center justify-center ">
          <svg
            ref={svgRef}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg">
            <line
              ref={line1Ref}
              x1="1"
              y1="7"
              x2="29"
              y2="7"
              stroke="gray"
              strokeWidth="2"
            />
            <line
              ref={line2Ref}
              x1="1"
              y1="15"
              x2="29"
              y2="15"
              stroke="gray"
              strokeWidth="2"
            />
            <line
              ref={line3Ref}
              x1="1"
              y1="23"
              x2="29"
              y2="23"
              stroke="gray"
              strokeWidth="2"
            />
          </svg>
        </div>
      </motion.div>

      <motion.section
        animate={{
          transform: `translate(${
            isOpen ? "0%" : "calc(100% + 6vw)"
          }, 0) rotate(0.001deg)`,
          borderRadius: isOpen ? 0 : "30px 0 0 30px",
        }}
        transition={{ transform: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } }}
        className="fixed right-0 h-screen w-full lg:w-2/6 z-[99] bg-[#141517]">
        <div className=" absolute flex flex-col justify-evenly items-center w-full h-full">
          <div className="  max-h-[60vh] relative z-[98]  min-w-[60%] h-full flex flex-col  items-start gap-[0.5em]">
            <p className="text-[#adb4b6] mb-[1em]">Navigation</p>
            <div className="h-[1px] w-full bg-[#adb4b6] mb-[2em]" />
            {arr.map((item, idx) => (
              <section
                key={idx}
                className="flex items-center gap-[1em]"
                onMouseEnter={() => handleHover(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}>
                {hoveredIndex === idx || item.route === location.pathname ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
                    className={`w-4 h-4 bg-white rounded-full mt-[10px] absolute left-[-50px]`} // Adjust opacity on hover
                  />
                ) : null}
                <button onClick={() => handleNavigation(item.route, item.name)}>
                  <h1
                    ref={elementsRef.current[idx]}
                    style={{
                      fontSize: "clamp(2rem, 1.4737rem + 2.6316vw, 4rem)",
                    }}
                    className=" text-white">
                    {item.name}
                  </h1>
                </button>
              </section>
            ))}

            <div className="flex gap-[2em] items-start z-[97] mt-[40px]">
              <div className="flex flex-col mt-[-24px]">
                <h1 className="text-[gray] text-[0.9em] tracking-wide">
                  Socials
                </h1>
                <a
                  className="text-white"
                  href="https://www.linkedin.com/in/muhammadd-asad/"
                  target="_blank">
                  LinkedIn
                </a>
              </div>
              <a
                className="text-white"
                href="https://www.instagram.com/smoky_ma7/"
                target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <motion.div
          animate={{
            borderRadius: isOpen ? 0 : "70% 0 0 70%",
            transform: isOpen ? "translateX(-17%)" : "translateX(-20%)",
          }}
          transition={{
            duration: 0.85,
            ease: [0.7, 0, 0.2, 1],
          }}
          className="bg-[#141517] h-screen w-1/2 relative left-[35px] z-[96]"
        />
      </motion.section>
    </>
  );
}

export default SideBar;
