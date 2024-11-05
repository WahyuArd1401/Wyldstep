import React from 'react'
import Subtitle from './Subtitle'
import FeedbackCard from './FeedbackCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Feedback = () => {
  return (
    <div className='w-full px-20 py-10 bg-[#FAFAFA] flex flex-col justify-center items-center'>
      <div className='w-3/4 flex flex-col items-center'>
        <Subtitle classname='leading-10'>what our <span className='text-custom-secondary'>clients say</span><br /> About us</Subtitle>
        <div className='w-full grid grid-cols-3 gap-8 mb-10'>
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
        <div className='flex gap-8'>
              <FontAwesomeIcon icon={faArrowRight} size='2x' flip='horizontal' />
              <FontAwesomeIcon icon={faArrowRight} size='2x'/>
            </div>
      </div>
    </div>
  )
}

export default Feedback