import React from "react";
import Main from "../assets/DinoRescue/Main.png";
// import Gameplay1 from "../assets/DinoRescue/Gameplay1.mp4";
// import Gameplay2 from "../assets/DinoRescue/Gameplay2.mp4";

// import Vid1 from "../assets/DinoRescue/Vid1.mp4";
// import Vid2 from "../assets/DinoRescue/Vid2.mp4";
// import Vid3 from "../assets/DinoRescue/Vid3.mp4";

function DinoRescue() {
  return (
    <div className="pb-[250px] max-w-[85vw] mx-auto">
      <div className="flex justify-center items-center mt-[7em] min-h-screen relative">
        <img src={Main} className="h-screen w-full  rounded-3xl" />
      </div>

      <div className="flex justify-center items-center mt-[15em] max-w-[85vw] h-[90dvh] ">
        <video
          className="object-cover h-full w-full rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={true}>
          {/* <source src={Gameplay1} type="video/mp4" /> */}
        </video>
      </div>

      <div className="flex justify-center items-center mt-[15em] max-w-[85vw] h-[90dvh] ">
        <video
          className="object-cover h-full w-full rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={true}>
          {/* <source src={Gameplay2} type="video/mp4" /> */}
        </video>
      </div>

      <section className="flex items-center justify-evenly mt-[15em] w-full mb-[10em] ">
        <div className="h-[80vh] w-[30vw] ">
          <video
            className="object-cover h-full rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
            controls={true}>
            {/* <source src={Vid1} type="video/mp4" /> */}
          </video>
        </div>
        <div className="h-[80vh] w-[30vw]  flex justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={true}
            className="object-cover h-full rounded-3xl">
            {/* <source src={Vid2} type="video/mp4" /> */}
          </video>
        </div>
        <div className="h-[80vh] w-[30vw]   flex  justify-end">
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
      </section>
    </div>
  );
}

export default DinoRescue;
