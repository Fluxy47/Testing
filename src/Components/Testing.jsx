import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

import { fill } from "@cloudinary/url-gen/actions/resize";
gsap.registerPlugin(ScrollTrigger);

function Testing({ setIsDirect, setIsVisible, setText }) {
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

  const handleRoute = (route, name) => {
    setText(name);
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      navigate(route);
    }, 1500);
  };

  return (
    <div className="gallery 2xl:mt-[-2em]">
      <div className="left ">
        <div className="desktopContent ">
          <div className="desktopContentSection ">
            <h1>Sen City</h1>
            <p>
              Set in the gothic streets of Sen City, players are immersed in a
              high-stakes battle for control between the valiant Cops and the
              cunning Mafia As the city teeters on the edge of chaos, players
              must navigate the moral complexities of their roles, choosing
              between upholding justice or succumbing to the allure of power and
              corruption.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Scary Teacher Stone Age</h1>
            <p>
              Leading my own project as a designer and developer, I oversaw the
              creation of Scary Teacher StoneAge, the highly anticipated sequel
              to Scary Teacher 3D. This game marked my first individual
              milestone in the industry, with a dedicated team working under my
              guidance.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Scary Teacher 3D</h1>
            <p>
              My first ever game in the professional industry was working under
              a experienced designer on Scary Teacher 3D. This experience was
              invaluable, as I gained a deep understanding of the design
              process. I contributed to the creation of new levels, ensuring
              they were engaging and challenging for players.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>JamMaster</h1>
            <p>
              Jam Master, where players immerse themselves in the delightful
              world of fruit farming and jam making. In Jam Master, players
              plant and harvest various fruits, then transform them into
              delicious jams to sell to eager customers.
            </p>
          </div>

          <div className="desktopContentSection">
            <h1>Dino Rescue</h1>
            <p>
              In this project, players drive a truck to capture dinosaurs on the
              field and safely evacuate them, earning money to upgrade their
              equipment along the way. The engaging gameplay loop proved to be
              both fun and challenging, as players had to navigate around
              dangerous and difficult dinosaurs to succeed. Contributing to this
              dynamic environment.
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        {/* <!-- mobile content --> */}
        <div className="mobileContent">
          <div
            className="mobilePhoto red"
            onClick={() => handleRoute("/work/SenCity", "SenCity")}></div>
          <h1>Sen City</h1>
          <p>
            Set in the gothic streets of Sen City, players are immersed in a
            high-stakes battle for control between the valiant Cops and the
            cunning Mafia As the city teeters on the edge of chaos, players must
            navigate the moral complexities of their roles, choosing between
            upholding justice or succumbing to the allure of power and
            corruption.
          </p>

          <div
            className="mobilePhoto green"
            onClick={() =>
              handleRoute("/work/Scary-Teacher-Stone-Age", "Stone Age")
            }></div>
          <h1>Scary Teacher Stone Age</h1>
          <p>
            Leading my own project as a designer and developer, I oversaw the
            creation of Scary Teacher StoneAge, the highly anticipated sequel to
            Scary Teacher 3D. This game marked my first individual milestone in
            the industry, with a dedicated team working under my guidance.
          </p>

          <div
            className="mobilePhoto pink"
            onClick={() =>
              handleRoute("work/Scary-Teacher", "Scary Teacher")
            }></div>
          <h1>Scary Teacher 3D</h1>
          <p>
            My first ever game in the professional industry was working under a
            experienced designer on Scary Teacher 3D. This experience was
            invaluable, as I gained a deep understanding of the design process.
            I contributed to the creation of new levels, ensuring they were
            engaging and challenging for players.
          </p>

          <div
            className="mobilePhoto blue"
            onClick={() => handleRoute("/work/Jam-Master", "Jam Master")}></div>
          <h1>JamMaster</h1>
          <p>
            Jam Master, where players immerse themselves in the delightful world
            of fruit farming and jam making. In Jam Master, players plant and
            harvest various fruits, then transform them into delicious jams to
            sell to eager customers.
          </p>

          <div
            className="mobilePhoto yellow"
            onClick={() =>
              handleRoute("/work/Dino-Rescue", "Dino Rescue")
            }></div>
          <h1>Dino Rescue</h1>
          <p>
            In this project, players drive a truck to capture dinosaurs on the
            field and safely evacuate them, earning money to upgrade their
            equipment along the way. The engaging gameplay loop proved to be
            both fun and challenging, as players had to navigate around
            dangerous and difficult dinosaurs to succeed. Contributing to this
            dynamic environment.
          </p>
        </div>

        {/* <!-- desktop content --> */}

        <div className="desktopPhotos w-[40vw] h-[40vw] 2xl:w-[30vw] 2xl:h-[30vw]">
          <div
            className="desktopPhoto red"
            onClick={() => handleRoute("/work/SenCity", "SenCity")}></div>
          <div
            className="desktopPhoto green"
            onClick={() =>
              handleRoute("/work/Scary-Teacher-Stone-Age", "Stone Age")
            }></div>
          <div
            className="desktopPhoto pink"
            onClick={() =>
              handleRoute("work/Scary-Teacher", "Scary Teacher")
            }></div>
          <div
            className="desktopPhoto blue"
            onClick={() => handleRoute("/work/Jam-Master", "Jam Master")}></div>
          <div
            className="desktopPhoto yellow"
            onClick={() =>
              handleRoute("/work/Dino-Rescue", "Dino Rescue")
            }></div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
