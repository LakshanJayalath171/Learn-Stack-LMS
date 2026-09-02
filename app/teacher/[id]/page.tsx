import React from 'react'
import { Users , FileText, Star , BadgeDollarSign, CircleCheck} from 'lucide-react';
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-primary font-bold text-2xl">
          Welcome back, Alex 👋
        </h1>
        <p className="text-secondary">
          Here's what's happening with your courses today.
        </p>
      </div>

      {/* overview details card section */}
      <div className="grid grid-cols-4 gap-2 mt-6">
        {/* card  01 */}
        <div className="apple rounded-2xl px-3 py-5">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center bg-primary-soft p-3 rounded-full">
              <Users size={30} className="text-special" />
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-secondary font-light">Total Students</p>
            <h1 className="text-2xl font-bold text-primary">120</h1>
          </div>
        </div>

        {/* card  02 */}
        <div className="apple rounded-2xl px-3 py-5">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center bg-gray-800/50 p-3 rounded-full">
              <FileText size={30} className="text-gray-500" />
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-secondary font-light">Published Courses</p>
            <h1 className="text-2xl font-bold text-primary">8</h1>
          </div>
        </div>

        {/* card  03 */}
        <div className="apple rounded-2xl px-3 py-5">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center bg-amber-500/20 p-3 rounded-full">
              <Star size={30} className="text-amber-500" />
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-secondary font-light">Average Course Rating</p>
            <h1 className="text-2xl font-bold text-primary">4.5</h1>
          </div>
        </div>

        {/* card  04 */}
        <div className="apple rounded-2xl px-3 py-5">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center bg-primary-soft p-3 rounded-full">
              <BadgeDollarSign size={30} className="text-special" />
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-secondary font-light">Total Earnings</p>
            <h1 className="text-2xl font-bold text-primary">12.840 $</h1>
          </div>
        </div>
      </div>

      {/* area chart */}
      <div className="w-full h-full"></div>

      {/* details section*/}

      <div className="grid grid-cols-2  gap-2 mt-4 w-full h-full">
        {/* left div */}
        <div className=" apple rounded-2xl py-3 px-4 w-full h-full">
          <h1 className="text-lg font-bold text-primary">
            Complete Your Profile
          </h1>
          <div className="mt-2">
            <Progress value={56} className="w-full max-w-sm">
              <ProgressLabel>Progress</ProgressLabel>
              <ProgressValue />
            </Progress>
          </div>
          <div className="py-2 flex flex-col gap-1">
            <p className="text-secondary font-medium flex items-center justify-start gap-2 line-through">
              <CircleCheck className="text-special" size={20} />
              Upload profile picture
            </p>
            <p className="text-secondary font-medium flex items-center justify-start gap-2 line-through">
              <CircleCheck className="text-special" size={20} />
              Add professional bio
            </p>
            <p className="text-secondary font-medium flex items-center justify-start gap-2 line-through">
              <CircleCheck className="text-secondary" size={20}/>
              Link social accounts
            </p>
          </div>
        </div>
        {/* right div */}
        <div className=" apple rounded-2xl py-3 px-4 w-full h-full">
          <div className="flex items-center justify-between">
            <h1 className='text-primary font-semibold'>Recent Activity</h1>
            <p className="text-special font-medium cursor-pointer">View All</p>
          </div>

          <div className='bg-black/50 rounded-2xl px-4 py-2 mt-2'>
            <p className="text-secondary text-xs">Just now</p>
            <p className="text-white">You uploaded a new course.</p>
            <h1 className="text-special font-light">Flutter Full Course</h1>
          </div>

          <div className='bg-black/50 rounded-2xl px-4 py-2 mt-2'>
            <p className="text-secondary text-xs">2 hours ago</p>
            <p className="text-white">New student enrolled in your course.</p>
            <h1 className="text-special font-light">Data Structures & Algorithms</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page