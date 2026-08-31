'use client'

import { students_nav_link } from '@/constant';
import Image from "next/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Student_sidebar = () => {

  const pathname = usePathname();

  return (
    <div className="px-6 py-6 h-screen w-full apple-strong">
      <div className="flex items-center justify-center gap-3 mt-2 mb-6">
        <div className="">
          <Image
            src="/images/profiles.jpeg"
            alt="Student Avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-special">Alex dev</h2>
          <p className="text-secondary">Web developer</p>
        </div>
      </div>

      {students_nav_link.map((link) => (
        <div key={link.id} className={`flex items-center justify-start gap-3 px-4 py-1 cursor-pointer rounded-lg mb-2 ${pathname == `/student/123${link.link}` ? "bg-primary-soft px-4 py-1 border-l-2 border-l-[#2ED8CF]" : ""}`}>
          <Link href={`/student/123/${link.link}`} className="flex items-center justify-center gap-3 py-1">
            {link.icon && <link.icon className={pathname == `/student/123${link.link}` ? "text-special" : "text-secondary"} size={20} />}
            <h2 className={pathname == `/student/123${link.link}` ? "text-special" : "text-secondary"}>{link.title}</h2>
          </Link>
        </div>
      ))}
    
    </div>
  );
}

export default Student_sidebar