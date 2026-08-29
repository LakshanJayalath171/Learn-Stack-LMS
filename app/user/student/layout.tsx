import Main_Navbar from '@/components/Main_Navbar'
import Student_sidebar from '@/components/Student_sidebar'
import  { ReactNode } from 'react'

const StudentLayout = ({ children }:{ children:ReactNode }) => {
  return (
    <div className="relative">
      <Main_Navbar/>

      <div className="flex">
        <div className="flex-1">
          <Student_sidebar/>
        </div>
        <section className="flex min-h-screen flex-4 flex-col px-6 py-2">
            <div className="w-full">
                {children}
            </div>
        </section>
      </div>
    </div>
  )
}

export default StudentLayout