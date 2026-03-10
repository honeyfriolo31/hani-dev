import React from 'react'
import { experiences } from "../data/index.js"

const Experience = () => {
  return (
    <section className="p-4 col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in animation-delay-200">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-lg font-semibold mb-6">
          Experience
        </h2>

        <div className="relative border-l border-gray-300">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="ml-6 mb-6 relative"
            >

              {/* Timeline Node */}
              <span
                className={`absolute -left-8 top-2 w-4 h-3 border-2 ${
                  exp.active
                    ? "bg-black border-black"
                    : "bg-white border-gray-300"
                }`}
              />

              <div className="relative justify-between gap-2 items-start ">
                  <h3 className="text-sm font-semibold">
                    {exp.role}
                  </h3>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-600 mt-1">
                    {exp.company}
                  </p>
                <span className="left-0 top-1.5 text-gray-500 text-xs flex">
                  {exp.year}
                </span>
                </div>


              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience