'use client';

import { motion } from "framer-motion";
import Contact from "./contact";
import Link from "next/link";
import Experiences from "./experiences";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 bg-stone-100">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto mt-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl text-neutral-700 font-instrument-serif">
              I'm <span className="italic">Senem</span>,
              <br />
              a Product <span className="italic">Dilli</span>
              <br />
              based in <span className="italic">Istanbul</span>
            </h1>
            
            <p className="text-md text-neutral-600 dark:text-neutral-700 max-w-2xl">
            a self-motivated and proactive individual. I thrive in dynamic work environments where I can learn and experience new things. With experience in various fields, I am eager to contribute to projects that allow me to grow my skills and knowledge, and achieve successful outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#experiences"
              className="inline-block px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-700 rounded-full transition-colors"
            > 
              Keep scrolling for more →
            </Link>
          </motion.div>

        </section>
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <Contact />
    </div>
  );
}
