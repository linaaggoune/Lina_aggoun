import React from "react";
import lina from "../assets/WhatsApp.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typical from "react-typical";
import './styles.css';

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-3">
        <div className="flex flex-col justify-center h-full max-w-md">
          <h1 className="text-xl sm:text-4xl font-signature text-white font-serif">
            <span className="text-pink-500">H</span>i there!
          </h1>
          <h1 className="text-xl sm:text-5xl font-bold text-white">
            <Typical
              loop={Infinity}
              steps={[
                ' Frontend Dev ',
                2000,
                'Cross Platform',
                2000,
                'Modern website',
                2000,
                'React Dev',
                2000,
              ]}
            />
          </h1>
          <p className="text-white py-4">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next.js, and GraphQL.
          </p>

          <div className="flex space-x-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-pink-400 cursor-pointer"
            >
              See More
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            <a
              href="Lina_aggoun_0cv.pdf"
              download={'Lina_aggoun_0cv.pdf'}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-pink-500 to-pink-400 cursor-pointer"
            >
              Get Resume
            </a>
          </div>
        </div>

        <div>
          <img
            src={lina}
            alt="my Picture"
            
      
            className="rounded-2xl mx-auto w-2/3 md:w-[400] mt-8 md:mt-0 shadow-pink object-cover border-none hover:scale-105 duration-300"
          
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
