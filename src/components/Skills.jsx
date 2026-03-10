
import React from 'react';

const Skills = () => {

    const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Git"
  ]

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-3xl font-semibold mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border rounded-lg"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills