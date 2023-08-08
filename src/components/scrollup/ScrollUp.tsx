import { useEffect } from "react";
import "./Scrollup.css";
import { Link } from "react-scroll";

const ScrollUp = () => {
  const scrollListener = () => {
    const scrollPosition = document.querySelector(".scrollup") as HTMLElement;
    if (window.scrollY >= 560) scrollPosition.classList.add("show-scroll");
    else scrollPosition.classList.remove("show-scroll");
  };

  useEffect((): void => {
    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <Link
      to="home"
      style={{ cursor: "pointer" }}
      className="scrollup"
      spy={true}
      smooth={true}
      duration={50}
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  );
};

export default ScrollUp;
