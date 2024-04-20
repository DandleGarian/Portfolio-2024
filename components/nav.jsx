import React from 'react'

export const Nav = () => {
  return (
    <div className="absolute inset-y-0 left-0 flex p-md">
      <ul className='flex flex-col flex-1 justify-center gap-y-xl'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

