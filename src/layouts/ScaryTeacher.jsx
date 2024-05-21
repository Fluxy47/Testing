import React from "react";
import Main from "../assets/ScaryTeacher/Main.webp";
// import Gameplay from "../assets/ScaryTeacher/Gameplay.mp4";
import Pic1 from "../assets/ScaryTeacher/Pic1.png";
import Pic2 from "../assets/ScaryTeacher/Pic2.png";
import Pic3 from "../assets/ScaryTeacher/Pic3.png";
import Pic4 from "../assets/ScaryTeacher/Pic4.png";

function ScaryTeacher() {
  return (
    <div className="pb-[250px] max-w-[85vw] mx-auto">
      <div className="flex justify-center items-center mt-[7em] min-h-screen relative">
        <img src={Main} className="h-screen w-full  rounded-3xl" />
      </div>

      <div className="flex justify-center items-center mt-[15em] min-h-screen ">
        <video
          className="w-full max-w-[85vw] h-full border-4 border-black rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={true}>
          {/* <source src={Gameplay} type="video/mp4" /> */}
        </video>
      </div>

      <section className="flex items-center justify-evenly mt-[15em] w-full mb-[10em] ">
        <div className="h-[80vh] w-[40vw] ">
          <img src={Pic1} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[40vw]  flex justify-center">
          {" "}
          <img src={Pic2} className="object-fit h-full w-full rounded-3xl" />
        </div>
      </section>

      <section className="flex items-center justify-evenly mt-[15em] w-full mb-[10em] ">
        <div className="h-[80vh] w-[40vw] ">
          <img src={Pic3} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[40vw]  flex justify-center">
          {" "}
          <img src={Pic4} className="object-fit h-full w-full rounded-3xl" />
        </div>
      </section>
    </div>
  );
}

export default ScaryTeacher;
