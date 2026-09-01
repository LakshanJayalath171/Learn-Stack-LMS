import { Trophy , Medal ,Flame,Star,Footprints,GraduationCap,CircleStar,CalendarSync,FileQuestionMark, BookOpenText, Users, CircleArrowRight} from 'lucide-react';
import Image from 'next/image';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"


const archivements = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-primary">Archivements</h1>
        <p className="text-secondary font-semibold">
          Celebrate your progress and keep reaching new learning milestones.
        </p>
      </div>

      {/* overview  */}
      <div className="grid grid-cols-4 gap-2">
        <div className="flex items-center justify-center gap-2 px-3 py-6 apple mt-2 rounded-2xl">
          <div className="flex-1 flex items-center justify-center  rounded-full bg-primary-soft p-2">
            <Trophy className="text-special" />
          </div>
          <div className="flex-2 text-center">
            <p className="text-secondary font-light">Archivement Unlocked</p>
            <h1 className="text-primary font-bold text-2xl text-special">12</h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 px-3 py-6 apple mt-2 rounded-2xl">
          <div className="flex-1 flex items-center justify-center  rounded-full bg-amber-400/20 p-2">
            <Star className="text-amber-500" />
          </div>
          <div className="flex-2 text-center">
            <p className="text-secondary font-light">Archivement Points</p>
            <h1 className="text-primary font-bold text-2xl text-special">
              840 XP
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 px-3 py-6 apple mt-2 rounded-2xl">
          <div className="flex-1 flex items-center justify-center  rounded-full bg-gray-400/20 p-2">
            <Medal className="text-secondary" />
          </div>
          <div className="flex-2 text-center">
            <p className="text-secondary font-light">Next Archivement</p>
            <h1 className="text-primary font-bold text-2xl text-special">
              2 Lessons Away
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 px-3 py-6 apple mt-2 rounded-2xl">
          <div className="flex-1 flex items-center justify-center  rounded-full bg-red-500/20 p-2">
            <Flame className="text-red-600" />
          </div>
          <div className="flex-2 text-center">
            <p className="text-secondary font-light">Current Streak</p>
            <h1 className="text-primary font-bold text-2xl text-special">
              7 Days
            </h1>
          </div>
        </div>
      </div>

      {/* detail view */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <div className="flex-1 apple rounded-lg px-3 py-2">
          <h1 className="text-primary font-bold ">Latest Archivement</h1>

          <div className="flex items-center justify-center mt-3">
            <Image
              src="/Archivements/30 days streak.png"
              alt="archivement"
              width={100}
              height={100}
            />
          </div>

          <div className="text-center">
            <h1 className="text-primary font-bold text-2xl">
              Consistant Lerner
            </h1>
            <p className="text-secondary font-light">30 Days Streak</p>
          </div>

          <div className="flex items-center justify-center gap-3 my-4 mb-10">
            <div className="px-4 py-1 bg-amber-500/40 text-amber-500 rounded-2xl ">
              100 XP
            </div>
            <p className="text-secondary font-light">Aug 18, 2026</p>
          </div>
        </div>

        <div className="flex-1 w-full h-full grid grid-rows-2 gap-2">
          <div className=" apple rounded-2xl px-3 py-2">
            <div className="flex items-center justify-between w-full h-full">
              <h1 className="text-primary font-bold">Learning Streak</h1>
              <Flame className="text-red-500" size={30} />
            </div>
          </div>
          <div className="w-full h-full apple rounded-2xl px-3 py-1">
            <h1 className="text-special font-semibold ">Knowledge Explorer</h1>

            <p className="text-secondary font-light text-xs">
              840 / 1000 XP to Level 9
            </p>
            <div className="my-4">
              <Progress value={56} className="w-full max-w-sm">
                <ProgressLabel>Upload progress</ProgressLabel>
                <ProgressValue />
              </Progress>
            </div>
            <p className="text-xs font-light text-secondary">Earn 160 more XP to level up.</p>
          </div>
        </div>
        
        <div className="flex-1 w-full h-full apple rounded-2xl flex flex-col px-2 py-2">
          <h1 className="text-secondary font-bold">ALMOST THERE</h1>

          {/* reusable cards */}
          <div className="flex items-center justify-between my-2">
            <div className='bg-gray-500/40 p-2 rounded-full'><FileQuestionMark className=" text-primary" /></div>

            <div>
              <p className="text-special font-bold">Quiz Master</p>
              <Progress value={60} className="w-[60%]" />
              <p className="text-xs font-light text-secondary">60% to next achievement</p>
            </div>

            <div className="flex items-center justify-center p-2 bg-primary-soft rounded-full cursor-pointer">
              <CircleArrowRight className="text-special" />
            </div>
          </div>

          <div className="flex items-center justify-between my-2">
            <div className='bg-gray-500/40 p-2 rounded-full'><BookOpenText className=" text-primary" /></div>

            <div>
              <p className="text-special font-bold">Knowledge Builder</p>
              <Progress value={60} className="w-[60%]" />
              <p className="text-xs font-light text-secondary">4/5 courses</p>
            </div>

            <div className="flex items-center justify-center p-2 bg-primary-soft rounded-full cursor-pointer">
              <CircleArrowRight className="text-special" />
            </div>
          </div>

          <div className="flex items-center justify-between my-2">
            <div className='bg-gray-500/40 p-2 rounded-full'><Users className=" text-primary" /></div>

            <div >
              <p className="text-special font-bold">Social Learner</p>
              <Progress value={60} className="w-[60%]" />
              <p className="text-xs font-light text-secondary">2/3 discussions</p>
            </div>

            <div className="flex items-center justify-center p-2 bg-primary-soft rounded-full cursor-pointer">
              <CircleArrowRight className="text-special" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default archivements