import React from 'react'
import Workitem from './Workitem'

const data=[
    {
        year:2023,
        title:'C++ intern',
        duration:'1 month',
        details:'During the internship I worked on 3 mini projects namely Guess the Number Game, To-do list using C++, and Tic-Tac-Toe Game.Through this internship I get better understanding of topics like conditionals ans loops in C++ and File Handling in C++'
    },

    {
        year:2024,
        title:'Web development Certification Course intern',
        duration:'2 months',
        details:'During this I learned about many technologies like HTML5, CSS, Bootstrap, Javascript, pHp, SQL, and React Js.To the end of this certificaton course I completed my project on PG Lite website using technology like HTML5, CSS, Bootstrap, JS, SQL, and, pHp.This website aims to help student to look for PGs in different cities and facilities provided by them and reviews about them.'
    },
    
    {
        year:'2023-present',
        title:'Data Structure and Algorithm',
        duration:'till present',
        details:'Solved numerous problems on LeetCode and GeeksforGeeks, demonstrating strong problem-solving skills and a deep understanding of algorithms and data structures.Developed proficiency in tackling complex coding challenges and optimizing solutions for efficiency.'
    }
    
]
function Work() {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#FFFFF0]'>
            <h1 className='text-4xl font-bold text-center text-red-600'>
                Experience
            </h1>
            {
                data.map((item,idx)=>(
                    <Workitem 
                        key={idx} 
                        year={item.year} 
                        title={item.title} 
                        duration={item.duration} 
                        details={item.details}
                    />
            
                ))
            }
            
                
        </div>
    )
}

export default Work
