import Main_Navbar from '@/components/Main_Navbar'
import { Search } from 'lucide-react'
import React from 'react'

const courses = () => {
  return (
    <div>
      <Main_Navbar/>

      <div className='flex items-center justify-center bg-green-soft'>
        <div className='text-center px-10 py-10'>
          <h1 className='text-3xl font-bold text-primary my-3'>Explore All Courses</h1>
          <p className='text-secondary my-2'>Master new skills with deep-dive courses designed for professionals. Build your stack today.</p>

          <div className='apple w-full h-full rounded-full px-6 py-2 flex items-center justify-between '>
            <div className='flex items-center justify-center gap-3'>
              <Search/>
              <input type="text" className='w-full focus:outline-none rounded-full py-2 px-4' placeholder='Search courses, topics, skills...' />
            </div>
            <button className='btn-primary rounded-full px-4 py-2 cursor-pointer'>Search</button>
          </div>

          <div  className='flex items-center justify-center gap-3 pt-3'>
            <h3 className='text-special font-medium'>Popular Topics:</h3>
            <p className='text-secondary font-light italic'>Web Development, Data Science, Machine Learning</p>
          </div>
        </div>
      </div>

      <div className='bg-primary-soft w-screen h-full px-10 py-4 flex items-center justify-start gap-2 overflow-x-auto'>
        <div className='px-6 py-1 rounded-full cursor-pointer text-primary font-medium bg-primary-soft'>
          All
        </div>

        <div className='px-6 py-1 rounded-full cursor-pointer text-primary font-medium apple'>
          Web Development
        </div>
        <div className='px-6 py-1 rounded-full cursor-pointer text-primary font-medium apple'>
          Data Science
        </div>
        <div className='px-6 py-1 rounded-full cursor-pointer text-primary font-medium apple'>
          Machine Learning
        </div>
      </div>
    </div>
  )
}

export default courses