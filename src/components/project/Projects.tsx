import { Slide } from "react-awesome-reveal";
import { Section } from "..";
import { Pagination } from "swiper/modules";
import "./Projects.css";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  return (
    <Section className="projects container section" id="projects">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Projects</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">Check my projects</span>
      </Slide>
      <Slide direction="left" triggerOnce>
        <Swiper
          className="projects__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {projects.map(({ id, name, desc, img, link, github }) => {
            return (
              <SwiperSlide className="projects__card" key={id}>
                <h2 className="projects__name">{name}</h2>
                <h3 className="projects__name">{desc}</h3>
                <img src={img} alt="img" className="projects__img" />

                <div>
                  <a
                    href={`${link}`}
                    className="projects_social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-globe"></i>
                  </a>
                  <a
                    href={`${github}`}
                    className="projects_social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-github-alt"></i>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slide>
    </Section>
  );
};

export default Projects;
