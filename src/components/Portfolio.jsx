import React, { useState } from 'react';
import lina from "../assets/WhatsApp.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typical from "react-typical";
import './styles.css';
import { projects } from '../data/data';


const Portfolio = () => {
  const [foods, setFoods] = useState(projects);

  return (
    <div
      name="portfolio"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-3">
        <div className="flex flex-col justify-center h-full max-w-md mb-12 md:mb-0">
          <h1 className="text-xl sm:text-4xl font-bold text-white font-serif">
            <span className="text-pink-500">My Work </span>
          </h1>
          <p className="text-xl mt-15 font-meduim ">
            My name is  , and I am 22 years old.
            I recently graduated from the high school of computer science 
            I am passionate about , and during my time in school, 
            I had the opportunity to work on significant projects as part of a ,
            which helped me acquire new skills. Lately, I have been involved in freelance projects
        </p>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-15 mt-4 object-cover rounded-2xl'>
  {foods.map((item) => (
    <div key={item.id} className='border-none hover:scale-105 duration-300 relative'>
      <div className='w-[300px] h-[200px] rounded-lg overflow-hidden'>
        <img
          src={item.image}
          alt={item.name}
          className='object-contain w-full h-full rounded-lg cursor-pointer'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#9e8ada] opacity-0 group-hover:opacity-80 transition-all duration-700 flex items-center justify-center hover:opacity-100 transition-opacity'>
        <a href='#' className='text-white hover:underline'>
          See More
        </a>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default Portfolio;