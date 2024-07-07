import React from 'react';
import Image from 'next/image';
import headshotGreen from '../public/headshot-green.png';
import framerSvg from '../node_modules/devicon/icons/framermotion/framermotion-original.svg';
import nodeSvg from '../node_modules/devicon/icons/nodejs/nodejs-plain.svg';
import reactSvg from '../node_modules/devicon/icons/react/react-original.svg';
import cssSvg from '../node_modules/devicon/icons/css3/css3-plain.svg';
import javascriptSvg from '../node_modules/devicon/icons/javascript/javascript-original.svg';
import tailwindSvg from '../node_modules/devicon/icons/tailwindcss/tailwindcss-original.svg';
import figmaSvg from '../node_modules/devicon/icons/figma/figma-original.svg';
import gitSvg from '../node_modules/devicon/icons/git/git-original.svg';
import nextjsSvg from '../node_modules/devicon/icons/nextjs/nextjs-original.svg';
// import { Spotlight } from './ui/spotlight';

export const About = () => {
  return (
    <div id="about" className='w-screen h-screen flex-scroll p-md z-10 relative box-border'>
      <h3 className='absolute'>About</h3>
      <div className="flex w-screen h-screen items-center z-10 relative px-40">
        <div className='w-1/2'>
          <div className='w-3/4 p-md text-base+ border border-dark-accent-2 bg-background-dark bg-opacity-70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero pariatur rem similique expedita ullam deleniti ea, est, amet laboriosam sapiente enim voluptates veritatis, earum molestias at necessitatibus voluptatum aperiam nostrum obcaecati quaerat error. Magnam sed, cumque dolores veritatis quisquam atque architecto facilis facere ratione, ducimus iusto dicta placeat quidem voluptas autem! Enim voluptatem corrupti in, nesciunt perferendis perspiciatis doloribus dignissimos sed earum rem distinctio voluptatibus! Neque iusto iure suscipit porro quaerat modi aperiam animi perferendis, minus temporibus amet repellendus et eligendi accusamus! Praesentium minus hic numquam laudantium! Dolorum est recusandae ad tenetur vitae possimus inventore voluptates debitis, numquam qui?
          </div>
        </div>
        <div className='w-1/2 grid grid-cols-3'>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={cssSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={javascriptSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={gitSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={framerSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={reactSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={tailwindSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={nextjsSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={figmaSvg} />
          </div>
          <div className='flex items-center justify-center p-6'>
            <Image className='flex-1' src={nodeSvg} />
          </div>
        </div>
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-[80vw] h-[80vh] relative'>
          <div className="absolute top-0 left-0 w-full h-full opacity-60">
            <Image className='object-contain w-full h-full' src={headshotGreen} alt="headshot" />
          </div>
        </div>
      </div>
    </div>
  )
}

