import Main_Navbar from '@/components/Main_Navbar'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const About_us = () => {
  return (
    <div>
        <Main_Navbar />

        <div className='flex items-center justify-center gap-4 px-10 py-2'>
            <div className='flex-1 items-center justify-center'>
                <h1 className='text-primary font-extrabold text-4xl'>Empowering People<br/> Through <span className='text-special'>Modern Learning</span></h1>
                <p className='text-secondary mt-2'>Learn Stack brings students and teachers together in one modern learning platform — making it easier to learn practical skills, share knowledge, and grow together.</p>

                <div className='mt-4 flex items-center justify-start gap-4'>
                    <button className='btn-primary px-4 py-2 rounded-full'>Learn More</button>
                    <button className='btn-secondary px-4 py-2 rounded-full'>Explore courses <ArrowRight/></button>
                </div>
            </div>

            <section className='bg-primary-soft'>
                <div className='flex-1 apple w-96 h-96 hidden lg:block grid grid-rows-3 gap-4'></div>
            </section>
        </div>
    </div>
  )
}

export default About_us