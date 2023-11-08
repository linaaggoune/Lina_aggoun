import React, { useState } from 'react';
import { mealData } from '../data/data';
import './styles.css';


const About = () => {
  const [foods, setFoods] = useState(mealData);
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  mt-5 inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15 font-meduim text-center">
        My name is <span className='text-pink-400'> Lina Aggoun</span> , and I am 22 years old.
         I recently graduated from the high school of computer science <span className='text-pink-400'> ESI</span>.
          I am passionate about <span className='text-pink-400'> web development</span> , and during my time in school, 
          I had the opportunity to work on significant projects as part of a <span className='text-pink-400'>team</span>,
           which helped me acquire new skills. Lately, I have been involved in freelance projects as <span className='text-pink-400'>front-end</span> Dev 
           and have been teaching front-end technologies such as HTML, CSS, and JavaScript. If you're 
           wondering what makes me unique, 
        it's my natural <span className='text-pink-400'>curiosity</span> and <span className='text-pink-400'> quick </span>learning ability.
        </p>

        <br />

       <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-4 shadow-pink object-cover rounded-2xl'>
        {foods.map((item) => (
          <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <img
              src={item.image}
              alt={item.name} // Use curly braces to interpolate the item's name
              className='w-full h-[200px] object-cover rounded-lg image-animation'
            />
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default About;
