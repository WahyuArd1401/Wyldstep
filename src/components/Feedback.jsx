import React from 'react'
import Subtitle from './Subtitle'
import FeedbackCard from './FeedbackCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const Feedback = () => {
  return (
    <div className='w-full px-20 py-10 bg-[#FAFAFA] flex flex-col justify-center items-center'>
      <div className='w-3/4 flex flex-col items-center'>
        <Subtitle classname='leading-10'>what our <span className='text-custom-secondary'>clients say</span><br /> About us</Subtitle>
        <Carousel 
        className='w-full max-w-5xl'
        plugins={[Autoplay({ delay: 4000 })]}
        opts={{ align: 'start', loop: true }}>
          <CarouselContent className='flex'>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className='flex-shrink-0 basis-1/3'>
                <FeedbackCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Feedback