import React from 'react';
import { CiLocationOn, CiMail, CiLinkedin, CiBookmarkCheck, CiBoxList } from "react-icons/ci";
import profilepic from "../assets/images/honey-profile.jpg"

const Profile = () => {
    return (
        <section className='mb-8 animate-fade-in. border border-blue-500'>
            <div className='flex items-center gap-4 md:gap-6 border border-yellow-500'>

                {/* Main Content */}
                {/* Image */}
                <img src={profilepic} alt="Profile" className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 object-cover " />

                {/* flex-1 allow a flex item to grow and shrink as needed */}
                <div className='flex-1 min-w-0 border border-orange-500'>

                    <div className='flex gap-2'>
                        {/* Name */}
                        <h1 className="text-lg md:text-2xl font-bold">
                            Honey Grace Friolo
                        </h1>
                        <span className="text-blue-500"><CiBookmarkCheck size={25} /></span>
                    </div>

                    {/* Location */}
                    <div className='flex md:mt-2 border border-orange-500 items-center gap-1'>
                        <CiLocationOn size={22} />
                        <p className='text-xs md:text-lg '>Abu Dhabi, United Arab Emirates</p>
                    </div>


                    {/* Roles */}
                    <div className="flex text-[15px] md:text-xl md:mt-2 ">
                        Front-end Developer / QA Engineer
                    </div>

                    {/* Buttons */}

                    <div className='flex space-x-1 md:gap-3 md:space-x-1 md:mt-2 mt-2 flex-shrink-0'>

                        {/* Email */}
                        <button className='px-3 py-1 border rounded-md hover:scale-105 transition duration-300 '>
                            <a href="mailto:hgfriolo@gmail.com" className="flex text-xs md:text-sm gap-2">
                                <CiMail size={18} /> Email
                            </a>
                        </button>

                        <button className='bg-white border px-3 py-2 sm:px-2 sm:py-2 rounded-md hover:scale-105 transition duration-300 hidden md:flex'>
                            {/* LinkedIn */}
                            <a href='https://www.linkedin.com/in/honey-grace-friolo-1802b2289/' target='_blank' className="flex text-xs md:text-sm gap-2">
                                <CiLinkedin size={18} />
                                LinkedIn
                            </a>
                        </button>

                        <button className='bg-white border px-3 py-1 sm:px-2 sm:py-2 rounded-md hover:scale-105 transition duration-300'>
                            {/* Project */}
                            <a href='#projects' className="flex text-xs md:text-sm gap-2">
                                <CiBoxList size={18} />
                                Project
                            </a>
                        </button>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Profile