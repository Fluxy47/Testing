import { useEffect } from "react";
import gsap from "gsap";

function Duck() {
  useEffect(() => {
    // Initial state
    gsap.set(".your-container", {
      transformOrigin: "center bottom",
      borderRadius: "0 0 15% 15%",
      y: 0,
    });

    // Inner animation
    gsap.to(".second-cont", {
      borderRadius: "0 0 60% 60%",
      y: "25%",
      duration: 0.7,
      ease: "power4.inOut",
      delay: 0.6,
    });

    // Exit animation
    gsap.to(".your-container", {
      y: "-130%",
      rotation: 0.001,
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.7,
    });
  }, []);

  return (
    <div
      className="your-container bg-[#181418] text-white h-[101vh] w-full fixed top-0 left-0 z-[999999999999999]"
      style={{ borderRadius: "0 0 15% 15%" }}>
      <div className="relative flex flex-col h-screen justify-center items-center z-20">
        <section className="block mx-[1em] text-center max-w-[600px] ">
          <div className="scale-90">
            <h2 className="leading-[1.15em] tracking-[0] font-[400] text-[2.6em]">
              Hello! Welcome to my Portfolio
            </h2>
          </div>
        </section>
      </div>
      <div className="second-cont bg-[#181418] w-full h-2/3 absolute bottom-1" />
    </div>
  );
}

export default Duck;

{
  /* <div className='flex w-[70vw]  items-start mt-[13em]  mx-auto border-4 border-[red]'>
<h1 className='md:text-[5em] xl:text-[8em] leading-tight'>FABRIC™</h1>
</div>
<section className='flex items-center justify-center gap-[5em] mt-[5em] border-2 border-[yellow]'>
<div className='flex flex-col gap-[2em] items-start w-full max-w-[25em]'> 
<p className='text-[0.7em] text-[#999D9E]'>ROLE / SERVICES</p>
<div className='h-[1px] w-full bg-[#adb4b6]' />
<h2 className='text-lg font-semibold'>Design & Development</h2>
</div>
<div className='flex flex-col gap-[2em] items-start  w-full max-w-[25em]'> 
<p className='text-[0.7em] text-[#999D9E]'>LOCATION & YEAR</p>
<div className='h-[1px] w-full bg-[#999D9E]' />
<h2 className='text-lg font-semibold'>United Kingdom ©2023</h2>
</div>
<div className='w-52 h-52 bg-[blue] rounded-full flex justify-center items-center'><h3 className='text-white font-semibold'>Live Project</h3></div>
</section> */
}
