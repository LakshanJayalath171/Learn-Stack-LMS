import Main_Navbar from '@/components/Main_Navbar'
import Teacher_sidebar from '@/components/Teacher_sidebar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative flex h-screen max-h-screen w-screen max-w-screen flex-col overflow-hidden'>
      <div className='shrink-0'>
        <Main_Navbar/>
      </div>
      <div className='flex min-h-0 min-w-0 flex-1'>
        <div className='h-full shrink-0'>
          <Teacher_sidebar/>
        </div>
        <section className="min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-6 py-2">
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>
    </div>
  )
}

export default layout