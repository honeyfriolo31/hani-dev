import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">

            <div className="max-w-3xl mx-auto text-center px-8">

                <h2 className="text-3xl font-semibold mb-6">
                    Contact
                </h2>

                <p className="text-gray-500 mb-6">
                    Feel free to reach out for collaborations or opportunities.
                </p>

                <a
                    href="mailto:youremail@email.com"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                    Send Email
                </a>

            </div>

        </section>
    )
}

export default Contact