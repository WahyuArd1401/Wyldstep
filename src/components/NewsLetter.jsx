import React from 'react';
import Subtitle from './Subtitle';
import { Button } from './ui/button';

const NewsLetter = () => {
  return (
    <div 
      className='flex flex-col justify-center items-center py-20' 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../images/news-letter-background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Subtitle classname={'text-white'}>Join our <span className='text-custom-secondary'>news letter</span></Subtitle>
      <p className='text-white text-center text-sm mb-8'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ab minus reprehenderit perspiciatis! <br />
        Placeat ab aperiam ullam illo
      </p>
      <div className='flex w-2/5'>
        <input 
          type="text" 
          className='flex-grow py-3 pl-4 rounded-l-lg' 
          placeholder='insert your email here'
        />
        <button className='bg-custom-secondary hover:bg-[#E73F2F] text-white px-6 rounded-r-lg'>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
