import React from 'react'
import { Files, CircleCheck, FilePenLine, Eye, Pencil, Trash2 } from 'lucide-react';
import { sample_courses } from '@/constant';
import Image from 'next/image';


const my_courses = () => {
  return (
    <div>
      <div >
        <h1 className="text-2xl font-bold text-primary">My Courses</h1>
      </div>

      {/* overview section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="apple rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-primary">08</h1>
            <p className="text-secondary text-sm">Total Courses</p>
          </div>
          <div className="flex items-center justify-center bg-primary-soft p-3 rounded-full">
            <Files size={30} className="text-special" />
          </div>
        </div>
        <div className="apple rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-primary">06</h1>
            <p className="text-secondary text-sm">Published</p>
          </div>
          <div className="flex items-center justify-center bg-gray-800/50 p-3 rounded-full">
            <CircleCheck size={30} className="text-secondary" />
          </div>
        </div>
        <div className="apple rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-primary">02</h1>
            <p className="text-secondary text-sm">Unpublished / Drafts</p>
          </div>
          <div className="flex items-center justify-center bg-amber-800/30 p-3 rounded-full">
            <FilePenLine size={30} className="text-amber-500" />
          </div>
        </div>
      </div>

      {/* table */}
      <div className="apple mt-6 overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-190 text-left text-sm">
            <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-secondary">
              <tr className="bg-primary-soft">
                <th scope="col" className="px-6 py-4 font-medium">Course</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium">Students</th>
                <th scope="col" className="px-6 py-4 font-medium">Rating</th>
                <th scope="col" className="px-6 py-4 font-medium">Revenue</th>
                <th scope="col" className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-primary">
              {sample_courses.map((course) => (
                <tr key={course.title} className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-5 font-medium flex items-center justify-start gap-2"><Image src={course.thumbnail} alt={course.title} width={60} height={35}  />{course.title}</td>
                  <td className="px-6 py-5">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${course.status === 'Published' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'}`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-secondary">{course.students}</td>
                  <td className="px-6 py-5 text-secondary">{course.rating}</td>
                  <td className="px-6 py-5 text-secondary">{course.price}</td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button type="button" aria-label={`View ${course.title}`} title="View course" className="rounded-lg p-2 text-secondary transition-colors hover:bg-white/10 hover:text-primary">
                        <Eye size={16} />
                      </button>
                      <button type="button" aria-label={`Edit ${course.title}`} title="Edit course" className="rounded-lg p-2 text-secondary transition-colors hover:bg-white/10 hover:text-primary">
                        <Pencil size={16} />
                      </button>
                      <button type="button" aria-label={`Delete ${course.title}`} title="Delete course" className="rounded-lg p-2 text-secondary transition-colors hover:bg-red-500/10 hover:text-red-400">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default my_courses