import React from "react";
import pic1 from "../assets/SenCity/pic1.png";
import pic2 from "../assets/SenCity/pic2.jpg";
import pic3 from "../assets/SenCity/pic3.jpg";
import pic4 from "../assets/SenCity/pic4.png";
import pic5 from "../assets/SenCity/pic5.jpg";

function SenCity() {
  return (
    <div className="pb-[250px] w-full max-w-[90vw] md:max-w-[85vw] mx-auto">
      <div className="flex justify-center items-center mt-[7em] min-h-screen relative">
        <img
          src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/sen%20city.jpg?tr=w-1200"
          srcSet="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/sen%20city.jpg?tr=w-400 400w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/sen%20city.jpg?tr=w-800 800w
          https://ik.imagekit.io/fluxy/Asad%20Folder/Images/sen%20city.jpg?tr=w-1200 1200w
      "
          className="h-screen  md:max-w-[85vw]  rounded-3xl"
        />
      </div>
      <div className="w-full mx-auto flex flex-col items-center justify-center mt-[5em]">
        <h1 className="text-[4em] font-[450]">Game Concept</h1>

        <img
          src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/pic1.png?updatedAt=1717505495674"
          className=""
        />
      </div>
      <div className="w-full mx-auto flex flex-col items-center justify-center mt-[5em]">
        <h1 className="text-[4em] font-[450]">Visuals</h1>
        <div className=" w-full md:max-w-[50vw]">
          <p className="text-[1.5em] mb-[3em] md:mb-0">
            The board of "Sen City" is designed with a striking gothic dark art
            style, capturing the grim and tense atmosphere of a city in
            disorder. The intricate details and shadowy aesthetics reflect the
            constant battle between order and chaos, setting the tone for the
            high-stakes conflict that unfolds within the game.
          </p>
        </div>

        <section className="flex flex-col md:flex-row items-center justify-evenly  md:mt-[15em] w-full mb-[10em] gap-y-[3em] md:gap-y-0 ">
          <div className="h-[80vh] w-[90vw] md:w-[40vw] flex flex-col items-center justify-center gap-y-[2em]">
            <img
              src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/pic2.jpg?tr=w-1200"
              className="object-fit h-full w-full rounded-3xl"
            />
            <h1 className="text-[2em]">Movement path of the game</h1>
          </div>
          <div className="h-[80vh] w-[90vw] md:w-[40vw] flex flex-col items-center justify-center gap-y-[2em]">
            {" "}
            <img
              src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/pic3.jpg?updatedAt=1717505495691"
              className="object-fit h-full w-full rounded-3xl"
            />
            <h1 className="text-[2em]"> Board layout of the game</h1>
          </div>
        </section>
      </div>

      <div className="w-full mx-auto flex flex-col items-center justify-center mt-[5em]">
        <h1 className="text-[4em] font-[450]">Factions</h1>
        <div className=" w-full md:max-w-[50vw]">
          <p className="text-[1.5em] mb-[3em] md:mb-0">
            The Sen City is in a state of war. Will you defend as its valiant
            cops or will you play as Mafia, the agents of chaos.Kingpin is the
            Mafia Lord of Sen City trying to infest it with crimes and drugs.
            Chief is the city's defender sworn to protect it against the
            Kingpin.
          </p>
        </div>

        <section className="flex flex-col md:flex-row items-center justify-evenly  md:mt-[15em] w-full gap-y-[3em] md:gap-y-0 ">
          <div className="h-[80vh] w-[90vw] md:w-[40vw] flex flex-col items-center justify-center gap-y-[2em]">
            <img
              src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/pic4.png?updatedAt=1717505495695"
              className="object-fit h-full w-full rounded-3xl"
            />
            <h1 className="text-[2em]">Cops "The Sheriff"</h1>
          </div>
          <div className="h-[80vh] w-[90vw] md:w-[40vw] flex flex-col items-center justify-center gap-y-[2em]">
            {" "}
            <img
              src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/pic5.jpg?tr=w-1200"
              className="object-fit h-full w-full rounded-3xl mb-[75px]"
            />
            <h1 className="text-[2em]">Mafia "The Kingpin" </h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SenCity;
