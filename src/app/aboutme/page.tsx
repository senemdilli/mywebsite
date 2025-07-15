'use client'

import Link from "next/link"
import Image from "next/image"
import aboutMe from "./data"
import { motion } from "framer-motion"

export default function AboutMePage() {
  return (
    <div className="bg-stone-100">
      <main className="min-h-screen px-4 py-8 md:px-16 lg:px-32 relative">
        <section className="max-w-4xl mx-auto mt-16 space-y-8 pb-32">
        <Link href="/" 
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-800 transition-colors mb-8"
              >
            ← Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl text-neutral-700 font-instrument-serif">
              More About <span className="italic">Me</span>
            </h1> 
            
            <p className="text-md text-neutral-600 dark:text-neutral-700">
            Hi there! I'm a passionate individual with diverse interests and hobbies. 
            Here's a glimpse into what makes me tick.            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {aboutMe.map((hobby, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={hobby.photo}
                    alt={hobby.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {hobby.emoji} {hobby.title}
                  </h3>
                  <p className="text-gray-600">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}