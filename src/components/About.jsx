import React from 'react'

const About = () => {
    return (
        <div id="about">
            <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
                <div>
                <h1 className='text-4xl font-bold text-center text-red-600 pb-2'>
                    About Me
                </h1>
                </div>
                <p className='pt-4 text-xl text-gray-900'>
                As a dedicated frontend developer and C++ coder, I have a strong foundation in both web development and algorithmic problem-solving. I've created dynamic and user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React, featuring an intuitive user interface and seamless navigation.
                </p>
                <p className='py-6 text-xl text-gray-900'>
                In addition to my frontend expertise, I have solved over 200 questions on LeetCode and 100 questions on GeeksforGeeks, showcasing my proficiency in data structures and algorithms. My programming skills extend to languages like Java and Python, which I have used for various projects and competitive programming.
                </p>
                <p className='pb-4 text-xl text-gray-900'>
                These experiences highlight my versatility and commitment to continuous learning. I prioritize clean code, accessibility, and responsiveness in all my projects, ensuring an optimal user experience across all devices. Each project and coding challenge has enhanced my problem-solving abilities and attention to detail.
                </p>
            </div>

            {/*add technologies here */}
            {/* <div className=''>

            </div> */}
            
        </div>
    )
}

export default About
