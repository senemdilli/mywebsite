'use client'
import { experiences } from './experiences/data'

export default function TimelineSection() {
  return (
    <div className="min-h-screen bg-stone-100 flex flex-col justify-center items-center px-4 py-20">
      <div className="w-full max-w-4xl">
        {/* Experience Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl mt-4 text-stone-700 font-instrument-serif italic">
            My Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid grid-cols-12 gap-2">
                {/* Icon */}
                <div className="col-span-1 text-2xl text-stone-700">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="col-span-11">
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <h3 className="text-stone-800 text-xl font-light">
                        {exp.company}
                      </h3>
                      <p className="text-stone-600">
                        {exp.role}
                      </p>
                      <p className="text-stone-500 text-sm">
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-stone-400 font-light">
                      {exp.period}
                    </span>
                  </div>

                  {/* Details */}
                  {/* <div className="space-y-2">
                    {exp.details.map((detail, idx) => (
                      <p key={idx} className="text-stone-600 font-light pl-4 border-l-2 border-stone-200">
                        {detail}
                      </p>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Divider Line */}
              {index !== experiences.length - 1 && (
                <div className="h-px bg-stone-200 mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}