import React from 'react';

import { About } from "./about";

export const Drawer = ({ setIsDrawerOpen }) => {
  return (
    <div
      className='w-full h-full overflow-x-hidden'
    >
      <About setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
}
