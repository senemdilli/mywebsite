'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Socials from "../../socials";
import { projectsData } from "../data";
import { useState, useEffect } from "react";

export default function ProjectDetail() {
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setShowSocials(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-neutral-700 mb-4">Project not found</h1>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-700 transition-colors hover:bg-neutral-800"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-100">
      <div className="min-h-screen px-4 py-8 md:px-16 lg:px-32">
        <section className="max-w-4xl mx-auto mt-16 flex flex-col min-h-[calc(100vh-4rem)]">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-800 transition-colors mb-8"
            >
              <span>←</span> Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 mb-12"
          >
            <h1 className="text-4xl md:text-6xl text-neutral-700 font-instrument-serif">
              <span className="italic">{project.title}</span>
            </h1>
            
            <p className="text-md text-neutral-600">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-stone-200 text-neutral-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-700 rounded-full transition-colors hover:bg-neutral-800 mt-4"
            >
              View Project <span>→</span>
            </a>
          </motion.div>

          {/* Project Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-12 mb-32"
          >
            {/* Project Images */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-2xl text-neutral-700 font-instrument-serif">Project Preview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="aspect-video relative overflow-hidden rounded-lg shadow-sm"
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="prose prose-neutral max-w-none space-y-8">
              <div>
                <h2 className="text-2xl text-neutral-700 font-instrument-serif mb-4">About the Project</h2>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-neutral-600 whitespace-pre-line">{project.fullDescription}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl text-neutral-700 font-instrument-serif mb-4">Challenges & Solutions</h2>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-neutral-600 whitespace-pre-line">{project.challenges}</p>
                </div>
              </div>
            </div>
          </motion.div>

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