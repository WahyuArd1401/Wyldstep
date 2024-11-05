import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const JumbotronCard = () => {
  return (
    <div className='bg-black text-custom-third py-2 pl-2 pr-6 flex gap-3 rounded-md'>
      <div className='aspect-square'>
        <img src="../images/sneaker7.png" alt="" className='object-cover w-[100px] bg-custom-third rounded-sm' />
      </div>
      <div className='flex flex-col justify-between items-start'>
        <h1 className='uppercase text-custom-third text-[10px] font-bold truncate max-w-[70px]'>
          nike air jordan
        </h1>
        <p className='text-[10px] text-gray-500'>
          <FontAwesomeIcon icon={faStar} className='w-[9px]' /> (4.5)
        </p>
        <p className='uppercase text-custom-third font-bold text-[14px]'>$128</p>
        <p className='text-custom-third text-[8px] capitalize'>mens sneaker</p>
        <button className='text-custom-primary text-[12px]'>Add to Cart</button>
      </div>
    </div>
  )
}

export default JumbotronCard