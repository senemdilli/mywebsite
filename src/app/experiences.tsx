'use client'

const experiences = [
  {
    icon: "✦",
    role: "Frontend Developer",
    company: "Accenture",
    location: "Istanbul, Turkey",
    period: "Aug 2024 → Now",
    /* details: [
      "Solution development for a German electric infrastructure project, leveraging a low-code platform which uses SQL, PHP, and SAP Open UI5."
    ] */
  },
  {
    icon: "✦",
    role: "Product Intern - Drive Up",
    company: "Mercedes-Benz Financial Services",
    location: "Istanbul, Turkey",
    period: "Aug 2023 → Jun 2024",
    /* details: [
      "Collaborated with cross-functional teams to develop and test new features for Online Sales",
      "Worked with diverse business departments to identify and prioritize product requirements",
      "Managed test scenarios and ensured product quality through thorough testing"
    ] */
  },
  {
    icon: "✦",
    role: "Product Development Intern",
    company: "anny GmbH",
    location: "Cologne, Germany",
    period: "Jul 2022 → Sep 2022",
    /* details: [
      "Completed Erasmus+ Internship at anny GmbH in Germany",
      "Improved new feature implementations with wireframes and research",
      "Shaped the most effective ways to add new features",
      "Gained valuable experience in Product Management"
    ] */
  },
  {
    icon: "✦",
    role: "Software Development Long Term Intern",
    company: "Alternatif Bank",
    location: "Istanbul, Turkey",
    period: "Aug 2021 → Jul 2022",
    /* details: [
      "Developed and maintained banking applications",
      "Worked with core banking systems",
      "Implemented new features and improvements"
    ] */
  }
]

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