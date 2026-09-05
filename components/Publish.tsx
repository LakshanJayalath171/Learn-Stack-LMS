'use client';

import React, { useState } from 'react'
import { Earth,Globe,Link,Clock,SlidersHorizontal, Rocket,CalendarDays } from 'lucide-react';
import {Switch} from '@/components/ui/switch';
import Image from 'next/image';

// importing date picker



import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@base-ui/react';
function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}
const Publish = () => {

  const [visibility, setVisibility] = React.useState('public');
  const [date, setDate] = useState<Date | undefined>(undefined)
  return (
    <div className="flex gap-3 bg-black/50 w-full h-full px-5 py-6 rounded-2xl">
      {/* details */}
      <div className="flex-3">
        <div className="">
          <h1 className="text-2xl font-bold text-primary">
            Publish & Pre-Flight Verification
          </h1>
          <p className="font-light text-secondary">
            Review automated asset checks, choose audience distribution, and
            configure classroom controls before going live.
          </p>
        </div>

        {/* visibility section */}

        <div>
          <h2 className="text-primary font-bold flex gap-2 mt-5">
            <Earth className="text-special" /> Publishing Visibility &
            Distribution
          </h2>

          <div className="grid grid-cols-3 gap-3 mt-2">
            {/* public */}
            <div
              className={`cursor-pointer rounded-lg px-4 py-3 ${visibility === "public" ? "bg-primary-soft" : "apple"}`}
              onClick={() => setVisibility("public")}
            >
              <div className="flex items-center justify-start">
                <div className="apple p-2 rounded-lg">
                  <Globe
                    className={`${visibility === "public" ? "text-special" : "text-secondary"}`}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-semibold text-primary text-lg">
                  Public Marketplace
                </h1>
                <p className="text-secondary font-light text-sm mt-2 ">
                  Listed in the Learn Stack discovery catalog, search engines,
                  and recommendations.
                </p>
              </div>
            </div>

            {/* unlisted */}
            <div
              className={`cursor-pointer rounded-lg px-4 py-3 ${visibility === "unlisted" ? "bg-primary-soft" : "apple"}`}
              onClick={() => setVisibility("unlisted")}
            >
              <div className="flex items-center justify-start">
                <div className="apple rounded-lg p-2">
                  <Link
                    className={`${visibility === "unlisted" ? "text-special" : "text-secondary"}`}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-semibold text-primary text-lg">Unlisted</h1>
                <p className="text-secondary font-light text-sm mt-2">
                  Accessible only via a direct link, not listed in the Learn
                  Stack discovery catalog.
                </p>
              </div>
            </div>

            {/* private */}
            <div
              className={`cursor-pointer rounded-lg px-4 py-3 ${visibility === "private" ? "bg-primary-soft" : "apple"}`}
              onClick={() => setVisibility("private")}
            >
              <div className="flex items-center justify-start">
                <div className="apple p-2 rounded-lg">
                  <Clock
                    className={`${visibility === "private" ? "text-special" : "text-secondary"}`}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-semibold text-primary text-lg">Private</h1>
                <p className="text-secondary font-light text-sm mt-2">
                  Accessible only to you and your team, not listed in the Learn
                  Stack discovery catalog.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* classroom settings */}

        <div className="mt-5">
          <h1 className="font-semibold text-primary text-lg flex items-center gap-2">
            <SlidersHorizontal className="text-special" />
            Access & Classroom Controls
          </h1>

          <div>
            {/* setting 01 */}
            <div className="apple px-3 py-2 flex items-center justify-between rounded-lg mt-1">
              <div>
                <h1 className=" font-semibold text-primary flex items-center gap-2">
                  Enrollment Cap / Cohort Limits
                  <span className="text-secondary bg-amber-500/40 px-3 py-1 rounded-lg text-xs">
                    250 Seats Active
                  </span>
                </h1>
                <p className="text-secondary font-light text-xs">
                  Restrict active cohort size to guarantee personalized mentor
                  review throughput.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Switch />
                </div>
              </div>
            </div>

            {/* setting 02 */}

            <div className="apple px-3 py-2 flex items-center justify-between rounded-lg mt-1">
              <div>
                <h1 className=" font-semibold text-primary flex items-center gap-2">
                  Cryptographically Verified Certificate
                  <span className="text-secondary bg-primary-soft px-3 py-1 rounded-lg text-xs">
                    On-Chain Verification
                  </span>
                </h1>
                <p className="text-secondary font-light text-xs">
                  Automatically mint cryptographic credentials upon completion
                  of final Capstone lab.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Switch />
                </div>
              </div>
            </div>

            {/* setting 03 */}
            <div className="apple px-3 py-2 flex items-center justify-between rounded-lg mt-1">
              <div>
                <h1 className=" font-semibold text-primary flex items-center gap-2">
                  Live Q&A Forum & Peer Code Reviews
                  <span className="text-secondary bg-primary-soft px-3 py-1 rounded-lg text-xs">
                    Community Enabled
                  </span>
                </h1>
                <p className="text-secondary font-light text-xs">
                  Allow enrolled students to discuss lessons, share lab links,
                  and submit pull requests.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Switch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* preview */}
      <div className="flex-1 apple rounded-2xl px-3 py-5">
        {/* course image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/images/course02.png"
            alt="Preview"
            width={500}
            height={300}
          />
        </div>

        {/* course details */}
        <div>
          <h1 className="font-bold text-primary text-lg mt-3">
            Flutter Fundamentals
          </h1>
          <p className="text-secondary font-light text-sm ">
            Dive deep into Flutter...
          </p>
        </div>
        {/* instructor details */}
        <div className="flex items-center justify-start gap-3 mt-3">
          <div className="rounded-full overflow-hidden w-8 h-8">
            <Image
              src="/images/profiles3.jpg"
              alt="Instructor"
              width={100}
              height={100}
            />
          </div>

          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-secondary text-xs">Instructor</p>
          </div>
        </div>

        {/* publish buttons */}
        <div className="my-2">
          <button className="btn-primary w-full flex gap-1 my-1 cursor-pointer">
            <Rocket className="w-4 h-4" /> Publish Course
          </button>

          <div className="w-full ">
            <div className="flex items-center justify-between gap-2">
              <Popover >
                <PopoverTrigger
                  render={
                    <Button
                      data-empty={!date}
                      className="w-full h-full flex items-center justify-between data-[empty=true]:text-muted-foreground px-2 py-1 rounded-lg border-2 border-[#2ED8CF] text-xs font-medium"
                    >
                      {date ? formatDate(date) : <span className='text-xs font-medium'>Schedule Launch Date</span>}
                      <CalendarDays data-icon="inline-end" className="cursor-pointer" size={25} />
                    </Button>
                  }
                />
                <PopoverContent className="w-auto p-0 bg-black/90" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    defaultMonth={date}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publish