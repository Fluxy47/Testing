import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";

function NavBar({ color, setIsVisible, setIsDirect, setText }) {
  const navigate = useNavigate();
  const Home = useRef(null);
  const myref = useRef(null);
  const itemsRef = useRef([]);
  const WorkRef = useRef();
  const AboutRef = useRef();
  const ContactRef = useRef();
  const Work = useMouseMovementAnimation(WorkRef);
  const About = useMouseMovementAnimation(AboutRef);
  const Contact = useMouseMovementAnimation(ContactRef);

  const arr = [
    { name: "Work", route: "/Work", ref: Work },
    { name: "About", route: "/About", ref: About },
    { name: "Contact", route: "/Contact", ref: Contact },
  ];

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, arr.length);
  }, []);
  // const refs = Array.from({ length: arr.length }, () => useRef(null));

  // Apply the custom hook directly in the component body
  // refs.forEach((ref) => useMouseMovementAnimation(ref));
  const HomeAnimate = useMouseMovementAnimation(Home);

  const handleNavigation = (route, name) => {
    setText(name);
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      navigate(route);
    }, 1500);
  };

  return (
    <section
      className={` flex justify-between pt-[30px] md:pt-[35px] text-[${color}]`}>
      <div ref={HomeAnimate} className="p-3">
        <h2
          onClick={() => handleNavigation("/", "Home")}
          className="ml-3 md:ml-10 tracking-wider font-bold  md:text-xl cursor-pointer">
          Home
        </h2>
      </div>
      <div className="md:flex mr-10 justify-evenly  gap-[2em] hidden">
        {arr.map((item, idx) => (
          <div key={idx} className="" ref={item.ref}>
            <h2
              onClick={() => handleNavigation(item.route, item.name)}
              className="text-xl font-bold tracking-wider cursor-pointer">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
      {/* <h2 className="tracking-wider mt-[12px] font-bold md:hidden mr-3">
        Menu
      </h2> */}
    </section>
  );
}

export default NavBar;
