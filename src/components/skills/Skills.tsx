import { Slide } from "react-awesome-reveal";
import { Section } from "..";
import { Backend, Frontend } from ".";
import "./Skills.css";

const Skills = () => {
  return (
    <Section className="skills section" id="skills">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Skills</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">My technical level</span>
      </Slide>
      <div className="skills__container container grid">
        <Slide direction="left" triggerOnce>
          <Frontend />
        </Slide>
        <Slide direction="right" triggerOnce>
          <Backend />
        </Slide>
      </div>
    </Section>
  );
};

export default Skills;
