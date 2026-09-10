"use client"

import React from "react"
import Toggle from "@/components/Toggle-Button"
import Image from "next/image"
import { CircleCheck, GraduationCap , Presentation,MoveRight,LockKeyholeOpen} from 'lucide-react';
import { SignUp } from "@clerk/nextjs";

const sign_up = () => {

    const [selectedRole, setSelectedRole] = React.useState<string | null>(null);
    const [signIn,setSignIn] = React.useState<boolean>(false);

  return (
    <div className="relative flex min-h-screen w-full max-w-screen flex-col">
      {/* small nav bar */}
      <div className="flex items-center justify-between px-4 py-2 ">
        <div className="flex items-center gap-2">
          <Image src="/images/Logo.png" alt="Logo" width={50} height={35} />
          <h1 className="text-lg font-bold text-primary">Learn Stack</h1>
        </div>
        <div className="flex items-center gap-2">
          <Toggle />
          <div className="px-4 py-1 rounded-2xl text-xs flex items-center gap-2 bg-gray-400/20">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>Step 1 of
            2: Role Selection
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="w-full h-full flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-5xl font-bold ">Welcome to LearnStack</h1>
          <h3 className="text-lg font-medium">
            How do you want to use LearnStack?
          </h3>
          <p className="text-xs font-light text-secondary">
            Choose your account type to get started.
            <br /> You will continue with secure authentication after selecting
            your role.
          </p>
        </div>
      </div>

      {/* selector */}

      <div className={`grid grid-cols-2 gap-3 px-6 py-4 ${signIn ? "hidden" : ""}`}>
        {/* student section */}
        <div className="flex items-center justify-end">
          <div
            className={`rounded-2xl px-4 pt-10 pb-5 cursor-pointer ${selectedRole === "student" ? "bg-primary-soft border-2 border-primary " : "apple"}`}
            onClick={() => setSelectedRole("student")}
          >
            {/* icon and label */}
            <div className="flex items-center justify-between w-full my-3">
              <div className="apple p-2 rounded-lg">
                <GraduationCap size={30} className="text-primary" />
              </div>
              <div>
                <div
                  className={`px-3 py-1 rounded-lg bg-primary-soft text-special`}
                >
                  Learner Account
                </div>
              </div>
            </div>

            {/* heading */}
            <div className="my-3">
              <h1 className="text-2xl font-bold text-primary">Student</h1>
              <p className="text-sm text-secondary">
                Discover courses, learn at your own pace, and track
                <br />
                your progress through interactive labs.
              </p>
            </div>

            {/* features */}
            <hr className="text-gray-500/30 my-2" />
            <div className="my-3">
              <div className="flex items-center justify-start gap-2">
                <CircleCheck size={20} className="text-special" />
                <p className="text-sm text-secondary">
                  Browse and enroll in certified courses
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <CircleCheck size={20} className="text-special" />
                <p className="text-sm text-secondary">
                  Track real-time learning progress & notes
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <CircleCheck size={20} className="text-special" />
                <p className="text-sm text-secondary">
                  Earn cryptographically verified certificates
                </p>
              </div>
            </div>

            {/* button */}
            <div className="flex items-center justify-center my-4">
              <button 
               className="w-full h-full btn-primary flex items-center gap-3 cursor-pointer">
                Sign Up as Student
                <MoveRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* teachers section */}
        <div className="flex items-center justify-start">
          <div
            className={`rounded-2xl px-4 pt-10 pb-5 cursor-pointer ${selectedRole === "teacher" ? "bg-primary-soft border-2 border-primary " : "apple"}`}
            onClick={() => setSelectedRole("teacher")}
          >
            {/* icon and label */}
            <div className="flex items-center justify-between w-full my-3">
              <div className="apple p-2 rounded-lg">
                <Presentation size={30} className="text-primary" />
              </div>
              <div>
                <div
                  className={`px-3 py-1 rounded-lg bg-primary-soft text-special`}
                >
                  Instructor/creator
                </div>
              </div>
            </div>

            {/* heading */}
            <div className="my-3">
              <h1 className="text-2xl font-bold text-primary">Teacher</h1>
              <p className="text-sm text-secondary">
                Create courses, share your knowledge, and reach <br/>students across the globe with full monetization.
              </p>
            </div>

            {/* features */}
            <hr className="text-gray-500/30 my-2" />
            <div className="my-3">
              <div className="flex items-center justify-start gap-2">
                <CircleCheck size={20} className="text-special" />
                <p className="text-sm text-secondary">
                  Create and manage dynamic course curriculums
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <CircleCheck size={20} className="text-special" />
                <p className="text-sm text-secondary">
                  Publish video lectures, code sandboxes & notes
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <CircleCheck size={20} className="text-special" />
                <p className="text-sm text-secondary">
                  Sell courses, view analytics & grow revenue
                </p>
              </div>
            </div>

            {/* button */}
            <div className="flex items-center justify-center my-4">
              <button
               className="w-full h-full btn-primary flex items-center gap-3 cursor-pointer">
                Sign Up as Student
                <MoveRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* main button */}

      <div  className={`flex items-center justify-center my-4 ${signIn ? "hidden" : ""}`}>
        {selectedRole && (<button onClick={()=>setSignIn(true)} className="btn-primary flex items-center gap-3 cursor-pointer px-4 py-3">
        Sign Up as {selectedRole}
        <MoveRight size={20} className="ml-2" />
      </button>)}
      </div>

      <div className={`flex items-center justify-center my-4 ${signIn ? "" : "hidden"}`}>
        <SignUp unsafeMetadata={{role:selectedRole}}/>
      </div>

      {/* security info */}

      <div className="flex items-center justify-center gap-2 text-sm text-secondary my-4">
        <LockKeyholeOpen size={20} className="text-special" />
        <p className="text-sm text-secondary">
          Secured with Clerk authentication & encrypted token exchange
        </p>
      </div>

      {/* footer */}

      <div className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-2 text-sm text-secondary pb-3">
        <p className="text-xs font-light">Already have an account? <span className="text-special font-bold cursor-pointer hover:underline">Sign in</span></p>
      </div>
    </div>
  );
}

export default sign_up