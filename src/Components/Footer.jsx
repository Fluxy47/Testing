import React, { useRef } from "react";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import useHoverAnimation from "../util/useHoverAnimation";

function Footer() {
  const circle = useRef(null);
  const Text = useRef(null);
  const circle2 = useRef();
  const Text2 = useRef();
  const circle3 = useRef();
  const Text3 = useRef();
  const overlayRef = useRef();
  const overlayRef2 = useRef();

  const circleAnimate = useMouseMovementAnimation(circle);
  const TextAnimate = useMouseMovementAnimation(Text);

  const circleAnimate2 = useMouseMovementAnimation(circle2);
  const TextAnimate2 = useMouseMovementAnimation(Text2);

  const circleAnimate3 = useMouseMovementAnimation(circle3);
  const TextAnimate3 = useMouseMovementAnimation(Text3);

  useHoverAnimation(circleAnimate2, overlayRef);
  useHoverAnimation(circleAnimate3, overlayRef2);

  const arr = [
    {
      name: "LinkedIn",
      route: "https://www.linkedin.com/in/muhammadd-asad/",
    },
    {
      name: "Insta",
      route: "https://www.instagram.com/smoky_ma7/",
    },
  ];
  return (
    <section className="h-screen absolute  bg-[#1c1d20] w-full ">
      <div className="w-[80vw] mx-auto flex flex-col gap-[5em] pt-[6em]">
        <div className=" w-full max-w-[40em]">
          <h1
            style={{ fontSize: "calc(clamp(3.25em, 6vw, 7em) * .875)" }}
            className=" leading-[1.2] text-white">
            Lets Work Together
          </h1>
        </div>
        <div className="w-full flex flex-col relative">
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <a
            ref={circleAnimate}
            className="w-40 h-40 rounded-full bg-[#455CE9]  absolute top-[-5em] right-10 flex items-center justify-center cursor-pointer">
            <h1
              ref={TextAnimate}
              className="text-white text-lg font-semibold w-full h-full  flex items-center justify-center">
              Get In Touch
            </h1>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-[3em]">
          <button
            ref={circleAnimate2}
            className="w-72 h-20 relative rounded-full border-[1px] bg-transparent text-white font-[450] text-lg overflow-hidden">
            <div
              ref={overlayRef}
              className="w-full h-full relative  bg-[#455CE9] rounded-full translate-y-full"
            />

            <span
              ref={TextAnimate2}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              asad.work47@gmail.com
            </span>
          </button>
          <button
            ref={circleAnimate3}
            className="w-72 h-20 relative rounded-full overflow-hidden border-[1px] bg-transparent text-white font-[450] text-lg  ">
            <div
              ref={overlayRef2}
              className="w-full h-full relative  bg-[#455CE9] rounded-full translate-y-full"
            />
            <span
              ref={TextAnimate3}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              + 44 7774069318
            </span>
          </button>
        </div>
      </div>
      <section className="absolute bottom-5 flex w-full">
        <div className="flex flex-col ml-auto mr-[3em]">
          <h2 className="text-[#999D9E]">Socials</h2>
          <div className="flex gap-[2em] text-[white]">
            {arr.map((item, idx) => (
              <a href={item.route} target="_blank" key={idx}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer;
