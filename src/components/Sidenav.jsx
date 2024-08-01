import React, { useState } from 'react';
import { AiOutlineFile, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineUser, } from 'react-icons/ai';
import { FaLayerGroup } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import gaurav_resume from '../assets/gaurav_resume.pdf';

function Sidenav() {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        //console.log("state change");
        setNav(!nav);
    }
    return (
        <div>
            <AiOutlineMenu className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer' onClick={handleNav}/>
            {
                nav?(
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href="#Home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20}/>
                            <span className='pl-4'>
                                Home
                            </span>
                        </a>

                        <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineUser size={20}/>
                            <span className='pl-4'>
                                About
                            </span>
                        </a>

                        <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaLayerGroup size={20}/>
                            <span className='pl-4'>
                                Work
                            </span>
                        </a>

                        <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20}/>
                            <span className='pl-4'>
                                Projects
                            </span>
                        </a>

                        <a onClick={handleNav} href={gaurav_resume} target='_blank' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineFile size={20}/>
                            <span className='pl-4'>
                                Resume
                            </span>
                        </a>

                        <a onClick={handleNav} href="#Contacts" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20}/>
                            <span className='pl-4'>
                                Contact
                            </span>
                        </a>
                    </div>

                )
                : (
                    <div className='md:block hidden fixed top-[10%] z-10'>
                        <div className='flex flex-col'>
                        <a href="#Home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='relative inline-block'>Home</span>
                        </a>

                        <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:110 ease-in duration-200'>
                            <AiOutlineUser size={20} />
                            <span className='relative inline-block'>About</span>
                        </a>

                        <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:110 ease-in duration-200'>
                            <FaLayerGroup size={20}/>
                            <span className='relative inline-block'>Experience</span>
                        </a>

                        <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:110 ease-in duration-200'>
                            <GrProjects size={20}/>
                            <span className='relative inline-block'>Projects</span>
                        </a>

                        <a  href={gaurav_resume} target='_blank' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:110 ease-in duration-200'>
                            <AiOutlineFile size={20}/>
                            <span className='relative inline-block'>Resume</span>
                        </a>

                        <a href="#Contacts" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:110 ease-in duration-200'>
                            <AiOutlineMail size={20}/>
                            <span className='relative inline-block'>Contact</span>
                        </a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Sidenav
