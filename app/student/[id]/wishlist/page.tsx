import { Heart , CalendarDays , Hourglass, EllipsisVertical ,Star , Users , Clock} from 'lucide-react';
import Image from 'next/image';
const wishlist = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-primary font-bold">My Wishlist</h1>
        <p className="text-secondary font-semibold">
          Manage your favorite courses and content
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="flex items-center justify-between apple rounded-2xl p-3">
          <div>
            <p className="text-secondary font-light">SAVED COURSES</p>
            <h1 className="text-2xl text-special font-bold">12</h1>
          </div>
          <div className="bg-primary-soft rounded-full p-2">
            <Heart />
          </div>
        </div>

        <div className="flex items-center justify-between apple rounded-2xl p-3">
          <div>
            <p className="text-secondary font-light">IN PROGRESS</p>
            <h1 className="text-2xl text-special font-bold">3</h1>
          </div>
          <div className="bg-primary-soft rounded-full p-2">
            <CalendarDays />
          </div>
        </div>

        <div className="flex items-center justify-between apple rounded-2xl p-3">
          <div>
            <p className="text-secondary font-light">NOT STARTED</p>
            <h1 className="text-2xl text-special font-bold">9</h1>
          </div>
          <div className="bg-primary-soft rounded-full p-2">
            <Hourglass />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <div className="text-primary font-medium bg-primary-soft px-3 py-1 rounded-full cursor-pointer">
              All
            </div>

            <div className="text-primary font-medium apple px-3 py-1 rounded-full cursor-pointer">
              Web Development
            </div>

            <div className="text-primary font-medium apple px-3 py-1 rounded-full cursor-pointer">
              Data Science
            </div>

            <div className="text-primary font-medium apple px-3 py-1 rounded-full cursor-pointer">
              Mobile Development
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p>Sort by:</p>
            <select className="apple px-3 py-1 rounded-lg">
              <option className="text-black">Recently Added</option>
              <option className="text-black">Most Popular</option>
              <option className="text-black">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* cards section */}

        <div className="grid grid-cols-3 gap-4 mt-3">

          {/* mapping card */}
          <div className="flex flex-col apple rounded-2xl overflow-hidden">
            <div className="">
              <Image
                src="/images/course01.png"
                alt="course thumbnail"
                width={350}
                height={200}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">

                <h2 className="text-lg font-bold">React Fundamentals</h2>
                <button className="cursor-pointer text-primary">
                  <EllipsisVertical />
                </button>
              </div>
              <p className="text-secondary font-light text-[15px]">By John Doe</p>

              <div className='flex items-center justify-start gap-3 mb-16'>
                {/* rate */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Star className="text-amber-500" size={16} />
                  <p className='text-secondary font-light text-[15px]'>4.8</p>
                </div>

                {/* students */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Users className="text-primary" size={16} />
                  <p className='text-secondary font-light text-[15px]'>1,234</p>
                </div>

                {/* duration */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Clock className="text-primary" size={16} />
                  <p className='text-secondary font-light text-[15px]'>10 hours</p>
                </div>
              </div>
              <hr className='text-special my-2'/>

              <div className="flex items-center justify-center">
                <button className="btn-secondary cursor-pointer px-4 py-2 w-full h-full">Start Learning</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col apple rounded-2xl overflow-hidden">
            <div className="">
              <Image
                src="/images/course02.png"
                alt="course thumbnail"
                width={350}
                height={200}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">

                <h2 className="text-lg font-bold">React Fundamentals</h2>
                <button className="cursor-pointer text-primary">
                  <EllipsisVertical />
                </button>
              </div>
              <p className="text-secondary font-light text-[15px]">By John Doe</p>

              <div className='flex items-center justify-start gap-3 mb-16'>
                {/* rate */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Star className="text-amber-500" size={16} />
                  <p className='text-secondary font-light text-[15px]'>4.8</p>
                </div>

                {/* students */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Users className="text-primary" size={16} />
                  <p className='text-secondary font-light text-[15px]'>1,234</p>
                </div>

                {/* duration */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Clock className="text-primary" size={16} />
                  <p className='text-secondary font-light text-[15px]'>10 hours</p>
                </div>
              </div>
              <hr className='text-special my-2'/>

              <div className="flex items-center justify-center">
                <button className="btn-secondary cursor-pointer px-4 py-2 w-full h-full">Start Learning</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col apple rounded-2xl overflow-hidden">
            <div className="">
              <Image
                src="/images/course03.png"
                alt="course thumbnail"
                width={350}
                height={200}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">

                <h2 className="text-lg font-bold">React Fundamentals</h2>
                <button className="cursor-pointer text-primary">
                  <EllipsisVertical />
                </button>
              </div>
              <p className="text-secondary font-light text-[15px]">By John Doe</p>

              <div className='flex items-center justify-start gap-3 mb-16'>
                {/* rate */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Star className="text-amber-500" size={16} />
                  <p className='text-secondary font-light text-[15px]'>4.8</p>
                </div>

                {/* students */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Users className="text-primary" size={16} />
                  <p className='text-secondary font-light text-[15px]'>1,234</p>
                </div>

                {/* duration */}
                <div className="flex items-center justify-center gap-1 px-2 py-1">
                  <Clock className="text-primary" size={16} />
                  <p className='text-secondary font-light text-[15px]'>10 hours</p>
                </div>
              </div>
              <hr className='text-special my-2'/>

              <div className="flex items-center justify-center">
                <button className="btn-secondary cursor-pointer px-4 py-2 w-full h-full">Start Learning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default wishlist