import React from 'react'
import { UsersRound , HandCoins , CircleCheck , Star, TrendingUp, TrendingDown , CodeXml, DatabaseX , Webhook} from 'lucide-react';
const Analytics = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-primary">Analytics</h1>
        <p className='text-secondary font-light '>Track your growth and performance across all courses.</p>
      </div>

      <div className="grid grid-cols-4 gap-2 py-3">

        {/* overview card components*/}

        <div className="apple rounded-2xl px-2 py-6">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-primary-soft p-2 rounded-full">
              <UsersRound className="text-special" size={30} />
            </div>
            <p className="text-secondary">Total Students</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary">24.5K</h1>
          </div>
          <div className="text-center">
            <p className="text-special">+2.5% <TrendingUp className="inline-block ml-1" size={16} /></p>
          </div>
        </div>

        <div className="apple rounded-2xl px-2 py-6">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-primary-soft p-2 rounded-full">
              <HandCoins className="text-special" size={30} />
            </div>
            <p className="text-secondary">Total Earnings</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary">$12.5K</h1>
          </div>
          <div className="text-center">
            <p className="text-special">+3.5% <TrendingUp className="inline-block ml-1" size={16} /></p>
          </div>
        </div>

        <div className="apple rounded-2xl px-2 py-6">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-primary-soft p-2 rounded-full">
              <CircleCheck className="text-special" size={30} />
            </div>
            <p className="text-secondary">Avg. Completion Rate</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary">85%</h1>
          </div>
          <div className="text-center">
            <p className="text-red-500">-1.5% <TrendingDown className="inline-block ml-1" size={16} /></p>
          </div>
        </div>

        <div className="apple rounded-2xl px-2 py-6">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-primary-soft p-2 rounded-full">
              <Star className="text-special" size={30} />
            </div>
            <p className="text-secondary">Avg. Rating</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary">4.5/<span className="text-primary text-lg">5</span></h1>
          </div>
          
        </div>

        {/*  */}
      </div>

      {/* card section */}
      <div></div>

      {/* Top perfoming course */}
      <div className="apple rounded-2xl px-2 py-6">
        <div className="flex items-center justify-between my-2">
          <h2 className="text-xl font-bold text-primary">Top Performing Course</h2>
          <p className="text-secondary text-special">Course Name</p>
        </div>

        {/* table section */}

        <div className="overflow-x-auto my-3">
          <table className="w-full text-left">
            <thead className="bg-primary-soft text-primary">
              <tr className="border-b border-primary/10 text-secondary">
                <th className="px-4 py-3 font-medium">COURSE NAME</th>
                <th className="px-4 py-3 font-medium">STUDENT</th>
                <th className="px-4 py-3 font-medium">REVENUE</th>
                <th className="px-4 py-3 font-medium">COMPLETION</th>
              </tr>
            </thead>
            <tbody className="text-primary">
              <tr className="border-b border-primary/10 transition-colors duration-200 hover:bg-gray-600/50">
                <td className="px-4 py-3 flex items-center justify-start gap-2"><div className="bg-primary-soft p-2 rounded-xs "><CodeXml/></div>Introduction to Web Development</td>
                <td className="px-4 py-3">1,240</td>
                <td className="px-4 py-3">$6,200</td>
                <td className="px-4 py-3">92%</td>
              </tr>
              <tr className="border-b border-primary/10 transition-colors duration-200 hover:bg-gray-600/50">
                <td className="px-4 py-3 flex items-center justify-start gap-2"><div className="bg-amber-500/30 p-2 rounded-xs "><DatabaseX className="text-amber-500"/></div>Advanced JavaScript</td>
                <td className="px-4 py-3">980</td>
                <td className="px-4 py-3">$4,900</td>
                <td className="px-4 py-3">87%</td>
              </tr>
              <tr className="border-b border-primary/10 transition-colors duration-200 hover:bg-gray-600/50">
                <td className="px-4 py-3 flex items-center justify-start gap-2"><div className="bg-red-500/30 p-2 rounded-xs "><Webhook className="text-red-500"/></div>React for Beginners</td>
                <td className="px-4 py-3">760</td>
                <td className="px-4 py-3">$3,800</td>
                <td className="px-4 py-3">81%</td>
              </tr>
              <tr className="transition-colors duration-200 hover:bg-gray-600/50">
                <td className="px-4 py-3 flex items-center justify-start gap-2"><div className="bg-primary-soft p-2 rounded-xs "><CodeXml/></div>UI/UX Design Fundamentals</td>
                <td className="px-4 py-3">540</td>
                <td className="px-4 py-3">$2,700</td>
                <td className="px-4 py-3">76%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics