import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const MainHome = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", "Geek", "Computer Science Student"],
    loop: {},
  });

  return (
    <>
      <div className="p-14 font-normal sm:p-48">
        <div className="text-sm xs:text-2xl">Hi there! I'm</div>
        <div className="pt-2 text-4xl md:text-8xl md:pt-4">
          John Marc Balbada
        </div>
        <span className="text-2xl md:text-6xl">{text}</span>
        <span className="place-self-end text-4xl md:text-8xl">
          <Cursor cursorStyle="<" />
        </span>
      </div>
    </>
  );
};

export default MainHome;
