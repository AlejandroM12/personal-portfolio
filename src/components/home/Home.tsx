import { Data, ScrollDown, Section, Social } from "..";
import "./Home.css";

const Home = () => {
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
