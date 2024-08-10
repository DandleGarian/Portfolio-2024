import React from 'react'
import Image from 'next/image';
import headshotGreen from '../public/headshot-green.png';
import headshotPurple from '../public/headshot-purple.png';
import headshotYellow from '../public/headshot-yellow.png';

export const Hero = () => {
  return (
    <div className='w-screen h-screen relative'>
      <div className="absolute top-sm right-sm">
        <div className="flex gap-sm">
          <a className='text-sm md:text-[1rem] font-medium tracking-wider md:tracking-[0.2em]'>LINKEDIN</a>
          <a className='text-sm md:text-[1rem] font-medium tracking-wider md:tracking-[0.2em]'>GITHUB</a>
        </div>
      </div>
      <div className='hidden md:block w-screen h-full z-20 flex flex-col justify-between box-border pt-[240px] pb-5xl'>
        <div className='relative flex justify-center'>
          <div>
            <h1>Dan Dulgerian</h1>
            <h6>Frontend Developer | Shopify Developer</h6>
          </div>
        </div>
        <div className='w-full relative flex justify-around'>
          <Image className='w-[30%]' src={headshotGreen} alt="headshot" />
          <Image className='w-[30%]' src={headshotPurple} alt="headshot" />
          <Image className='w-[30%]' src={headshotYellow} alt="headshot" />
        </div>
      </div>
      <div className="md:hidden w-screen h-screen flex flex-col justify-between p-sm">
        <div>
          <h1>Dan <br/>Dulgerian</h1>
          <h6>Frontend Developer | Shopify Developer</h6>
        </div>
        <div className='w-full flex flex-1 flex-col my-xl+ relative'>
          <div className='absolute flex items-center justify-center'>
            <Image className='max-w-[50%] self-center' src={headshotGreen} alt="headshot" />
          </div>
          <div className="flex absolute translate-y-56">
            <div className='max-w-[50%] translate-x-[15%] z-20'>
              <Image src={headshotPurple} alt="headshot" />
            </div>
            <div className='max-w-[50%] translate-x-[-15%] z-10'>
              <Image src={headshotYellow} alt="headshot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

