import React from 'react'

import { ChevronDownIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
    return (
        <header id='header' className="bg-black shadow-[inset_0_0px_80px_15px_#397e58] text-white flex items-center justify-center py-20 min-h-screen mt-15">
            <div className="text-center">
                <h1 className="text-7xl font-bold hover:text-[#2fbf71] transition-colors duration-300" data-aos="zoom-out">
                    Shira Elchadad
                </h1>
                <h2 className="text-3xl mt-4 mb-6 hover:scale-105 transition-all duration-300" data-aos="zoom-in">
                    Full Stack Developer
                </h2>

                <p className="text-2xl mb-8 max-w-3xl mx-auto px-10" data-aos="fade-up">
                    I am a Full Stack Developer specializing in building fully responsive websites from end to end, with a focus on user-friendly and intuitive interfaces.
                </p>

                <div className="flex flex-wrap justify-center gap-2 px-4">
                    <a href="#projects" className="bg-transparent text-white border-2 border-white hover:bg-transparent hover:text-[#2fbf71] hover:border-[#2fbf71] py-2 px-6 rounded-lg text-lg font-semibold rounded-lg text-lg font-semibold transition-all duration-300" data-aos="flip-right" data-aos-delay="400">
                        Explore Projects
                    </a>
                    <a href="#contact" className="bg-[#2fbf71] text-white border-2 border-[#2fbf71] py-2 px-6 rounded-lg text-lg font-semibold transition-transform duration-300 transform hover:scale-105" data-aos="flip-left" data-aos-delay="400">
                        Let's Collaborate
                    </a>
                </div>
                <div className="mt-20">
                    <a href="#skills">
                        <ChevronDownIcon className="h-10 w-10 text-white hover:text-[#2fbf71] mx-auto transition-all duration-300 animate-bounce" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default HeroSection