import React, { useState } from 'react'

import { FaGithub } from "react-icons/fa";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  const projects = [
    {
      name: "Teriyaki Restaurant",
      technologies: ["React", "Redux", "CSS", "Bootstrap", "MUI", "JavaScript", "Node.js", "Express.js", "MongoDB", "Render", "Vercel"],
      description: "A responsive restaurant website enabling customers to browse the menu, search for dishes, and place orders. Includes admin functionalities for managing the menu, orders, and customer data.",
      image: "/images/Teriyaki.png",
      liveLink: "https://restaurant-website-shira-prod.vercel.app/",
      repoLink: "https://github.com/Git-Shira/RestaurantWebsite"
    },
    {
      name: "Calendar Plus",
      technologies: ["Vite", "React", "CSS", "MUI", "JavaScript", "Node.js", "Express.js", "MongoDB", "Render", "Vercel"],
      description: "A responsive calendar website for managing events. Includes secure user authentication, profile management, password recovery, and full CRUD functionality for events and categories.",
      image: "/images/Calendar Plus.png",
      liveLink: "https://calendar-plus-shira-prod.vercel.app/",
      repoLink: "https://github.com/Git-Shira/CalendarPlus"
    },
    {
      name: "Weather By City",
      technologies: ["Vite", "React", "MUI", "JavaScript", "Node.js", "Express.js", "MongoDB", "Render", "Vercel"],
      description: "A responsive weather website that allows users to search for locations worldwide, manage their saved locations, and view detailed, automatically updated weather forecasts, including current conditions and a 10-day outlook.",      image: "/images/Weather By City.png",
      liveLink: "https://weather-by-city.vercel.app/",
      repoLink: "https://github.com/Git-Shira/WeatherByCity"
    },
    {
      name: "Sweet Vibes",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Vercel"],
      description: "A bakery website with local storage-based data management. Customers can browse and filter the menu, while admins can update items. Includes full accessibility features for a user-friendly experience.",
      image: "/images/Sweet Vibes.png",
      liveLink: "https://sweet-vibes.vercel.app/",
      repoLink: "https://github.com/Git-Shira/SweetVibes"
    },
    {
      name: "Computer Game",
      technologies: ["Unity", "Blender", "C#"],
      description: "A multi-level computer game where players receive instructions on reaching the treasure chest and avoid obstacles like traps and enemies. With each level, difficulty increases, and players accumulate points.",
      image: "/images/Computer Game.png",
      liveLink: "https://computer-game-shira-prod.vercel.app/",
      repoLink: "https://github.com/Git-Shira/ComputerGame"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="w-full flex flex-col items-center justify-center text-white text-center p-6 bg-black shadow-[inset_0_0px_80px_15px_#397e58] h-auto" id='projects'>

      <h2 className="text-2xl text-white transition-colors duration-300 relative inline-block hover:after:content-[''] hover:after:absolute hover:after:-inset-1 hover:after:bg-[#2fbf71] hover:after:blur-lg hover:after:opacity-50 hover:after:-z-10 font-bold hover:scale-105 transition-all duration-300 mt-12" data-aos="zoom-in">
        Projects
      </h2>

      <h2 className="text-3xl mt-2 mb-6 hover:text-[#2fbf71] transition-colors duration-300" data-aos="flip-up">
        Explore my work
      </h2>

      <div className="mt-6 flex flex-col gap-8 w-[90%] md:w-[80%] lg:w-[70%] mb-15">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" min-h-[300px] relative group bg-neutral-800 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-[0_0_15px_5px_rgba(57,126,88,0.7)]"
            data-aos="zoom-in-up"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full lg:1/3 md:w-1/2 object-cover transition-opacity duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setHoveredProject(hoveredProject === index ? null : index)}
            />
            <div className="p-5 flex flex-col justify-center w-full">
              <h3 className="text-xl font-semibold mb-5 text-[#2fbf71]" data-aos="zoom-in">{project.name}</h3>
              {hoveredProject === index ? (
                <p className="text-gray-300 text-lg" data-aos="zoom-in">{project.description}</p>
              ) : (
                <>
                  <div className="flex flex-wrap gap-1 justify-center sm:mb-5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-[#36a96f] text-white px-3 py-1 rounded-full text-sm" data-aos="zoom-in">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 items-center mb-2 mt-5">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 lg:w-2/3 w-full bg-transparent text-white border-1 border-white py-2 px-6 rounded-3xl hover:bg-transparent hover:text-[#2fbf71] hover:border-[#2fbf71] hover:scale-103 transition-all duration-300" data-aos="zoom-in">
                      Live preview <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 lg:w-2/3 w-full bg-transparent text-white border-1 border-white py-2 px-6 rounded-3xl hover:bg-transparent hover:text-[#2fbf71] hover:border-[#2fbf71] hover:scale-103 transition-all duration-300" data-aos="zoom-in">
                      <FaGithub /> Github repository
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects