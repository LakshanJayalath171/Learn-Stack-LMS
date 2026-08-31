import { FileText, CircleEllipsis, CircleCheck, Clock} from 'lucide-react';
import Image from 'next/image';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

const my_learning = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-primary font-bold">My Learning</h1>
        <p className="text-secondary font-light">
          Continue your learning journey and keep track of your progress.
        </p>
      </div>

      <div className="grid grid-cols-4 my-2 gap-2">
        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <FileText className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-2xl">12</h1>
            <p className="text-secondary font-light">Enrolled Courses</p>
          </div>
        </div>

        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <CircleEllipsis className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-2xl">7</h1>
            <p className="text-secondary font-light">In Progress</p>
          </div>
        </div>

        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <CircleCheck className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-2xl">5</h1>
            <p className="text-secondary font-light">Completed </p>
          </div>
        </div>

        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <Clock className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-2xl">48 h</h1>
            <p className="text-secondary font-light">Study Time</p>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h1 className="text-3xl font-bold text-primary">Continue Learning</h1>

        <div className="">
          {/* mapping cards */}

          <div className="flex apple rounded-2xl mt-2">
            <div className="">
              <Image
                alt="course thumnail"
                src="/images/course01.png"
                width={300}
                height={200}
              />
            </div>

            <div className=" px-2 py-3">
              <h1 className="text-2xl font-bold text-primary ">
                Introduction to Web Development
              </h1>
              <p className="text-secondary font-light mt-1">
                Learn the basics of web development, including HTML, CSS, and
                JavaScript.
              </p>

              <div className="mt-">
                <Progress value={56} className="w-full max-w-sm">
                  <ProgressLabel>Upload progress</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </div>

              <div className="mt-2 ">
                <button className="btn-primary cursor-pointer">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
          <div className="flex apple rounded-2xl mt-2">
            <div className="">
              <Image
                alt="course thumnail"
                src="/images/course04.png"
                width={300}
                height={200}
              />
            </div>

            <div className=" px-2 py-3">
              <h1 className="text-2xl font-bold text-primary ">
                Data Structures and Algorithms
              </h1>
              <p className="text-secondary font-light mt-1">
                Learn the basics of data structures and algorithms, including 
              </p>

              <div className="mt-">
                <Progress value={56} className="w-full max-w-sm">
                  <ProgressLabel>Upload progress</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </div>

              <div className="mt-2 ">
                <button className="btn-primary cursor-pointer">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default my_learning