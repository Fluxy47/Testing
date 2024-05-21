import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Main from "../assets/StoneAge/Main.png";
// import Vid2 from "../assets/StoneAge/Vid2.mp4";
// import Vid3 from "../assets/StoneAge/Vid3.mp4";
// import Vid1 from "../assets/StoneAge/Vid1.mp4";
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

      <div className="flex justify-center items-center mt-[15em] min-h-screen ">
        <video
          className="w-full max-w-[85vw] h-full border-4 border-black rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={true}>
          <source
            src="https://drive.google.com/file/d/1ru0r8wKKGvH3_gScgbNQrsw6D6IJYnTI/view"
            type="video/mp4"
          />
        </video>
      </div>

      <section className="flex items-center justify-evenly mt-[15em] w-full mb-[5em]">
        <div className="h-[80vh] w-[27vw]">
          <video
            className="object-cover h-full rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
            controls={true}>
            {/* <source src={Vid2} type="video/mp4" /> */}
          </video>
        </div>
        <div className="h-[80vh] w-[27vw] ]">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={true}
            className="object-cover h-full rounded-3xl">
            {/* <source src={Vid3} type="video/mp4" /> */}
          </video>
        </div>
        <div className="h-[80vh] w-[27vw] ">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={true}
            className="object-cover h-full rounded-3xl">
            {/* <source src={Vid1} type="video/mp4" /> */}
          </video>
        </div>
      </section>
    </div>
  );
}

export default StoneAge;
