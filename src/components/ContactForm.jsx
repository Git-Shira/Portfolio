import React, { useState } from 'react'

import emailjs from '@emailjs/browser';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      if (!validateEmail(value)) {
        setError((prevError) => ({ ...prevError, email: "Invalid email address" }));
      } else {
        setError((prevError) => {
          const { email, ...rest } = prevError;
          return rest;
        });
      }
    }
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      await emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CONTACT_FORM_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
          },
          (err) => {
            setError({ error: 'Something went wrong, please try again.' });
            console.error('Error sending email:', err);
          }
        );

      await emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOMATIC_REPLY_TEMPLATE_ID,
          {
            to_name: formData.name,
            to_email: formData.email,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log('Automatic reply sent successfully:', response);
          },
          (err) => {
            setError({ error: 'Something went wrong, please try again.' });
            console.error('Error sending automatic reply:', err);
          }
        );

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSending(false);
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setError({});
      }, 10000);

    } catch (error) {
      console.error('Error sending emails:', err);
      setIsSending(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center text-white text-center p-6 bg-black shadow-[inset_0_0px_80px_15px_#397e58] h-auto" id='contact'>

      <h2 className="text-2xl text-white transition-colors duration-300 relative inline-block hover:after:content-[''] hover:after:absolute hover:after:-inset-1 hover:after:bg-[#2fbf71] hover:after:blur-lg hover:after:opacity-50 hover:after:-z-10 font-bold hover:scale-105 transition-all duration-300 mt-12" data-aos="zoom-in">
        Contact
      </h2>

      <h2 className="text-3xl mt-2 mb-6 hover:text-[#2fbf71] transition-colors duration-300" data-aos="flip-up">
        Let's Connect!
      </h2>

      <div className="lg:flex lg:items-center gap-8 lg:px-0 px-8 py-8 bg-neutral-800 rounded-lg w-[90%] md:w-[80%] lg:w-[70%] mb-15 shadow-[0_0_15px_5px_rgba(57,126,88,0.7)]" data-aos="zoom-in-up">
        <div className={`lg:w-2/5 lg:py-0 px-8 py-8 ${isSubmitted ? "lg:border-r lg:border-b-0 border-b border-[#397e58]" : ""}`} data-aos="zoom-out" data-aos-delay="800">

          <p className="text-lg text-center mx-auto mb-4 w-full lg:w-[100%] md:w-[100%]">
            I'm always open to new opportunities and would love to connect.
            <br />
            If you have any questions or suggestions, feel free to reach out!
          </p>

          <div className="flex flex-col gap-2 items-center lg:mt-4 mt-8" data-aos="zoom-in" data-aos-delay="1000">
            <a href="https://www.linkedin.com/in/shira-elchadad/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 lg:w-2/3 sm:w-1/2 w-full bg-transparent text-white border-1 border-white py-2 px-6 rounded-3xl hover:bg-transparent hover:text-[#2fbf71] hover:border-[#2fbf71] hover:scale-103 transition-all duration-300">
              <FaLinkedin className="w-5 h-5" /> Linkedin
            </a>

            <a href="https://github.com/Git-Shira" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 lg:w-2/3 sm:w-1/2 w-full bg-transparent text-white border-1 border-white py-2 px-6 rounded-3xl hover:bg-transparent hover:text-[#2fbf71] hover:border-[#2fbf71] hover:scale-103 transition-all duration-300">
              <FaGithub className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>

        <div className={`lg:w-3/5 lg:mt-0 lg:py-0 py-8 pr-8 ${isSubmitted ? "" : "lg:pl-16 pl-8 lg:border-l lg:border-t-0 border-t border-[#397e58]"}`} data-aos="zoom-out" data-aos-delay="800">
          {isSubmitted ? (
            <div className="text-center">
              <p className="text-lg">
                Thank you, {formData.name}!
                <br />
                Your message has been sent successfully.</p>
            </div>
          ) :
            (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="px-1 block text-white text-left">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 mt-2 rounded-md bg-neutral-900 text-white border border-[#397e58] focus:outline-none focus:ring-1 focus:ring-[#2fbf71]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="px-1 block text-white text-left">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`${error.email ? "border-red-500 focus:ring-red-500" : "border-[#397e58] focus:ring-[#2fbf71]"} 
                  w-full p-3 mt-2 rounded-md bg-neutral-900 text-white border focus:outline-none focus:ring-1`}
                  />
                  {error.email && <p className="text-red-500 text-sm mt-1 text-end px-1">{error.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="px-1 block text-white text-left">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 mt-2 rounded-md bg-neutral-900 text-white border border-[#397e58] resize-y max-h-40 min-h-20 h-30 focus:outline-none focus:ring-1 focus:ring-[#2fbf71]"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 border-2 border-[#2fbf71] bg-[#2fbf71] text-white rounded-md ${isSending ? "bg-[#397e58] border-[#397e58]" : "cursor-pointer hover:bg-transparent hover:border-[#2fbf71] hover:text-[#2fbf71] focus:outline-none focus:ring-1 focus:ring-[#2fbf71]"} transition-all duration-300`}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {error.error && <p className="text-red-500 text-md text-center">{error.error}</p>}

              </form>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default ContactForm