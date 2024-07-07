import React from 'react'
import { SparklesCore } from "./ui/sparkles";

export const Background = () => {
  return (
    <div className="w-screen fixed h-screen inset-0">
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
  )
}

