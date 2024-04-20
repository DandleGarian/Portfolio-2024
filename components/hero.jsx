import React from 'react'
import Image from 'next/image';
import heroImg from '../public/hero-img-2.png';

export const Hero = () => {
  return (
    <div className='w-screen h-screen'>
      <div className="flex w-full h-full">
        <div className="w-1/2 flex items-center justify-end p-lg">
          <div className='flex flex-col'>
            <span>Web Developer</span>
            <h1 className='flex flex-col'>
              <span className='leading-none'>Dan</span>
              <span className='relative translate-x-[18%] leading-none after:absolute after:w-full after:h-xl after:bg-dark-accent-1 after:top-[40%] after:left-[10%] after:-z-10 after:clip-path'>Dulgerian</span>
            </h1>
          </div>
        </div>
        <div className="w-1/2 border-l-dark-accent-3 border-l-2">
          <Image src={heroImg} alt="Photo of Dan Dulgerian" />
        </div>
      </div>
    </div>
  )
}

