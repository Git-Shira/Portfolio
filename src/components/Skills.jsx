import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaNodeJs, FaReact } from "react-icons/fa6";
import { SiExpress, SiPostman, SiRedux, SiMui, SiMongodb, SiRender } from "react-icons/si";
import { FaJsSquare, FaHtml5, FaBootstrap, FaGithub, FaCss3Alt } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { TbBrandVite, TbBrandVercelFilled } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={30} /> },
    { name: "Vite", icon: <TbBrandVite size={30} /> },
    { name: "React", icon: <FaReact size={30} /> },
    { name: "Redux", icon: <SiRedux size={30} /> },
    { name: "CSS", icon: <FaCss3Alt size={30} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={30} /> },
    { name: "MUI", icon: <SiMui size={30} /> },
    { name: "jQuery", icon: <BiLogoJquery size={30} /> },
    { name: "JavaScript", icon: <FaJsSquare size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "Express", icon: <SiExpress size={30} /> },
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "Postman", icon: <SiPostman size={30} /> },
    { name: "Render", icon: <SiRender size={30} /> },
    { name: "Vercel", icon: <TbBrandVercelFilled size={30} /> },
    { name: "GitHub", icon: <FaGithub size={30} /> },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col items-center justify-center text-white text-center p-6 bg-black h-110 shadow-[inset_0_0px_80px_15px_#397e58]" id='skills'>

      <h2 className="text-2xl text-white transition-colors duration-300 relative inline-block hover:after:content-[''] hover:after:absolute hover:after:-inset-1 hover:after:bg-[#2fbf71] hover:after:blur-lg hover:after:opacity-50 hover:after:-z-10 font-bold hover:scale-105 transition-all duration-300" data-aos="zoom-in">
        Skills
      </h2>

      <h2 className="text-3xl mt-2 mb-6 hover:text-[#2fbf71] transition-colors duration-300" data-aos="flip-up">
        Technologies I’m proficient in
      </h2>

      <div className="w-full px-8 mt-5">
        <Slider {...settings} className='px-5'>
          {skills.map((skill, index) => (
            <div key={index} className="p-4 flex-grow" data-aos="zoom-in-up">
              <div className="bg-neutral-800 text-[#2fbf71] rounded-xl flex flex-col items-center justify-center p-6 w-full h-32 transition transform hover:scale-105 shadow-[0_0_15px_5px_rgba(57,126,88,0.7)] hover:shadow-[0_0_15px_5px_#397e58]">
                {skill.icon}
                <h3 className="mt-4 text-white text-lg font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Skills