import { useState, useEffect } from "react";

export const useBlurHeader = () => {
  const [visibleStickyHeader, setVisibleStickyHeader] = useState<boolean>(false);
  useEffect(() => {
    const scrollEvent = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setVisibleStickyHeader(true);
      } else {
        setVisibleStickyHeader(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);


  return {visibleStickyHeader}
};
