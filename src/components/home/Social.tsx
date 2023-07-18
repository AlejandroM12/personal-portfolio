import { FC } from "react";
import { Fade } from "react-awesome-reveal";

const Social: FC = () => {
  return (
    <div className="home__social">
      <Fade direction="up" triggerOnce>
        <a
          href="https://www.linkedin.com/in/morelalejandro"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
      </Fade>
      <Fade direction="up" delay={100} triggerOnce>
        <a
          href="https://github.com/alejandrom12"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <a
          href="https://instagram.com/alejandro_morel5/"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-instagram"></i>
        </a>
      </Fade>
      <Fade direction="up" delay={300} triggerOnce>
        <a
          href="https://twitter.com/alejandromorel_"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-twitter-alt"></i>
        </a>
      </Fade>
    </div>
  );
};

export default Social;
