import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TopItem = () => {
  return (
    <div className='w-full px-20 flex justify-center bg-[#EFEFEF]'>
      <div className='w-3/4 flex'>
        <div className='bg-black aspect-square p-10'>
          <img src="../images/sneaker7.png" alt="Top item image" className='bg-custom-third rounded-full w-[800px] object-cover' />
        </div>
        <div className='flex flex-col justify-center p-10'>
          <h2 className='text-3xl font-monument capitalize mb-8 '>top <span className='text-custom-secondary'>items</span></h2>
          <h3 className='text-xl font-monument capitalize mb-4'>unique featurs of latest & trending products</h3>
          <ul className='list-disc list-outside pl-5 text-sm text-gray-500 font-semibold'>
            <li className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam laborum, quos saepe qui nobis cupiditate. </li>
            <li className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam laborum, quos saepe qui nobis cupiditate. </li>
            <li className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam laborum, quos saepe qui nobis cupiditate. </li>
          </ul>
          <div className='w-full flex justify-between items-center mt-4'>
            <div className='flex items-center'>
              <FontAwesomeIcon icon={faArrowRight} size='2x' flip='horizontal' className="mr-5"/>
              <FontAwesomeIcon icon={faArrowRight} size='2x'/>
            </div>
            <p className='font-monument text-2xl'><span className='text-custom-secondary'>1</span> / 10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopItem