import Image from 'next/image'
import Toggle from './Toggle-Button'
import { Bell } from 'lucide-react';

const Secondary_navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2">
      <div className=" flex items-center justify-center gap-4">
        <Image src={"/images/Logo.png"} alt="Logo" width={40} height={40} />
        <h2 className="text-primary text-lg font-bold">Learn Stack</h2>
      </div>
      <div >
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10">
            <Toggle />
          </div>
          <Bell className="text-secondary cursor-pointer" />
          <div className="w-10 h-10">
            <Image src={"/images/profiles.jpeg"} alt="User" width={40} height={40} className="rounded-full cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondary_navbar