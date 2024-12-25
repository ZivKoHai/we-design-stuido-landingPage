import { useState, useEffect } from "react";

const useScrollTop = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if window is scrolled to top (0)
      setIsTop(window.scrollY === 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isTop;
};

export default useScrollTop;
