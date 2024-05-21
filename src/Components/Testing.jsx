import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function Testing({ setIsDirect, setIsVisible }) {
  const navigate = useNavigate();
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  const pinContainer = useRef();
  const pinElement = useRef();

  useEffect(() => {
    // Gather elements using classnames
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // Create media query using gsap.matchMedia
    const mm = gsap.matchMedia();

    // Add a media query for desktop size
    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      // Loop through details sections
      details.forEach((detail, index) => {
        const headline = detail.querySelector("h1");
        const animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        console.log("mobile");
      };
    });
  }, []);

  console.log("window", window.innerWidth);
  console.log("window1212", window.outerWidth);

  const handleRoute = (project) => {
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      navigate(`/work/${project}`);
    }, 1500);
  };

  return (
    <div className="gallery ">
      <div className="left ">
        <div className="desktopContent ">
          <div className="desktopContentSection ">
            <h1>Sen City</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Scary Teacher Stone Age</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Scary Teacher 3D</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing.
            </p>
            <p>
              In the world of branding and marketing, pink is often used to
              target a female audience or to promote products that are
              associated with beauty, love, or romance.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>JamMaster</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          <div className="desktopContentSection">
            <h1>Dino Rescue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        {/* <!-- mobile content --> */}
        <div className="mobileContent">
          <div className="mobilePhoto red"></div>
          <h1>Sen City</h1>
          <p>
            Red is a color often associated with strong emotions such as
            passion, love, and anger. It's a bold and attention-grabbing color
            that can evoke feelings of excitement, warmth, and energy.
          </p>

          <div className="mobilePhoto green"></div>
          <h1>Scary Teacher Stone Age</h1>
          <p>
            Green is a color that is often associated with nature, growth, and
            harmony. It is a calming and relaxing color that can evoke feelings
            of balance, stability, and freshness. In color psychology, green is
            said to represent balance and stability, making it a popular choice
            for branding and marketing in the health and wellness industry.{" "}
          </p>

          <div className="mobilePhoto pink"></div>
          <h1>Scary Teacher 3D</h1>
          <p>
            Pink is a color that is often associated with femininity, romance,
            and sweetness. It is a softer and more delicate shade of red that
            can evoke feelings of warmth, love, and nurturing. In the world of
            branding and marketing, pink is often used to target a female
            audience or to promote products that are associated with beauty,
            love, or romance.
          </p>

          <div className="mobilePhoto blue"></div>
          <h1>JamMaster</h1>
          <p>
            Blue is a color that is often associated with calmness, trust, and
            reliability. It is a peaceful and serene color that can evoke
            feelings of stability, security, and professionalism. In color
            psychology, blue is said to represent loyalty and trust, making it a
            popular choice for branding and marketing in the finance and
            technology industries.
          </p>

          <div className="mobilePhoto yellow"></div>
          <h1>Dino Rescue</h1>
          <p>
            Blue is a color that is often associated with calmness, trust, and
            reliability. It is a peaceful and serene color that can evoke
            feelings of stability, security, and professionalism. In color
            psychology, blue is said to represent loyalty and trust, making it a
            popular choice for branding and marketing in the finance and
            technology industries.
          </p>
        </div>

        {/* <!-- desktop content --> */}

        <div className="desktopPhotos w-[40vw] h-[40vw] 2xl:w-[30vw] 2xl:h-[30vw]">
          <div
            className="desktopPhoto red"
            onClick={() => handleRoute("project1")}></div>
          <div
            className="desktopPhoto green"
            onClick={() => handleRoute("/work/Scary-Teacher-Stone-Age")}></div>
          <div
            className="desktopPhoto pink"
            onClick={() => handleRoute("project3")}></div>
          <div
            className="desktopPhoto blue"
            onClick={() => handleRoute("project4")}></div>
        </div>
        {/* <div
          className="desktopPhoto yellow"
          onClick={() => handleRoute("project5")}></div> */}
      </div>
    </div>
  );
}

export default Testing;
