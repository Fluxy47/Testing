import React from "react";
import Main from "../assets/DinoRescue/Main.png";
// import Gameplay1 from "../assets/DinoRescue/Gameplay1.mp4";
// import Gameplay2 from "../assets/DinoRescue/Gameplay2.mp4";

// import Vid1 from "../assets/DinoRescue/Vid1.mp4";
// import Vid2 from "../assets/DinoRescue/Vid2.mp4";
// import Vid3 from "../assets/DinoRescue/Vid3.mp4";

import Pic1 from "../assets/DinoRescue/pic1.png";
import Pic2 from "../assets/DinoRescue/pic2.png";
import Pic3 from "../assets/DinoRescue/pic3.png";

import Video from "../assets/DinoRescue/Video.mp4";

function DinoRescue() {
  return (
    <div className="pb-[250px] max-w-[85vw] mx-auto">
      <div className="flex justify-center items-center mt-[7em] min-h-screen relative">
        <img
          src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/Dino%20Rescue%20(2).png?tr=w-1200"
          srcSet="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/Dino%20Rescue%20(2).png?tr=w-400 400w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/Dino%20Rescue%20(2).png?tr=w-800 800w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/Dino%20Rescue%20(2).png?tr=w-1200 1200w
          "
          className="h-screen w-full  rounded-3xl"
        />
      </div>

      <div className="flex justify-center items-center md:mt-[15em] mt-[3em] max-w-[85vw] h-[90dvh] ">
        <video
          className="object-cover h-full w-full rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={true}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-evenly mt-[3em] md:mt-[15em] w-full  gap-[2em] ">
        <div className="h-[80vh] w-[90vw] md:w-[30vw] ">
          <img src={Pic1} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[30vw]  flex justify-center">
          <img src={Pic2} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[30vw]  flex  justify-end">
          <img src={Pic3} className="object-fit h-full w-full rounded-3xl" />
        </div>
      </section>
    </div>
  );
}

export default DinoRescue;
