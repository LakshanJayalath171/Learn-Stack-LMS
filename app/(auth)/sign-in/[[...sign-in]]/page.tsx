'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'
import { SquareChevronLeft } from 'lucide-react';
const sign_in_page = () => {
  return (
    <div>
        <div className='flex items-center justify-start gap-2 px-10 py-4 cursor-pointer' onClick={() => window.history.back()}>
            <SquareChevronLeft />
            <span>Back to Home</span>
        </div>
        <div className='w-screen h-screen flex items-center justify-center'>
            <SignIn/>
        </div>
        
    </div>
  )
}

export default sign_in_page