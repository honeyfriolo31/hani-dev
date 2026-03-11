import React from 'react';
import { CiLocationOn, CiMail, CiLinkedin, CiBookmarkCheck, CiBoxList } from "react-icons/ci";
import profilepic from "../assets/images/honey-profile.jpg"

const Profile = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <section className='mb-8 animate-fade-in'>
                <div className='flex items-center gap-4 md:gap-6 border-2 border-blue-300'>

                    {/* Main Content */}
                    {/* Image */}
                    <img src={profilepic} alt="Profile" className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 object-cover" />

                    {/* flex-1 allow a flex item to grow and shrink as needed */}
                    <div className='flex-1 min-w-0 border-2 border-yellow-300 '>

                        <div className='flex gap-2'>
                            {/* Name */}
                            <h1 className="text-xl md:text2xl font-bold truncate">
                                Honey Grace Friolo
                            </h1>
                            <span className="text-blue-500 font-medium"><CiBookmarkCheck size={25} /></span>
                        </div>

                        {/* Location */}
                        <div className='flex border-2 border-blue-300'>
                            <CiLocationOn size={16} />
                            <span className='text-xs md:text-sm'>Abu Dhabi, United Arab Emirates</span>
                        </div>


                        {/* Roles */}
                        <p className="flex text-xs md:text-sm mt-2">
                            Front-end Developer / Backend Developer
                        </p>

                        {/* Buttons */}

                        <div className='block'>

                            {/* Email */}
                            <button className='px-2 py-2 border rounded-md hover:bg-gray-200'>
                                <a href="mailto:hgfriolo@gmail.com" className="flex text-xs md:text-sm ">
                                    <CiMail size={18} />
                                    Send Email
                                </a>
                            </button>

                            <button className='bg-white border px-2 py-2 rounded-md hover:scale-105 transition duration-300 overflow-hidden'>
                                {/* LinkedIn */}
                                <a href='https://www.linkedin.com/in/honey-grace-friolo-1802b2289/' target='_blank' className="flex text-xs md:text-sm ">
                                    <CiLinkedin size={18} />
                                    LinkedIn
                                </a>
                            </button>

                            <button className='bg-white border px-2 py-2 rounded-md hover:scale-105 transition duration-300'>
                                {/* Project */}
                                <a href='#projects' className="flex text-xs md:text-sm">
                                    <CiBoxList size={18} />
                                    Project
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Profile