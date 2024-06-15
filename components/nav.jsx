import React from 'react'

export const Nav = () => {
  return (
    <div className="absolute inset-y-0 left-0 flex p-md z-10">
      <ul className='flex flex-col flex-1 gap-y-xl max-h-52 mt-52'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

