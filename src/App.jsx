import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection '
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import ContactForm from './components/ContactForm'

import { ArrowUpIcon } from '@heroicons/react/24/outline'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'

function App() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      mirror: true,
      once: false,
      offset: 100,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);


  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <About />
      <ContactForm />

      <footer id='footer' className="w-full flex flex-col items-center justify-center text-white text-center p-5 bg-black shadow-[inset_0_0px_20px_5px_#397e58] h-auto">
        © 2025 | Shira Elchadad - All rights reserved.
      </footer>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 left-5 bg-[#397e58] text-white py-4 px-2 rounded-full shadow-lg transition-all duration-500 overflow-hidden relative group cursor-pointer"
          style={{
            position: "fixed",
          }}>
          <ArrowUpIcon className="w-6 h-6" />
          <span className="absolute inset-0 bg-[#2fbf71] scale-y-0 origin-bottom transition-transform duration-800 group-hover:scale-y-100 z-[-1]"></span>
        </button>
      )}
    </>
  )
}

export default App