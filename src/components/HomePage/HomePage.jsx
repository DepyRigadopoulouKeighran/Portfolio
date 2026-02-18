import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../HomePage/homePage.css";

const HomePage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Webentwicklerin"],
      typeSpeed: 70,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
      startDelay: 500,
      backDelay: 2000,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        id="homeSection"
        className="flex justify-end items-center h-screen filter-homepage"
      >
        <div className="text-center mr-44 allTheContent">
          <h1 className="text-5xl font-bold nameContent">
            DEPY RIGADOPOULOU-KEIGHRAN
          </h1>
          <br />
          <span
            className="ml-auto text-4xl font-semibold titleContent"
            ref={typedRef}
          ></span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
