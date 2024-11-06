import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from './ui/button';
import JumbotronCard from './JumbotronCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Jumbotron = () => {
  return (
    <>
      <div className="w-full px-36 py-10 flex gap-8">
        <div className="w-1/2 flex flex-col justify-around items-start my-10 px-8">
          <h1 className="capitalize font-monument text-6xl leading-tight">Summer collections</h1>
          <div className="relative p-2 border border-custom-secondary">
            <h1 className="text-5xl text-custom-secondary font-monument">2022</h1>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-custom-secondary"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-custom-secondary"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-custom-secondary"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-custom-secondary"></div>
          </div>

          <p className="font-medium text-gray-700">Find your shoes from our various collections. Here shoes are endless and profit is also endless.</p>
          <Button className="bg-custom-secondary text-[#FAFAFA] capitalize group mb-12">
            shop now
          </Button>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-md self-center"
          >
            <CarouselContent className="flex -ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 flex-shrink-0 basis-1/2">
                  <JumbotronCard />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="w-1/2 bg-[#F4F4F4] rounded-3xl relative aspect-square">
          <div className="absolute right-[50px] bg-custom-secondary py-5 px-4 text-center text-white">
            <p>40% <br />off</p>
          </div>
          <h1 className="absolute uppercase font-monument text-7xl text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1]">Wyldstep</h1>
          <img
            className="relative z-10 filter drop-shadow-[0_70px_30px_rgba(0,0,0,0.25)] -rotate-[10deg] transform -translate-x-10 -translate-y-10"
            src="../images/sneaker7.png"
            alt="Highlight Product"
          />
          <div className="absolute top-3/4 right-[90px] z-10">
            <div className="flex justify-between items-center">
              <p className="font-monument text-sm mr-1">Nike air max</p> |
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="w-[9px] ml-1" />
              ))}
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-2xl font-monument text-custom-secondary">120 $</p>
              <button className="border border-black px-4 py-1 font-medium text-sm hover:text-custom-third hover:bg-custom-secondary hover:border-custom-secondary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-36 flex justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-5xl gap-14 my-10">
            <p className=""><span className='text-custom-secondary font-monument text-2xl'>20K+</span> orders completed</p> | 
            <p className=""><span className='text-custom-secondary font-monument text-2xl'>20K+</span> orders completed</p> | 
            <p className=""><span className='text-custom-secondary font-monument text-2xl'>20K+</span> orders completed</p>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
