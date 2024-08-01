import React from 'react'
import audio_logo from '../assets/audio_logo.png'
import cafe from '../assets/cafe.png'
import currency from '../assets/currency.png'
import todo from '../assets/todo.png'
import Projectitem from './Projectitem'


function Projects() {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center pt-8 text-xl'>As a passionate frontend developer, I've dedicated my time to creating dynamic and user-friendly web interfaces. My projects span various domains and showcase my skills in HTML, CSS, JavaScript, and modern frameworks like ReactJs.</p>
            <p className='text-center py-2 text-xl'>
                One of my notable projects is a responsive website designed with Tailwind CSS, featuring an intuitive user interface and seamless navigation.
            </p>
            
            <p className='text-center pb-10 text-xl'>
                These projects highlight my ability to translate design concepts into functional, aesthetically pleasing web pages. I prioritize clean code, accessibility, and responsiveness, ensuring an optimal user experience across all devices. Each project has provided valuable learning experiences and has enhanced my problem-solving skills and attention to detail.
            </p>
            
            <div className='grid sm:grid-cols-2 gap-12'>
                <Projectitem img={cafe} title="Coffee-Cafe" link="https://coffee-cafe-jet.vercel.app" git="https://github.com/negi-gaurav1608/Coffee-Cafe"/>
                
                <Projectitem img={audio_logo} title="Audio Player" link="hhttps://audio-player-vert-three.vercel.app" git="https://github.com/negi-gaurav1608/Audio-Player"/>
                

                <Projectitem img={currency} title='Currency Convertor' link="https://currency-convertor-indol.vercel.app/" git="https://github.com/negi-gaurav1608/Currency_convertor"/>
                
                <Projectitem img={todo} title='Todo List' link="https://todo-mu-ebon.vercel.app/" git="https://github.com/negi-gaurav1608/todo"/>
                
                
                
            </div>
        </div>
    )
}

export default Projects
