'use client';

import { motion } from "framer-motion";
import Contact from "./contact";
import Link from "next/link";
import Experiences from "./experiences";
import Socials from "./socials";

export default function Home() {
  return (
    <div className="bg-stone-100">
      <div className="h-screen flex items-center px-4 md:px-8 lg:px-16 bg-stone-100">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl text-neutral-700 font-instrument-serif">
              I'm <span className="italic">Senem Dilli</span> <img src="senem.jpg" alt="Senem" className="inline-block w-10 h-10 rounded-full ml-1 mb-2" />,
              <br />
              <img src="comp.png" alt="Computer" className="inline-block w-10 h-10 rounded-full ml-1 mb-2" /> a Frontend Developer <span className="italic"></span>
              <br />
              based in <span className="italic">Istanbul</span> <img src="istanbul.png" alt="Istanbul" className="inline-block w-10 h-10 rounded-full ml-1 mb-2" />
            </h1>
            
            <p className="text-md text-neutral-600 dark:text-neutral-700 max-w-2xl">
            a self-motivated and proactive individual. I thrive in dynamic work environments where I can learn and experience new things. With experience in various fields, I am eager to contribute to projects that allow me to grow my skills and knowledge, and achieve successful outcomes.
            </p>
            <p className="text-md text-neutral-600">Keep scrolling for more :)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
          </motion.div>

          {/* Social Links */}
          <Socials color="neutral-700" colorHover="neutral-900" />
        </section>
      </div>

      <div id="navigation" className="flex flex-col justify-center items-center gap-8 py-6 bg-stone-100">
        <motion.span 
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-4xl text-neutral-700"
        >
          ✺
        </motion.span>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full px-4 sm:px-0"
        >
          <Link
            href="/experiences"
            className="w-full sm:w-auto text-center inline-block px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-700 rounded-full transition-all hover:bg-neutral-800 hover:scale-105"
          > 
            Experience
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto text-center inline-block px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-700 rounded-full transition-all hover:bg-neutral-800 hover:scale-105"
          > 
            Projects
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto text-center inline-block px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-700 rounded-full transition-all hover:bg-neutral-800 hover:scale-105"
          > 
            Contact
          </Link>
          <Link
            href="/aboutme"
            className="w-full sm:w-auto text-center inline-block px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-700 rounded-full transition-all hover:bg-neutral-800 hover:scale-105"
          > 
            About Me
          </Link>
        </motion.div>
      </div>

      <div>
        <Experiences />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
