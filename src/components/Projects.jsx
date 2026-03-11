import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in border-r border-gray-100 border-solid">

            <h2 className="text-lg font-semibold mb-6">
                Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="border p-6 rounded-xl hover:shadow-lg"
                    >
                        <h3 className="text-sm font-semibold mb-2">
                            {project.title}
                        </h3>

                        <p className="text-xs text-gray-500 mb-4">
                            {project.description}
                        </p>

                        <a
                            href={project.github}
                            className="text-xs text-blue-600"
                        >
                            View Code →
                        </a>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Projects