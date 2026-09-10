'use client'

import Toggle from "@/components/Toggle-Button";
import Link from "next/link";
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Show } from "@clerk/react";


const Main_Navbar = () => {
  return (
    <div className='w-full shrink-0 flex items-center justify-between px-10 py-2'>
        <div className=' flex items-center justify-center gap-4'>
            <Image src={"/images/Logo.png"} alt="Logo" width={50} height={50}/>
            <h2 className="text-primary text-2xl font-bold">Learn Stack</h2>
        </div>

        <div>
            <ul className='flex items-center justify-center gap-8 text-lg font-semibold'>
                <li >
                    <Link href="/" className="text-secondary"  >Home</Link>
                </li>
                <li className="text-secondary">
                    <Link href="/courses" className="text-secondary"  >Courses</Link>
                </li>
                <li className="text-secondary">
                    <Link href="/about-us" className="text-secondary"  >About us</Link>
                </li>
                <li className="text-secondary">
                    <Link href="/community" className="text-secondary"  >Community</Link>
                </li>
            </ul>
        </div>

        <div className="flex items-center justify-center gap-2">
            <Toggle />
            <Show when={"signed-out"}>
                <Link href="/sign-in"><button className='btn-secondary px-4 py-2 rounded-full cursor-pointer' >Login</button></Link>

                <Link href="/sign-up"><button className='btn-primary px-4 py-2 rounded-full cursor-pointer' >Sign Up</button></Link>
                
            </Show >
            <Show when={"signed-in"}>
                <UserButton />
            </Show>
        </div>

    </div>
  )
}

export default Main_Navbar