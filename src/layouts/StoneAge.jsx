import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Main from "../assets/StoneAge/Main.png";
import pic1 from "../assets/StoneAge/pic1.png";
import pic2 from "../assets/StoneAge/pic2.png";
import pic3 from "../assets/StoneAge/pic3.png";
import pic4 from "../assets/StoneAge/pic4.png";
import Video from "../assets/StoneAge/Video.mp4";
gsap.registerPlugin(ScrollTrigger);

function StoneAge() {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const video = videoRef.current;

  //   const tl = gsap.timeline({
  //     paused: true,
  //     onComplete: () => {
  //       if (!hasPlayed) {
  //         video.play();
  //         setHasPlayed(true);
  //       }
  //     },
  //     onReverseComplete: () => {
  //       video.pause();
  //     },
  //   });

  //   ScrollTrigger.create({
  //     trigger: video,
  //     start: 'top center',
  //     onEnter: () => tl.play(),
  //     onLeave: () => tl.reverse(),
  //     once: true,
  //   });
  // }, [hasPlayed]);

  // src: "https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-1200",
  //   srcset: `
  //     https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-400 400w,
  //     https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-800 800w,
  //     https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-1200 1200w
  //   `,

  return (
    <div className="pb-[250px]">
      <div className="flex justify-center items-center mt-[7em] min-h-screen relative">
        <img
          src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image.png?tr=w-1200"
          srcSet="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image.png?tr=w-400 400w 
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image.png?tr=w-800 800w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image.png?tr=w-12s00 1200w"
          className="h-screen w-full max-w-[85vw] rounded-3xl"
        />
      </div>

      <div className="flex justify-center items-center md:mt-[15em] min-h-screen ">
        <video
          className="w-full max-w-[90vw] md:max-w-[85vw] h-full border-4 border-black rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={true}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-evenly gap-y-[3em] md:mt-[15em] w-full mb-[10em] ">
        <div className="h-[80vh] w-[90vw] md:w-[40vw] ">
          <img src={pic1} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[40vw] flex justify-center">
          {" "}
          <img src={pic2} className="object-fit h-full w-full rounded-3xl" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-evenly gap-y-[3em] md:mt-[15em] w-full mb-[10em] ">
        <div className="h-[80vh] w-[90vw] md:w-[40vw] ">
          <img src={pic3} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[40vw]  flex justify-center">
          {" "}
          <img src={pic4} className="object-fit h-full w-full rounded-3xl" />
        </div>
      </section>
    </div>
  );
}

export default StoneAge;
