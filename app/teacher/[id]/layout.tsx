import Main_Navbar from '@/components/Main_Navbar'
import Teacher_sidebar from '@/components/Teacher_sidebar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative'>
      <Main_Navbar/>
      <div className='flex'>
        <div className='flex-1'>
          <Teacher_sidebar/>
        </div>
        <section className="min-h-screen flex-4 px-6 py-2">
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>
    </div>
  )
}

export default layout