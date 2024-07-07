import React from 'react';
import Link from 'next/link';

export const Nav = () => {
  return (
    <div className="fixed inset-y-0 left-0 flex p-md z-10">
      <ul className='flex flex-col flex-1 gap-y-xl max-h-52 mt-52'>
        <Link href='/'>Home</Link>
        <Link href="#about">About</Link>
        <Link href='/'>Projects</Link>
        <Link href='/'>Contact</Link>
      </ul>
    </div>
  )
}

