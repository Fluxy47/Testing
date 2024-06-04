import React, { useRef } from "react";
import NavBar from "../Components/NavBar";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import useHoverAnimation from "../util/useHoverAnimation";
import img3 from "../assets/img3.png";
const arr = ["twitter", "insta", "LinkedIn"];

function Contact({ setIsVisible, setIsDirect, setText }) {
  const circle = useRef(null);
  const Text = useRef(null);
  const overlayRef = useRef();

  const circleAnimate = useMouseMovementAnimation(circle);
  const TextAnimate = useMouseMovementAnimation(Text);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Access the form element
    const form = document.getElementById("myForm");

    // Submit the form (this triggers form validation if any)
    form.submit();

    // Clear the form after successful submission (assuming success)
    form.reset();

    // Display a message (you can use an alert or other methods)
    alert("Email sent!");
  };
  useHoverAnimation(circle, overlayRef);
  return (
    <div className="h-full bg-[#1c1d20] relative pb-[200px] min-h-screen">
      <NavBar
        color="white"
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
        setText={setText}
      />
      <section className=" flex flex-row-reverse md:flex-row md:justify-center items-center mt-[12em]  2xl:gap-[10em]">
        <div className="w-full md:max-w-[30em] lg:max-w-[50em] 2xl:max-w-[55em] ml-[30px] ">
          <h1
            className="text-white leading-[1] "
            style={{ fontSize: "calc(clamp(3em, 7vw, 8em) * .875)" }}>
            Let's Start a Project Together
          </h1>
        </div>
        <img
          src={img3}
          className="hidden sm:block w-32 h-32 bg-white object-cover rounded-full md:mt-[100px] mr-[120px]"
        />
      </section>
      <main className="flex flex-col-reverse md:flex-row justify-center gap-[5em] md:gap-[10em] mx-[2em]">
        <form className="flex flex-col w-full md:max-w-[50vw] gap-[3em]  md:mt-[8em] ">
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">01</p>
              <span className="text-white text-2xl">Whats your name?</span>
            </div>
            <textarea
              name="Name"
              placeholder="John Doe*"
              rows="1"
              className="resize-none text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">02</p>
              <span className="text-white text-2xl">What's your email?</span>
            </div>
            <textarea
              name="Name"
              rows="1"
              placeholder="john@doe.com"
              className="resize-none text-2xl  border-none focus:outline-none ml-[2.5em] bg-transparent text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6]" />
          <div className="flex flex-col gap-[1em] ">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">03</p>
              <span className="text-white text-2xl">
                What's the name of your organization?
              </span>
            </div>
            <textarea
              name="Name"
              rows="1"
              placeholder="John & Doe"
              className=" resize-none text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">04</p>
              <span className="text-white text-2xl">
                What services are you looking for?
              </span>
            </div>
            <textarea
              name="Name"
              rows="1"
              placeholder="Game Designer"
              className="resize-none text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">05</p>
              <span className="text-white text-2xl">Your messages</span>
            </div>
            <textarea
              name="Name"
              rows="5"
              placeholder="Hello Asad can you help me with"
              className=" text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white resize-none"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <div
              onClick={handleSubmit}
              ref={circleAnimate}
              className="w-40 h-40 rounded-full bg-[lightblue] absolute top-[-5em] right-10 flex items-center justify-center overflow-hidden cursor-pointer">
              <div
                ref={overlayRef}
                className="w-full h-full relative  bg-[#455CE9] rounded-full translate-y-full"
              />
              <h2
                ref={TextAnimate}
                className="text-white absolute font-semibold flex justify-center items-center w-full h-full">
                Send it!
              </h2>
            </div>
          </div>
        </form>

        <section className="flex flex-col gap-[3em] mb-auto mt-[4em] md:mt-[8em]">
          <div className="flex flex-col gap-[0.5em] text-base text-white">
            <h2 className="text-[#999D9E] text-[0.8em]">Contact Detail</h2>
            <p>asad.work47@gmail.com</p>
            <p>+44 7774069318</p>
          </div>

          <div className="flex flex-col gap-[0.5em] text-base text-white">
            <h2 className="text-[#999D9E] text-[0.8em]">Socials</h2>
            <a href="https://www.instagram.com/smoky_ma7/" target="_blank">
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadd-asad/"
              target="_blank">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
