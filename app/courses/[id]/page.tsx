"use client"

import Main_Navbar from '@/components/Main_Navbar';
import { Award, BookA, Clock, Globe2, Heart, Star, Users, CircleCheck, Video, BracketsIcon, DownloadCloudIcon, InfinityIcon, Smartphone, MedalIcon, ShoppingCart, GraduationCapIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Small_footer from '@/components/Small_footer';

const Course_details = () => {
    const {id} = useParams();
  return (
    <div>
      <Main_Navbar />

      {/* main div  */}
      <div className="w-screen h-full apple  px-10 py-4 flex items-center justify-center relative pb-10">
        <div className="flex-3">
          <div className="text-secondary font-medium py-2">
            {"Home>Development>React>course " + id}
          </div>
          <div className="rounded-full px-6 py-1 apple text-sm text-special w-48">
            Web Development
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-primary my-6">
              React Native Full Course
            </h1>
            <p className="text-secondary">
              Master modern web development building real-world projects. Learn
              HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB from
              scratch.
            </p>
          </div>

          <div className="flex items-center justify-start gap-3 py-4">
            <p>4.8K</p>
            <div className="flex items-center justify-center gap-1">
              <Star className="text-amber-500 dark:text-special" />
              <Star className="text-amber-500 dark:text-special" />
              <Star className="text-amber-500 dark:text-special" />
              <Star className="text-amber-500 dark:text-special" />
              <Star className="text-amber-500 dark:text-special" />
            </div>

            <div className="flex items-center justify-center gap-2">
              <Users className="text-secondary " />
              <p className="text-secondary">12 500+ Students</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-3">
            <Image
              src="/images/profiles.jpeg"
              alt="Instructor"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-primary">Created By:</p>
              <p className="text-special italics font-semibold">John Smith</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-3 mt-4">
            <div className="flex rounded-[8px] apple px-2 py-1">
              <Clock className="text-special " />
              <p className="text-secondary">21 Hours Total Length</p>
            </div>

            <div className="flex rounded-[8px] apple px-2 py-1">
              <BookA className="text-special" />
              <p className="text-secondary">12 Sections, 48 Lessons</p>
            </div>
            <div className="flex rounded-[8px] apple px-2 py-1">
              <Globe2 className="text-special" />
              <p className="text-secondary">English</p>
            </div>
            <div className="flex rounded-[8px] apple px-2 py-1">
              <Award className="text-special" />
              <p className="text-secondary">Certificate of Completion</p>
            </div>
          </div>
        </div>

        <div className="flex-1 absolute bottom-0 right-0">
          <div className="items-center justify-center apple flex-col rounded-2xl">
            {/* thumbnail div */}
            <div>
              <Image
                src="/images/course01.png"
                alt="Course Thumbnail"
                width={400}
                height={400}
                className="rounded-tr-2xl rounded-tl-2xl"
              />
            </div>

            {/* detail div */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-start gap-3">
                <p className="text-special text-2xl font-bold">$39.99</p>
                <p className="text-secondary line-through">$59.99</p>
              </div>

              <div className="w-full h-full grid grid-rows-2">
                <button className="btn-primary text-white px-4 py-2 rounded-lg mt-3 cursor-pointer">
                  Enroll Now
                </button>
                <button className="btn-secondary border-solid text-special px-4 py-2 rounded-lg mt-3  flex gap-2 w-full cursor-pointer">
                  <Heart />
                  Add to Wishlist
                </button>
              </div>

              <hr className="text-special my-3" />

              <div className='flex items-center justify-center gap-6'>
                <p className='text-secondary cursor-pointer hover:underline text-[12px]'>Share</p>
                <p className='text-secondary cursor-pointer hover:underline text-[12px]'>Gift this course</p>
                <p className='text-secondary cursor-pointer hover:underline text-[12px]'>Apply coupen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //details section */}

      <div className="flex  justify-start gap-2 px-6 py-6">
        <div className="flex-3">
          <div className="apple px-6 py-2 rounded-2xl">
            <div>
              <h2 className="text-primary font-bold">What you'll learn</h2>

              <div>
                <div className="flex items-center justify-start gap-2 my-2">
                  <CircleCheck className="text-special" />
                  <p className="text-secondary">
                    Build fully responsive websites using HTML5 and CSS3 modern
                    techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* course content */}

          <div className="rounded-2xl p-4 apple mt-3">
            <h2 className="text-primary font-bold">Course Content</h2>
            <p className="text-secondary">
              This is the course content section where you can list all the
              topics and lessons.
            </p>
          </div>

          {/* about this course */}
          <div className="apple p-4 mt-2 rounded-2xl">
            <h1 className="text-primary font-bold">About this course</h1>
            <p className="text-secondary mt-3">
              This comprehensive bootcamp is designed to take you from a
              complete beginner to a hireable full-stack web developer. We focus
              on modern technologies and industry best practices.
            </p>
            <p className="text-secondary mt-2">
              You won't just watch tutorials; you'll build real-world
              applications. By the end of this course, you will have a portfolio
              of impressive projects to show potential employers.
            </p>

            <div className="flex items-center justify-start gap-2 mt-3">
              <div className="apple rounded-2xl p-2 flex-1">
                <div className="bg-primary-soft rounded-2xl p-2 w-12 h-12 flex items-center justify-center">
                  <ShoppingCart className="text-special bg-special rounded-2xl" />
                </div>
                <div>
                  <h2 className="text-primary font-bold my-3">
                    MERN E-commerce platform
                  </h2>
                  <p className="text-secondary ">
                    A fully functional online store with payment integration,
                    user authentication, and admin dashboard.
                  </p>
                </div>
              </div>

              <div className="apple rounded-2xl p-2 flex-1">
                <div className="bg-primary-soft rounded-2xl p-2 w-12 h-12 flex items-center justify-center">
                  <GraduationCapIcon className="text-special bg-special rounded-2xl" />
                </div>
                <div>
                  <h2 className="text-primary font-bold my-3">LMS Dashboard</h2>
                  <p className="text-secondary ">
                    A learning management system interface with progress
                    tracking and glassmorphism UI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* course include */}
        <div className="flex-1 apple items-center px-6 py-2 rounded-2xl justify-start">
          <h2 className="text-primary font-bold">What You'll Get</h2>

          <div className="flex items-center justify-start gap-2 pt-2">
            <Video className="text-special" />
            <p className="text-secondary">24 hours on-demand video</p>
          </div>

          <div className="flex items-center justify-start gap-2 pt-2">
            <DownloadCloudIcon className="text-special" />
            <p className="text-secondary">15 Downloadable Resources</p>
          </div>

          <div className="flex items-center justify-start gap-2 pt-2">
            <InfinityIcon className="text-special" />
            <p className="text-secondary">Lifetime Access</p>
          </div>

          <div className="flex items-center justify-start gap-2 pt-2">
            <Smartphone className="text-special" />
            <p className="text-secondary">Access on mobile and TV</p>
          </div>

          <div className="flex items-center justify-start gap-2 pt-2">
            <MedalIcon className="text-special" />
            <p className="text-secondary">Certificate of Completion</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-24">
        <div className='text-center'>
          <div className="flex items-center justify-center">
            <Image
            src="/images/Logo.png"
            alt="Learning Illustration"
            width={250}
            height={250}
          />
          </div>
          <h1 className='text-primary font-bold text-4xl'>Ready to start learning?</h1>
          <p className="text-secondary my-3">Join thousands of students and transform your career today.</p>
          <button className='btn-primary rounded-full px-4 py-2'>Get Started</button>
        </div>
      </div>

      <Small_footer/>
    </div>
  );
}

export default Course_details