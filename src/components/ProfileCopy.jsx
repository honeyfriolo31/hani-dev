import React from 'react';
import { CiLocationOn, CiMail, CiSaveDown2, CiLinkedin, CiBookmarkCheck, CiBoxList} from "react-icons/ci";
import profilepic from "../assets/images/honey-profile.jpg"

const Profile = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <section className="max-w-6xl mx-auto flex items-start gap-8 border-2 border-blue-500">

                {/* Profile Image */}
                {/* <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 border-2 border-blue-500">
                    <img
                        src={profilepic}
                        alt="Profile"
                        className="object-cover rounded-lg"
                    />
                </div> */}
                
                 <div className="w-40 h-40 border-2 border-blue-500">
                    <img
                        src={profilepic}
                        alt="Profile"
                        className="object-cover"
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex-col">

                    {/* Name */}
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg md:text-2xl font-bold truncate">
                            Honey Grace Friolo
                        </h1>

                        <span className="text-blue-500 font-medium"><CiBookmarkCheck size={25} /></span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 mt-1 gap-2 text-sm">
                        <CiLocationOn size={16} />
                        <span>Abu Dhabi, United Arab Emirates</span>
                    </div>

                    {/* Roles */}
                    <p className="text-gray-700 mt-3 text-base">
                        Front-end Developer / Backend Developer
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6" >

                        {/* Download CV Button */}
                        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            Download CV
                            <CiSaveDown2 size={18} />
                        </button>

                        {/* Email */}
                        <a href="mailto:hgfriolo@gmail.com" className="flex items-center gap-2 bg-white border px-4 py-2 rounded-md hover:scale-105 transition duration-300">
                            <CiMail size={18} />
                            Send Email
                        </a>

                        {/* LinkedIn */}
                        <a href='https://www.linkedin.com/in/honey-grace-friolo-1802b2289/' target='_blank' className="flex items-center gap-2 bg-white border px-4 py-2 rounded-md hover:scale-105 transition duration-300">
                            <CiLinkedin size={18} />
                            LinkedIn
                        </a>

                        {/* Project */}
                        <a href='#projects' className="flex items-center gap-2 bg-white border px-4 py-2 rounded-md hover:scale-105 transition duration-300">
                            <CiBoxList size={18} />
                            Project
                        </a>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile