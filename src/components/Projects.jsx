import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">

            <h2 className="text-3xl font-semibold mb-10">
                Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="border p-6 rounded-xl hover:shadow-lg"
                    >
                        <h3 className="font-semibold text-lg mb-2">
                            {project.title}
                        </h3>

                        <p className="text-gray-500 mb-4">
                            {project.description}
                        </p>

                        <a
                            href={project.github}
                            className="text-blue-600"
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