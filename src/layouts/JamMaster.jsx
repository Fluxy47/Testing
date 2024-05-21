import React from "react";
import Main from "../assets/JamMaster/Main.png";
// import Vid1 from "../assets/JamMaster/Vid1.mp4";
// import Vid2 from "../assets/JamMaster/Vid2.mp4";
// import Vid3 from "../assets/JamMaster/Vid3.mp4";
import Video from "../assets/JamMaster/Video.mp4";
import pic1 from "../assets/JamMaster/pic1.png";
import pic2 from "../assets/JamMaster/pic2.png";
import pic3 from "../assets/JamMaster/pic3.png";

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

      <section className="flex flex-col md:flex-row items-center justify-evenly mt-[3em] md:mt-[15em] w-full mb-[10em] gap-[2em]">
        <div className="h-[80vh] w-[90vw] md:w-[30vw] ">
          <img src={pic1} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[30vw]   flex justify-center">
          <img src={pic2} className="object-fit h-full w-full rounded-3xl" />
        </div>
        <div className="h-[80vh] w-[90vw] md:w-[30vw]   flex  justify-end">
          <img src={pic3} className="object-fit h-full w-full rounded-3xl" />
        </div>
      </section>
    </div>
  );
}

export default JamMaster;
