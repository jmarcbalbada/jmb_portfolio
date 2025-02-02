import React, { useRef, useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { developerRoles, name } from "../data/info";
import Button from "./Button";
import useMobileCheck from "../hooks/useMobileCheck";
import ExploreSection from "./Explore";

const Main = () => {
  const [text] = useTypewriter({
    words: developerRoles,
    loop: {},
  });

  const isMobile = useMobileCheck();
  const learnMoreRef = useRef(null);

  // Function to handle the scroll
  const scrollToSection = () => {
    if (learnMoreRef.current) {
      window.scrollTo({
        top: learnMoreRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="select-none p-14 font-normal sm:p-48">
        <div className="text-sm xs:text-2xl">Hi there! I'm</div>
        <div className="mb-2 pt-2 text-4xl md:pt-4 md:text-8xl">{name}</div>

        {/* Flexbox container for text */}
        <div className="flex flex-wrap text-2xl sm:mt-2 sm:text-4xl md:mt-6 md:text-6xl">
          {text}
          <span className="text-2xl md:text-7xl">
            <Cursor cursorStyle={isMobile ? "|" : "<"} />
          </span>
        </div>

        {/* Wrapping the button in a div to make it independent from the text */}
        {!isMobile && (
          <div className="mt-32">
            <Button description="Explore" onClick={scrollToSection}></Button>
          </div>
        )}
      </div>
      <ExploreSection learnMoreRef={learnMoreRef} isMobile={isMobile} />
    </>
  );
};

export default Main;
