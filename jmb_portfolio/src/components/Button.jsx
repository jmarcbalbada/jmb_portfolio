import React from "react";

const Button = ({ description = "", onClick }) => {
  return (
    <button
      className="rounded-lg border border-white bg-transparent px-4 py-2 text-base font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black lg:px-8 lg:py-4 lg:text-2xl"
      onClick={onClick}
    >
      {description}
    </button>
  );
};

export default Button;
