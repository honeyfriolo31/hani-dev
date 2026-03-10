import React from 'react'

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center">

            <h1 className="text-5xl font-bold mb-4">
                Hi, I'm Honey Grace
            </h1>

            <p className="text-gray-500 max-w-xl mb-6">
                Frontend Developer specializing in React and modern web technologies.
            </p>

            <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
                View Projects
            </a>

        </section>
    )
}

export default Hero