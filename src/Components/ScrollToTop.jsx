 import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // use "smooth" if you want smooth scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;