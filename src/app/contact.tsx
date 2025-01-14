'use client'

import Socials from "./socials"

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col justify-center items-center px-4 relative">

      {/* Main content */}
      <div className="text-center space-y-6 max-w-2xl justify-center items-center">
        {/* <p className="text-gray-400 text-sm tracking-wide">I'm available</p> */}
        
        <h1 className="text-6xl md:text-7xl space-x-4">
          <span className="text-white font-light font-instrument-serif">Let's</span>
          <span className="text-gray-500 font-instrument-serif italic">Connect</span>
        </h1>
        
        {/* <p className="text-gray-400 text-lg max-w-md mx-auto">
          Feel free to contact me if having any questions.
          I'm available for new projects or just for chatting.
        </p> */}

<div className="flex justify-center">
          <a 
            href="https://cal.com/senemdilli/15min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 px-8 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 flex items-center gap-2"
          >
            Contact Me
            <span className="text-sm">→</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-8 w-full px-8">
        <div className="flex justify-between items-center">
          <button className="text-white/80 px-6 py-2 rounded-full bg-white/5 font-instrument-serif italic">
            Senem Dilli
          </button>
          
          {/* Social Links */}
          <Socials color="white/80" colorHover="white" />
        </div>
      </div>

    </div>
  )
}