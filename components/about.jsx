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
import { Spotlight } from './ui/spotlight';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

export const About = () => {
  return (
    <div id="about" className='w-screen h-screen p-md z-10 relative box-border bg-background-dark bg-dot-dark-accent-2/[0.7]'>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#12130F)]"></div>
        <h3 className='absolute'>About</h3>
        <div className="hidden lg:flex w-screen h-screen items-center z-10 relative px-40">
          <div className='w-1/2'>
            <div className='w-3/4 p-md text-base+ border border-dark-accent-2 bg-background-dark bg-opacity-70 rounded-lg'>
              My first coding experience came in the form of a little
              application called Turtle Academy. You see, I
              was a primary school educator in the not so distant past. Teaching
              7-year-olds to code is about as fun, frustrating and rewarding as
              learning HTML, CSS and Javascript as an adult. Three years ago, it
              was clear my teaching career had run its course. I decided it was
              time to spin this little coding hobby into a new career.
              <br />
              <br />
              Since then, I've happily devoted significant time to
              learning web development technologies. In June of 2022, I snagged
              my first job as a Shopify developer. Now I'm fully steeped in the
              exciting and ever-changing world of Shopify development. I'm
              looking forward to what new innovations will come next and
              continuing to deliver amazing themes to clients. When
              I'm not working, you'll likely find me whipping up zingy
              Asian-inspired dishes, watching too many 70s films or obsessing
              over my two cats with my life partner.
            </div>
          </div>
          <div className='w-1/2 flex items-center justify-end'>
            <div className="w-3/4 p-md border border-dark-accent-2 bg-background-dark bg-opacity-70 rounded-lg flex flex-col items-center justify-center">
              <div className='line-gradient relative'>
                <h6>WHAT I KNOW</h6>
              </div>
              <div className="flex justify-between items-center pt-8 pb-2 px-6 w-full">
                <div className='font-medium text-[1rem] md:tracking-[0.2em] cursor-pointer'>FAVORITES</div>
                <div className='font-medium text-[1rem] md:tracking-[0.2em] cursor-pointer'>EXPLORING</div>
                <div className='font-medium text-[1rem] md:tracking-[0.2em] cursor-pointer'>NOVICE</div>
              </div>
              <div className="grid grid-cols-3">
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
          </div>
        </div>
        {/* <div className="lg:hidden w-full h-full  m-sm+ border border-dark-accent-2 bg-background-dark bg-opacity-70 rounded-lg absolute inset-0">
          <div className="w-full h-full z-10">
            <div className='p-sm text-base border border-dark-accent-2 bg-background-dark bg-opacity-70 rounded-lg'>
                My first coding experience came in the form of a little
                application called Turtle Academy. You see, I
                was a primary school educator in the not so distant past. Teaching
                7-year-olds to code is about as fun, frustrating and rewarding as
                learning HTML, CSS and Javascript as an adult. Three years ago, it
                was clear my teaching career had run its course. I decided it was
                time to spin this little coding hobby into a new career.
                <br />
                <br />
                Since then, I've happily devoted significant time to
                learning web development technologies. In June of 2022, I snagged
                my first job as a Shopify developer. Now I'm fully steeped in the
                exciting and ever-changing world of Shopify development. I'm
                looking forward to what new innovations will come next and
                continuing to deliver amazing themes to clients. When
                I'm not working, you'll likely find me whipping up zingy
                Asian-inspired dishes, watching too many 70s films or obsessing
                over my two cats with my wife.
              </div>
          </div>
        </div> */}
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

