import { useEffect, useContext } from "react";
import { contextDarkMode } from "@/context";
import { Data, ScrollDown, Section, Social } from "..";
import "./Home.css";

const Home = () => {
  const { IsdarkMode } = useContext(contextDarkMode);
  // Dark mode for the body
  useEffect(() => {
    if (IsdarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [IsdarkMode]);
  return (
    <Section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </Section>
  );
};

export default Home;
