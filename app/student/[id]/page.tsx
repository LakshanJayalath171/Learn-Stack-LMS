import { PencilIcon, ShareIcon, Layers,CircleCheck,Clock,BadgeCheck,Flame,PlayCircle,Blocks,ChevronDown} from 'lucide-react'
import Image from 'next/image'

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

const HomePage = () => {
  return (
    <div>
      <div className="w-full h-full flex items-center justify-start apple px-4 py-3 rounded-2xl">
        <div className="flex-1">
          <Image
            src="/images/profiles2.jpeg"
            alt="Description"
            width={100}
            height={60}
            className="rounded-full border-2 border-[#2ED8CF]"
          />
        </div>
        <div className="mx-4 flex-7">
          <div className="flex items-center justify-between w-full h-full gap-4">
            <div>
              <h1 className="text-primary font-bold text-4xl">John Doe</h1>
              <p className="text-secondary">Software Engineer</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button className="btn-primary flex items-center justify-start gap-2 cursor-pointer">
                <PencilIcon />
                Edit Profile
              </button>
              <button className="btn-secondary flex items-center justify-start gap-2 cursor-pointer">
                <ShareIcon />
                Share
              </button>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-secondary">
              Full-stack development student passionate about building modern
              web applications. Focused on React ecosystem and Node.js backend
              architecture. Constantly learning and building side projects to
              improve my craft.
            </p>
          </div>
          <div></div>
        </div>
      </div>

      {/* card section */}
      <div className="grid grid-cols-4 py-2 gap-2">
        {/* first card */}
        <div className="px-6 py-8 text-center apple rounded-2xl">
          <div className="flex items-center justify-center gap-2">
            <Layers className="text-primary" size={20} />
          </div>
          <h2 className="text-special font-bold text-3xl">12</h2>
          <p className="text-secondary">Enrolled</p>
        </div>

        {/* second card */}

        <div className="px-6 py-8 text-center apple rounded-2xl">
          <div className="flex items-center justify-center gap-2">
            <CircleCheck className="text-primary" size={20} />
          </div>
          <h2 className="text-special font-bold text-3xl">5</h2>
          <p className="text-secondary">Completed</p>
        </div>

        {/* third card */}
        <div className="px-6 py-8 text-center apple rounded-2xl">
          <div className="flex items-center justify-center gap-2">
            <Clock className="text-primary" size={20} />
          </div>
          <h2 className="text-special font-bold text-3xl">12</h2>
          <p className="text-secondary">Hours Learned</p>
        </div>

        {/* fourth card */}
        <div className="px-6 py-8 text-center apple rounded-2xl">
          <div className="flex items-center justify-center gap-2">
            <BadgeCheck className="text-primary" size={20} />
          </div>
          <h2 className="text-special font-bold text-3xl">5</h2>
          <p className="text-secondary">Certificates</p>
        </div>
      </div>

      {/* course details section */}

      <div className="flex justify-center">
        {/* continue learning content */}
        <div className="flex-3">
          <h1 className="text-2xl font-bold text-primary flex items-center justify-start gap-2">
            <PlayCircle className="text-special" />
            Continue Learning
          </h1>

          <div className="apple my-2 mx-2 flex items-center gap-2 rounded-2xl py-4">
            <div className="px-4 py-3">
              <Image
                src="/images/course01.png"
                alt="Description"
                width={100}
                height={60}
                className="rounded-lg"
              />
            </div>

            <div>
              <h1 className="text-primary font-bold text-lg">
                React Fundamentals
              </h1>
              <p className="text-secondary">
                Learn the basics of React, including components, state, and
                props.
              </p>

              {/* progress bar */}

              <div className="py-2">
                <Progress value={70} className="w-full rounded-2xl">
                  <ProgressLabel className="text-sm font-medium text-primary">
                    Progress
                  </ProgressLabel>
                  <ProgressValue className="text-sm font-medium text-primary" />
                </Progress>
              </div>

              <button className="btn-primary">Continue Learning</button>
            </div>
          </div>

          {/* enrolled courses */}
          <div>
            <h1 className="text-2xl text-primary flex items-center justify-start gap-2 font-bold ">
              <Blocks className="text-special" />
              Enrolled Courses
            </h1>

            <div className="grid grid-cols-2 my-2 gap-2 px-3">
              <div className="flex flex-col apple rounded-2xl p-4">
                <div>
                  <Image
                    src="/images/course03.png"
                    alt="Description"
                    width={100}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-primary">
                    React Fundamentals
                  </h2>
                  <p className="text-secondary">
                    Learn the basics of React, including components, state, and
                    props.
                  </p>
                  <div>
                    <Progress value={70} className="w-full rounded-2xl">
                      <ProgressLabel className="text-sm font-medium text-primary">
                        Progress
                      </ProgressLabel>
                      <ProgressValue className="text-sm font-medium text-primary" />
                    </Progress>
                  </div>
                </div>
              </div>

              <div className="flex flex-col apple rounded-2xl p-4">
                <div>
                  <Image
                    src="/images/course02.png"
                    alt="Description"
                    width={100}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-primary">
                    React Fundamentals
                  </h2>
                  <p className="text-secondary">
                    Learn the basics of React, including components, state, and
                    props.
                  </p>
                  <div>
                    <Progress value={30} className="w-full rounded-2xl">
                      <ProgressLabel className="text-sm font-medium text-primary">
                        Progress
                      </ProgressLabel>
                      <ProgressValue className="text-sm font-medium text-primary" />
                    </Progress>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <button className="flex items-center gap-2 font-medium cursor-pointer text-special">
                Show more <ChevronDown />
              </button>
            </div>
          </div>
        </div>
        {/* streak section */}
        <div className="flex-1 flex flex-col py-2">
          <div className='apple rounded-lg '>
            <div className="flex items-center justify-between">
              <p className='text-secondary font-light px-2 py-1 text-[10px]'>LEARNING STREAK</p>
              <Flame className="text-special mx-2 my-1" />
            </div>
            <div className="h-42">

            </div>
          </div>

          <div className="apple rounded-lg px-2 py-1 mt-3 h-96">
            <div>
              <p className='text-secondary font-light px-2 py-1 text-[10px]'>RECENT ACTIVITY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage