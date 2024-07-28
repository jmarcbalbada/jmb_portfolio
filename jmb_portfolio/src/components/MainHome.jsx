import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { words, name } from "../data/info";

const MainHome = () => {
  const [text] = useTypewriter({
    words: words,
    loop: {},
  });

  return (
    <>
      <div className="select-none p-14 font-normal sm:p-48">
      {/* <div className="rounded-lg border border-2 border-gray-500 p-14 font-normal sm:p-48"> */}
        <div className="text-sm xs:text-2xl">Hi there! I'm</div>
        <div className="pt-2 text-4xl md:pt-4 md:text-8xl">
          {name}
        </div>
        <span className="text-2xl md:text-6xl">
          {text}
          <span className="text-4xl md:text-8xl">
            <Cursor cursorStyle="<" />
          </span>
        </span>
        <div className="px-0 pt-16 lg:px-6 lg:pt-24"></div>
        <button className="rounded-lg border border-white bg-transparent px-4 py-2 text-base font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black lg:px-8 lg:py-4 lg:text-2xl">
          Learn more
        </button>
      </div>
    </>
  );
};

export default MainHome;
