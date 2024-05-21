import React from "react";
import Main from "../assets/JamMaster/Main.png";
// import Vid1 from "../assets/JamMaster/Vid1.mp4";
// import Vid2 from "../assets/JamMaster/Vid2.mp4";
// import Vid3 from "../assets/JamMaster/Vid3.mp4";

function JamMaster() {
  return (
    <div className="pb-[250px] max-w-[85vw] mx-auto">
      <div className="flex justify-center items-center mt-[7em] min-h-screen relative">
        <img
          src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image_2022_04_18T10_54_30_850Z.png?tr=w-1200"
          srcSet="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image_2022_04_18T10_54_30_850Z.png?tr=w-400 400w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image_2022_04_18T10_54_30_850Z.png?tr=w-800 800w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image_2022_04_18T10_54_30_850Z.png?tr=w-1200 1200w"
          className="h-screen w-full  rounded-3xl"
        />
      </div>

      {/* <div className="flex justify-center items-center mt-[15em] min-h-screen ">
        <video
          className="w-full max-w-[85vw] h-full border-4 border-black rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
          controls={true}>
          <source src={gameplay} type="video/mp4" />
        </video>
      </div> */}

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

export default JamMaster;
