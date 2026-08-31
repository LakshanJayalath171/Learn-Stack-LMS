import {Trophy, GraduationCap,Clock,Calendars, Verified ,Download, Eye, Share2,Layers, Link2, ArrowRight} from "lucide-react"
import Image from "next/image"

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-primary font-bold">My Certificates</h1>
        <p className="text-secondary font-light">
          View, manage, and share the certificates you've earned through Learn
          Stack.
        </p>
      </div>

      <div className="grid grid-cols-4 mt-3 gap-2">
        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <Trophy className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2 my-3">
            <h1 className="text-primary font-bold text-2xl">12</h1>
            <p className="text-secondary font-light">ENROLLED COURSES</p>
          </div>
        </div>
        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <GraduationCap className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2 my-3">
            <h1 className="text-primary font-bold text-2xl">12</h1>
            <p className="text-secondary font-light">COURSES COMPLETED</p>
          </div>
        </div>
        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <Clock className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2 my-3">
            <h1 className="text-primary font-bold text-2xl">102 h</h1>
            <p className="text-secondary font-light">STUDY TIME</p>
          </div>
        </div>
        <div className="apple rounded-2xl px-3 py-6">
          <div className="bg-primary-soft rounded-full p-2">
            <Calendars className="text-special" size={20} />
          </div>

          <div className="flex flex-col items-center justify-center gap-2 my-3">
            <h1 className="text-primary font-bold text-2xl">2</h1>
            <p className="text-secondary font-light">ENROLLED COURSES</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-3">
        <div className="flex-2 flex flex-col apple rounded-2xl px-2 py-3 ">
          <div className="flex items-center justify-between py-3 w-full h-full">
            <h1 className="text-primary font-bold text-lg">
              Your Latest Certificate
            </h1>

            <div className="bg-primary-soft rounded-full text-[8px] text-special px-2 py-1 flex items-center gap-2">
              <Verified />
              Verified
            </div>
          </div>
          <div className="w-full h-full">
            <Image
              alt="certificate"
              src="/images/certificate 01.png"
              width={700}
              height={400}
            />
          </div>

          <div>
            <div className="flex items-center justify-start gap-2 py-1">
              <button className="btn-primary flex items-center gap-2 cursor-pointer">
                <Eye />
                View Certificate
              </button>
              <button className="btn-secondary flex items-center gap-2 cursor-pointer">
                <Download />
                Download PDF
              </button>
            </div>
            <div>
              <button className="btn-primary flex items-center gap-2 cursor-pointer">
                <Share2 />
                Share Certificate
              </button>
            </div>
          </div>

          <div className="flex "></div>
        </div>
        <div className="flex-1">
          <div className="apple rounded-2xl px-3 py-1">
            <div className="w-full h-full p-1 bg-primary-soft rounded-full">
              <Layers className="m-2 " />
            </div>

            <div className="">
              <h1 className="text-primary font-bold text-lg">
                Certificate Verification
              </h1>
              <p className="text-secondary font-light">
                Verify the authenticity of your certificate at any time.
              </p>
            </div>

            <div className="bg-primary-soft rounded-2xl px-2 py-3 mt-2">
              <p className="text-secondary font-bold">STATUS</p>
              <p className="text-special font-semibold flex items-center gap-2">
                <Verified className="text-special" /> Verified
              </p>
            </div>

            <div className="bg-primary-soft rounded-2xl px-2 py-3 mt-2 cursor-pointer">
              <p className="text-special font-light flex items-center gap-2">
                <Link2 className="text-special" /> Copy the LInk
              </p>
            </div>

            <div className="bg-primary-soft rounded-2xl px-2 py-3 mt-2">
              <p className="text-secondary font-bold">CERTIFICATE ID</p>
              <p className="text-secondary font-light flex items-center gap-2">
                1SDR-4586S-RTG7S8-SDVFERGD
              </p>
            </div>
          </div>

          <div className="apple rounded-2xl flex items-center justify-center px-3 py-6 mt-3 gap-2 ">
            <div className="flex flex-col gap-2 text-center ">
              <div className="flex items-center justify-center">
                <Share2 className="text-special" />
              </div>
              <h1 className="text-primary font-bold text-lg">
                Boost your Profile
              </h1>

              <p className="text-secondary font-light">
                Add this certificate to your LinkedIn profile to stand out to
                recruiters.
              </p>

              <div>
                <button className="bg-blue-500 rounded-full px-4 py-2">
                  Add to Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-primary font-bold text-2xl">All Certificates</h1>
        <div className="flex gap-2">
          <select className="bg-primary-soft rounded-lg px-3 py-1 text-primary font-light">
            <option value="verified" className="text-black apple font-semibold">
              Newest First
            </option>
            <option value="unverified" className="text-black apple font-semibold">
              Oldest First
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 mt-2">
        <div className="bg-primary-soft rounded-2xl px-4 py-1 cursor-pointer">All</div>
        <div className="apple rounded-2xl px-4 py-1 cursor-pointer">Recently Earned</div>
        <div className="apple rounded-2xl px-4 py-1 cursor-pointer">Web Development</div>
        <div className="apple rounded-2xl px-4 py-1 cursor-pointer">UI/UX Design</div>
        <div className="apple rounded-2xl px-4 py-1 cursor-pointer">Data Science</div>
        <div className="apple rounded-2xl px-4 py-1 cursor-pointer">Mobile Application</div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className=' apple items-center justify-center rounded-2xl mt-3'>
          <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center gap-2 my-6">
              <div className="flex items-center justify-center my-2">
                <Trophy className="text-special" />
              </div>
              <div className="bg-gray-500 w-48 h-2"></div>
              <div className="bg-gray-500 w-24 h-2"></div>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="text-primary font-semibold">React Native Basics</h2>
            <p className="text-secondary font-light text-[12px]">
              Issued on: 12th March 2023
            </p>

            <hr className="text-special my-3"/>

            <div className="flex items-center justify-between">
              <p className="text-special text-[15px]">Certificate earned</p>
              <p className="text-special text-[15px] flex items-center cursor-pointer">View <ArrowRight /></p>
            </div>
          </div>
        </div>

        <div className=' apple items-center justify-center rounded-2xl mt-3'>
          <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center gap-2 my-6">
              <div className="flex items-center justify-center my-2">
                <Trophy className="text-special" />
              </div>
              <div className="bg-gray-500 w-48 h-2"></div>
              <div className="bg-gray-500 w-24 h-2"></div>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="text-primary font-semibold">React Native Basics</h2>
            <p className="text-secondary font-light text-[12px]">
              Issued on: 12th March 2023
            </p>

            <hr className="text-special my-3"/>

            <div className="flex items-center justify-between">
              <p className="text-special text-[15px]">Certificate earned</p>
              <p className="text-special text-[15px] flex items-center cursor-pointer">View <ArrowRight /></p>
            </div>
          </div>
        </div>

        <div className=' apple items-center justify-center rounded-2xl mt-3'>
          <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center gap-2 my-6">
              <div className="flex items-center justify-center my-2">
                <Trophy className="text-special" />
              </div>
              <div className="bg-gray-500 w-48 h-2"></div>
              <div className="bg-gray-500 w-24 h-2"></div>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="text-primary font-semibold">React Native Basics</h2>
            <p className="text-secondary font-light text-[12px]">
              Issued on: 12th March 2023
            </p>

            <hr className="text-special my-3"/>

            <div className="flex items-center justify-between">
              <p className="text-special text-[15px]">Certificate earned</p>
              <p className="text-special text-[15px] flex items-center cursor-pointer">View <ArrowRight /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page