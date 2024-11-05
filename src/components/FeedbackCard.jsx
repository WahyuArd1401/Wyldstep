import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const FeedbackCard = () => {
  return (
    <div className='p-10 w-full bg-white rounded-lg border-2 border-gray-200'>
      <div className='flex items-center gap-2 mb-4'>
        <Avatar>
          <AvatarImage
            src="../images/avatar.jpg"
            alt="Shadcn avatar"
            className='w-[50px] rounded-full' />
        </Avatar>
        <div className='flex flex-col capitalize text-xs'>
          <p className='text-custom-primary font-monument'>Wahyu Ardian</p>
          <p className='text-gray-500 font-medium'>Designer</p>
        </div>
      </div>
      <p  className='text-sm font-medium text-gray-500 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora voluptas dicta cum praesentium quam ullam, in, sequi maiores eos nulla quis totam quaerat ipsum atque est numquam ducimus. Doloribus?</p>
    </div>
  )
}

export default FeedbackCard