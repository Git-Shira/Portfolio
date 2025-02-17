import React from 'react'

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-white text-center p-6 bg-black h-auto shadow-[inset_0_0px_80px_15px_#397e58]" id='about'>

      <h2 className="text-2xl text-white transition-colors duration-300 relative inline-block hover:after:content-[''] hover:after:absolute hover:after:-inset-1 hover:after:bg-[#2fbf71] hover:after:blur-lg hover:after:opacity-50 hover:after:-z-10  font-bold hover:scale-105 transition-all duration-300 mt-12" data-aos="zoom-in">
        About
      </h2>

      <h2 className="text-3xl mt-2 mb-6 hover:text-[#2fbf71] transition-colors duration-300" data-aos="flip-up">
        Hey there, I'm Shira!
      </h2>

      <div className="xl:flex xl:items-center gap-8 lg:text-start p-8 bg-neutral-800 rounded-lg w-[90%] md:w-[80%] lg:w-[70%] mb-15 shadow-[0_0_15px_5px_rgba(57,126,88,0.7)]" data-aos="zoom-in-up">
        <div className="xl:w-1/2" data-aos="zoom-out" data-aos-delay="800">
          <p className="text-lg">
            I am a Full Stack developer with a Bachelor's degree in Computer Science, graduating with honors from the College of Management.
          </p>

          <p className="text-lg mt-4">
            I specialize in end-to-end website development, focusing on responsiveness, intuitive design, and user-friendly interfaces.
            <br />
            I'm a fast learner, highly motivated, and passionate about expanding my skills and staying up-to-date with the latest technologies.
          </p>

          <p className="text-lg mt-4">
            Currently, I am looking for my first opportunity in the field to contribute and grow. If you have a suitable position, I would be happy to connect through the form below.
          </p>
        </div>
        <div className="xl:w-1/2 mt-6 xl:mt-0 md:mt-8" data-aos="zoom-out" data-aos-delay="800">
          <img
            src="/images/Profile PIcture.png"
            alt="Shira's profile"
            className="w-full h-auto rounded-full border-2 border-[#397e58] shadow-[0_0_5px_2px_rgba(57,126,88,0.7)]"
          />
        </div>
      </div>

    </section>
  )
}

export default About