'use client'

import Link from 'next/link'
import { experiences, education, volunteer, certifications } from './data'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-16">
    <h2 className="text-3xl text-stone-700 font-instrument-serif italic mb-6 text-center">
      {title}
    </h2>
    <div className="space-y-8">
      {children}
    </div>
  </div>
)

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-stone-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" 
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-800 transition-colors mb-6"
              >
            ← Back to Home
          </Link>
          <h1 className="text-4xl mt-6 text-stone-700 font-instrument-serif italic">
            My Journey
          </h1>
          <p className="text-stone-600 mt-3">
            A comprehensive look at my professional experience, education, and community involvement
          </p>
        </div>

        {/* Professional Experience Section */}
        <Section title="Professional Experience">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl text-stone-800 font-light mb-1">
                    {exp.role}
                  </h2>
                  <h3 className="text-lg text-stone-700">
                    {exp.company}
                  </h3>
                  <p className="text-stone-500 text-sm">
                    {exp.location} • {exp.type}
                  </p>
                </div>
                <span className="text-stone-400 font-light text-sm">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <h4 className="text-stone-700 font-medium text-sm">Key Responsibilities & Achievements</h4>
                <ul className="space-y-1.5">
                  {exp.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="text-stone-600 text-sm pl-3 border-l-2 border-stone-200"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-stone-700 font-medium text-sm mb-2">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section>

        {/* Education Section */}
        <Section title="Education">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl text-stone-800 font-light mb-1">
                    {edu.degree}
                  </h2>
                  <h3 className="text-lg text-stone-700">
                    {edu.school}
                  </h3>
                  <p className="text-stone-500 text-sm">
                    {edu.location}
                  </p>
                </div>
                <span className="text-stone-400 font-light text-sm">
                  {edu.period}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <h4 className="text-stone-700 font-medium text-sm">Details</h4>
                <ul className="space-y-1.5">
                  {edu.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="text-stone-600 text-sm pl-3 border-l-2 border-stone-200"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-stone-700 font-medium text-sm mb-2">Activities & Societies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {edu.activities.map((activity, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-full text-xs"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section>

        {/* Volunteer Section */}
        <Section title="Community Involvement">
          {volunteer.map((vol, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl text-stone-800 font-light mb-1">
                    {vol.role}
                  </h2>
                  <h3 className="text-lg text-stone-700">
                    {vol.organization}
                  </h3>
                  <p className="text-stone-500 text-sm">
                    {vol.location}
                  </p>
                </div>
                <span className="text-stone-400 font-light text-sm">
                  {vol.period}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-stone-700 font-medium text-sm">Activities & Contributions</h4>
                <ul className="space-y-1.5">
                  {vol.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="text-stone-600 text-sm pl-3 border-l-2 border-stone-200"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Section>

        {/* Certifications Section */}
        <Section title="Certifications">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg text-stone-800 font-light mb-1">
                    {cert.title}
                  </h2>
                  <h3 className="text-sm text-stone-700">
                    {cert.organization}
                  </h3>
                </div>
                <span className="text-stone-400 font-light text-sm">
                  {cert.period}
                </span>
              </div>
            </div>
          ))}
        </Section>

      </div>
    </div>
  )
} 