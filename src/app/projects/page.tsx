'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "../socials";
import { projectsData } from "./data";
import { useState, useEffect } from "react";

export default function Projects() {
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setShowSocials(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = Object.entries(projectsData).map(([slug, data]) => ({
    slug,
    ...data
  }));

  return (
    <div className="bg-stone-100">
      <div className="min-h-screen px-4 py-8 md:px-16 lg:px-32 relative">
        {/* Header Section */}
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
              My <span className="italic">Projects</span>
            </h1>
            
            <p className="text-md text-neutral-600 dark:text-neutral-700">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <h3 className="text-xl font-semibold text-neutral-700 mb-2">{project.title}</h3>
                  <p className="text-neutral-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-stone-200 text-neutral-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-block px-4 py-2 text-sm font-medium text-neutral-100 bg-neutral-700 rounded-full transition-colors hover:bg-neutral-800"
                  >
                    View Details →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          {showSocials && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed bottom-8 left-0 right-0 px-4 md:px-16 lg:px-32 z-10"
            >
              <div className="max-w-4xl mx-auto">
                <Socials color="neutral-700" colorHover="neutral-900" />
              </div>
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
} 