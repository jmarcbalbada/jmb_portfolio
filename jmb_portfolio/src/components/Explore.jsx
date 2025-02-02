import React from "react";
import { exploreAbout } from "../data/info";

const ExploreSection = ({ learnMoreRef, isMobile }) => {
  return (
    <div
      ref={learnMoreRef}
      className={
        isMobile
          ? "my-0 min-h-screen p-4 sm:p-48" // Added padding for mobile devices
          : "my-24 min-h-screen pr-48 pt-20 sm:pl-48"
      }
    >
      <h2 className={isMobile ? "text-2xl" : "text-4xl"}>Explore</h2>

      <div className="mt-8 grid gap-8">
        <div className="relative flex-col sm:flex-row">
          {isMobile && (
            <img
              src="/jm.jpg"
              alt="John Marc"
              className="max-w-xs rounded-lg"
            />
          )}

          {!isMobile && (
            <div className="relative mt-14">
              <img
                src="/jm6.jpg"
                alt="Image 1"
                className="absolute left-0 top-0 h-64 w-64 rotate-2 transform rounded-lg"
              />
              <img
                src="/jm3.jpg"
                alt="Image 2"
                className="absolute left-44 top-24 h-64 w-64 rotate-6 transform rounded-full"
              />
              <img
                src="/jm.jpg"
                alt="Image 3"
                className="absolute left-0 top-60 h-64 w-64 rotate-6 transform rounded-lg"
              />
            </div>
          )}

          <div
            className={
              isMobile
                ? "flex flex-grow flex-col justify-center p-1 text-lg sm:ml-16"
                : "flex flex-grow flex-col justify-center pl-[450px] text-lg sm:ml-16"
            }
          >
            <h2
              className={
                isMobile
                  ? "mb-4 pt-6 text-2xl font-semibold"
                  : "mb-4 mt-16 text-3xl font-semibold"
              }
            >
              About John Marc
            </h2>
            <p
              className={
                isMobile
                  ? "text-justify leading-relaxed"
                  : "text-justify leading-loose"
              }
            >
              {exploreAbout}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
