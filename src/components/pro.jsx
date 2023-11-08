import React, { useState } from 'react';
import { mealData } from '../data/data';
import './styles.css';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Portfolio = () => {
  const [foods, setFoods] = useState(mealData);
  return (
    <div
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  mt-5 inline border-b-4 border-gray-500">
          Portfolio
          </p>
        </div>

        <p className="text-xl mt-15 font-meduim text-center">
         Check out some of my work here
        
        </p>

        <br />

       <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-4  object-cover rounded-2xl'>
        {foods.map((item) => (
          <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <img
              src={item.image}
              alt={item.name} // Use curly braces to interpolate the item's name
              className='w-full h-[200px] object-cover rounded-lg image-animation'
            />
            <br/>
            <div className='pl-2 py-4 -mt-7 '>   
                  <p className='flex items-center text-indigo-600'>View more <FontAwesomeIcon icon={faChevronRight} className="text-blue-500" /> </p>
                </div>
                
    

          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Portfolio;
