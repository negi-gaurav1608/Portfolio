import React from 'react'
import bot from '../assets/bot.jpeg'
import currency from '../assets/currency.jpg'
import todo from '../assets/todo.png'
import Projectitem from './Projectitem'


function Projects() {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4-xl font-bold text-center text-[#001b5e]'>Mini Projects</h1>
            <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae dolor in eligendi totam ea facilis natus eos officia dignissimos libero, quia iste minima expedita rem amet illum quisquam molestiae eius debitis. Architecto ab repellat alias autem natus accusamus tenetur illo harum, unde reprehenderit sunt repellendus sequi, et cumque suscipit!</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <Projectitem img={currency} title='Currency Convertor'/>
                <Projectitem img={todo} title='Todo List'/>
                <Projectitem img={bot} title='Discord Bot'/>
            </div>
        </div>
    )
}

export default Projects
