import React from "react";
import Main from "../assets/ScaryTeacher/Main.webp";
// import Gameplay from "../assets/ScaryTeacher/Gameplay.mp4";
import Pic1 from "../assets/ScaryTeacher/Pic1.png";
import Pic2 from "../assets/ScaryTeacher/Pic2.png";
import Pic3 from "../assets/ScaryTeacher/Pic3.png";
import Pic4 from "../assets/ScaryTeacher/Pic4.png";
import Video from "../assets/ScaryTeacher/Video.mp4";

function ScaryTeacher() {
  return (
    <div className="pb-[250px] w-full max-w-[90vw] md:max-w-[85vw] mx-auto">
      <div className="flex justify-center items-center mt-[7em] min-h-screen relative">
        <img
          src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/3d.png?tr=w-1200"
          srcSet="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/3d.png?tr=w-400 400w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/3d.png?tr=w-400 400w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/3d.png?tr=w-800 800w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/3d.png?tr=w-1200 1200w
          "
          className="h-screen w-full  rounded-3xl"
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

      <section className="flex flex-col md:flex-row items-center justify-evenly md:mt-[15em] gap-y-[3em] md:gap-y-0 w-full mb-[10em] ">
        <div className="h-[80vh] w-[90vw] md:w-[40vw] ">
          <img
            src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/1.png?tr=w-1200"
            className="object-fit h-full w-full rounded-3xl"
          />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[40vw]  flex justify-center">
          {" "}
          <img
            src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/ScaryTeacher%203D/2.png?tr=w-1200"
            className="object-fit h-full w-full rounded-3xl"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-evenly  md:mt-[15em] w-full mb-[10em] gap-y-[3em] md:gap-y-0 ">
        <div className="h-[80vh] w-[90vw] md:w-[40vw] ">
          <img
            src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/ScaryTeacher%203D/5.png?tr=w-1200"
            className="object-fit h-full w-full rounded-3xl"
          />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[40vw] flex justify-center">
          {" "}
          <img
            src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/ScaryTeacher%203D/3.png?tr=w-1200"
            className="object-fit h-full w-full rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
}

export default ScaryTeacher;
