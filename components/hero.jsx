import React from 'react'
import Image from 'next/image';
import headshotGreen from '../public/headshot-green.png';
import headshotPurple from '../public/headshot-purple.png';
import headshotYellow from '../public/headshot-yellow.png';
import { SparklesCore } from "./ui/sparkles";

export const Hero = () => {
  return (
    <div className='w-screen h-screen relative'>
      <div className="w-full absolute h-screen inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="#12130F"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#9FA0C3"
        />
      </div>
      <div className='w-full h-full z-20 flex flex-col justify-between box-border pt-[240px] pb-5xl'>
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
    </div>
  )
}

