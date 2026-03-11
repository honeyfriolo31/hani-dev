
import React from 'react';
import { myTechStack } from "../data/index";

const Skills = () => {


  return (
    <section className="p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in border-r border-gray-100 border-solid bg-gray-50">


      <h2 className="text-lg font-semibold mb-6">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-4">

        {myTechStack.map((stack) => (
          <div key={stack.id} className="mb-4">

            {/* Category Title */}
            <h2 className="text-sm font-semibold mb-2">
              {stack.category}
            </h2>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">

              {stack.skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 text-sm hover:-translate-y-1 transition"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills