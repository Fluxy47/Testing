import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import { AnimatePresence } from "framer-motion";
import Overlay from "./Components/Overlay";
import SideBar from "./Components/SideBar";
import About from "./Containers/About";
import Duck from "./Components/Duck";

import {
  Route,
  Routes,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import Home from "./Containers/Home";
import Work from "./Containers/Work";
import Contact from "./Containers/Contact";
import ProjectLayout from "./Components/ProjectLayout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDirect, setIsDirect] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      lerp: 0.06,
      smooth: 2,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
      autoResize: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    // Scroll to the top on every render (including route changes and refreshes)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  }, [location.pathname]);

  return (
    <>
      {!isDirect && <Duck />}
      {isVisible && <Overlay animateIn={isDirect ? true : false} />}
      <SideBar setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <Home setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
            }
          />
          <Route
            path="/work"
            element={
              <Work setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
            }
          />
          <Route
            path="/work/*"
            element={
              <ProjectLayout
                setIsVisible={setIsVisible}
                setIsDirect={setIsDirect}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
