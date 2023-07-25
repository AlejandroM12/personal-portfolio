import { TypeMyProjects, TypeNavbar } from ".";
import evoGymImg from '@/assets/evogym.png'
import ecommerceShoesImg from '@/assets/banner-ecommerce.png'
import ecommerceShoesImg2 from '@/assets/banner.png'
import resumeImg from '@/assets/RESPONSIVE.png'
import { link } from "fs";

export const listNavBar: TypeNavbar[] = [
    {
      id: 1,
      item: "Home",
      icon: "uil uil-home",
      href: "home",
    },
    {
      id: 2,
      item: "About",
      icon: "uil uil-user",
      href: "about",
    },
    {
      id: 3,
      item: "Skills",
      icon: "uil uil-file-alt",
      href: "skills",
    },
    {
      id: 4,
      item: "Qualifications",
      icon: "uil uil-graduation-cap",
      href: "qualification",
    },
    {
      id: 5,
      item: "Projects",
      icon: "uil uil-briefcase-alt",
      href: "projects",
    },
    {
      id: 6,
      item: "Contact",
      icon: "uil uil-envelope",
      href: "contact",
    },
  ];
  export const projects: TypeMyProjects[] = [
    {
    id: 1,
    name: 'Evogym',
    desc: 'Complete Fitness Application built with Typescript | React | Tailwind | Responsive',
    img: evoGymImg,
    link: "https://gym-evogym.netlify.app/",
    github: "https://github.com/AlejandroM12/gym-ts",
  },

  {
    id: 2,
    name: 'Ecommerce | Shoes',
    desc: 'Complete Ecommerce Application built with  React, SASS, Firebase, React-Hot-Toast, React-icons',
    img: ecommerceShoesImg,
    link: "https://ecommerce-react-shoes.netlify.app/",
    github: 'https://github.com/AlejandroM12/Ecommerce-React'
  },
  {
    id: 3,
    name: 'Ecommerce | Shoes',
    desc: 'Complete Ecommerce Application built with  HTML, CSS, BOOTSTRAP, JAVASCRIPT',
    img: ecommerceShoesImg2,
    link: "https://fuckoffshoes.netlify.app/",
    github: "https://github.com/AlejandroM12/FuckOffShoes-WEB"
  },
  {
    id: 4,
    name: 'Responsive Resume CV',
    desc: 'Complete Responsive Resume Cv Website Using HTML CSS And JavaScript',
    img: resumeImg,
    link: "https://alejandrom12.github.io/resume-cv-example/",
    github: "https://github.com/AlejandroM12/resume-cv-example"
  },
]