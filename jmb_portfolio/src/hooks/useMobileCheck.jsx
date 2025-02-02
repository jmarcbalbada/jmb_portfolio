import { useState, useEffect } from "react";

// Custom Hook to check if the device is mobile
const useMobileCheck = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device is mobile
  const checkIfIsMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true); // Mobile
    } else {
      setIsMobile(false); // Desktop or tablet
    }
  };

  useEffect(() => {
    checkIfIsMobile(); // Initial check on mount

    // Add event listener to handle resize event
    window.addEventListener("resize", checkIfIsMobile);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIfIsMobile);
    };
  }, []); // Empty dependency array means it runs only once on mount

  return isMobile;
};

export default useMobileCheck;
