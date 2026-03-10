import React from 'react'

const About = () => {
    return (
        // <section id="about" className="py-20 px-8 max-w-4xl mx-auto bg-blue-400 border-2 border-black">
        <section id="about" className="p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in border-r border-gray-100 border-solid">

            <h2 className="text-lg font-semibold mb-6">
                About Me
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm">
                I'm a frontend developer passionate about building clean,
                user-friendly web applications. I specialize in ReactJS,
                modern CSS frameworks, and performance optimization. 
            <br />
            <br />
                I have 2 years of working experience doing manual and automation 
                testing for web-based applications including CRM, e-commerce,
                and online recruitment platforms. Proficient in leveraging
                automation frameworks and AI-assisted testing tools to
                improve test efficiency, coverage, and overall product quality.
              <br />  
              <br /> 
                Beyond QA, I built a comprehensive clinic management solution 
                using Laravel. I engineered the entire stack—from designing the 
                database to building the user interface—enabling the clinic to
                automate scheduling, track patient records, and manage transactions
                in one place.
            </p>

        </section>
    )
}

export default About