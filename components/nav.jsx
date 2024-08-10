'use-client';

import React from 'react';
import Link from 'next/link';

export const Nav = ({ onLinkClick }) => {
  return (
    <>
      <div className="hidden md:flex absolute inset-y-0 left-0 p-md z-10">
        <ul className='flex flex-col flex-1 gap-y-xl max-h-52 mt-52'>
          <Link href='/'>Home</Link>
          <Link href="#about" onClick={onLinkClick}>About</Link>
          <Link href='/' onClick={onLinkClick}>Projects</Link>
          <Link href='/' onClick={onLinkClick}>Contact</Link>
        </ul>
      </div>
      <div className="md:hidden w-screen absolute inset-x-o bottom-0 flex p-sm z-10">
        <ul className='flex w-full justify-between'>
          <Link href='/'>Home</Link>
          <Link href="#about" onClick={onLinkClick}>About</Link>
          <Link href='/' onClick={onLinkClick}>Projects</Link>
          <Link href='/' onClick={onLinkClick}>Contact</Link>
        </ul>
      </div>
    </>
  )
}

