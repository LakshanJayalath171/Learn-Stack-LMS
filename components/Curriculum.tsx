"use client"

import { useState } from 'react'

// importing icons from lucide-react
import { Network, Plus , GripVertical , CirclePlus , Pencil , Trash2 , ChevronDown , ChevronUp,Video , FileText, Pen} from 'lucide-react'

import { Chapter } from '@/types/curriculum'

const Curriculum = () => {
  
  const [chapters, setChapters] = useState<Chapter[]>([]);

  return (
    <div className="bg-black/50 px-6 py-3 rounded-2xl">
      <div>
        <h1 className="text-2xl font-bold text-primary">Curriculum</h1>
        <p className="text-secondary">
          Build your course structure by organizing chapters, lessons, videos,
          notes and resources.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 mt-3 w-full h-full px-4 py-3 apple rounded-2xl">
        <div className="flex gap-2">
          <Network className="text-special" size={20} />
          <h1 className="text-lg font-semibold text-primary">
            Curriculum Structure
          </h1>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn-primary px-4 py-3 cursor-pointer"
          >
            <Plus className="" size={20} />
            Add Chapter
          </button>
        </div>
      </div>

      <div>
        <div className="apple rounded-2xl px-4 py-2 mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <GripVertical className="text-special" size={20} />
              <div className="bg-primary-soft rounded-2xl px-3 py-1 text-xs">
                Chapter 1
              </div>
              <p className="text-primary font-semibold text-lg">React Hooks</p>
            </div>

            <div className="flex items-center justify-end gap-3 ">
              <CirclePlus
                className="text-primary cursor-pointer hover:text-special"
                size={20}
              />
              <Pencil
                className="text-secondary cursor-pointer hover:text-special"
                size={20}
              />
              <Trash2
                className="text-red-500 cursor-pointer hover:text-special"
                size={20}
              />
              <div className="p-2 rounded-lg apple cursor-pointer hover:bg-primary-soft">
                <ChevronDown className="text-special" size={20} />
              </div>
            </div>
          </div>

          <div className="px-4 rounded-2xl border border-[#2ED8CF] mt-3 py-4 ml-6 flex items-ceneter justify-between gap-4">
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center justify-start gap-2 mb-2">
                <GripVertical className="text-special" size={20} />
                <div className="p-2 bg-primary-soft rounded-lg">
                  <Video className="text-special" size={25} />
                </div>
                <div className="p-2 rounded-lg bg-gray-500/40">01</div>
              </div>
              <div>
                <p className="text-primary font-semibold ">
                  01. useState Hook — State Management in Functional Components
                </p>

                <div className="flex items-center justify-start gap-2 mt-1">
                  <div className='text-special px-4 py-1 rounded-2xl text-xs bg-primary-soft'>Preview Available</div>
                </div>

                <div className="flex items-center justify-start gap-4 mt-2">
                  <p className='text-secondary font-light text-xs'> 14:20 min</p>
                  <p className='text-secondary font-light text-xs'>• MP4 1080p</p>
                  <p className='text-secondary font-light text-xs'>• 2 Resources</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <Pencil className="text-secondary cursor-pointer" size={20} />
              <Trash2 className="text-red-500 cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum