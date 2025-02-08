import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    let isScrolling = false;

    const smoothScroll = (event) => {
      event.preventDefault();
      if (!isScrolling) {
        isScrolling = true;

        window.requestAnimationFrame(() => {
          window.scrollBy({
            top: event.deltaY * 20.2, // Adjust speed (0.5 = slower, 1.2 = faster)
            left: 0,
            behavior: "smooth",
          });
          isScrolling = false;
        });
      }
    };

    window.addEventListener("wheel", smoothScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", smoothScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
