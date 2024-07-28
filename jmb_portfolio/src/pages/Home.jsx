import React from "react";
import MainHome from "../components/MainHome";

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 p-2 text-slate-200">
        {/* <div className="text-4xl font-bold font-signature">Homes</div> */}
        <MainHome />
      </div>
    </>
  );
};

export default Home;
