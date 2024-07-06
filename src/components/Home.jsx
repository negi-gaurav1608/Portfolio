import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div id='Home'>
            <img src="https://static.vecteezy.com/system/resources/previews/000/664/710/original/vector-abstract-technology-background-hi-tech-communication-digital-background.jpg" alt="" className='w-full h-screen object-cover object-left scale-x-[-1]'/>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[550px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4-xl font-bold text-gray-800'>
                        Hello! I am Gaurav Negi
                    </h1>
                    <h2 className='flex sm:text-4xl text-3xl pt-4 text-gray-800'>
                        I am a

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                '3rd year CSE student',
                                1000,
                                'Frontend Developer',
                                1000,
                                'Tech Enthusiast',
                                1000,
                                'Coder',
                                1000
                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' , paddingLeft:'5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[300px] w-full'>
                        <FaInstagram size={40} className='cursor-pointer'/>
                        <FaLinkedinIn size={40} className='cursor-pointer'/>
                        <FaTwitter size={40} className='cursor-pointer'/>
                        <GoMail size={40} className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
