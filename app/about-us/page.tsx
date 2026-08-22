import Main_Navbar from "@/components/Main_Navbar";
import Small_footer from "@/components/Small_footer";
import { ArrowRight, Eye, Rocket } from "lucide-react";
import React from "react";

const About_us = () => {
  return (
    <div>
      <Main_Navbar />

      <div className="flex items-center justify-center gap-4 px-10 py-2">
        <div className="flex-1 items-center justify-center">
          <h1 className="text-primary font-extrabold text-4xl">
            Empowering People
            <br /> Through <span className="text-special">Modern Learning</span>
          </h1>
          <p className="text-secondary mt-2">
            Learn Stack brings students and teachers together in one modern
            learning platform — making it easier to learn practical skills,
            share knowledge, and grow together.
          </p>

          <div className="mt-4 flex items-center justify-start gap-4">
            <button className="btn-primary px-4 py-2 rounded-full">
              Learn More
            </button>
            <button className="btn-secondary px-4 py-2 rounded-full">
              Explore courses <ArrowRight />
            </button>
          </div>
        </div>

        <div className="flex-1 rounded-2xl apple w-96 h-96 flex items-center justify-center hidden lg:block"></div>
      </div>

      <div className="apple  w-screen h-full flex items-center justify-center pb-6">
        <div className="text-center">
          <h1 className="text-special font-medium my-6">OUR STORY</h1>
          <p className="text-secondary font-semibold my-2">
            Built Around a Simple Idea
          </p>
          <p className="text-secondary fonst-light">
            Learning should not be limited by location, expensive
            infrastructure, or complicated platforms. Learn Stack was created
            with a simple idea: bring learners and educators together through a
            modern platform that makes learning and teaching easier.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6 px-10 py-2">
        <div className="flex-1 px-4 py-10 apple min-h-64 rounded-2xl">
          <div className="rounded-2xl apple p-4 w-14 h-14 flex items-center justify-center">
            <Rocket className="text-special" />
          </div>
          <h1 className="text-primary font-bold my-2">Our Mission</h1>
          <p className="text-secondary font-light mt-4">
            To democratize technical education by providing an accessible,
            high-performance platform where industry experts can easily share
            their knowledge, and ambitious individuals can acquire practical
            skills without friction.
          </p>
        </div>
        <div className="flex-1 px-4 py-10 apple min-h-64 rounded-2xl w-full">
          <div className="rounded-2xl apple p-4 w-14 h-14 flex items-center justify-center">
            <Eye className="text-amber-500" />
          </div>
          <h1 className="text-primary font-bold my-2">Our Vision</h1>
          <p className="text-secondary font-light mt-4">
            To create a world where everyone has equal access to quality
            education and the opportunity to develop their potential.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 py-6 bg-primary-soft">
        <div className="text-center">
          <h1 className="text-special font-bold text-2xl">50K+</h1>
          <p className="text-secondary font-light">Students Enrolled</p>
        </div>
        <div className="text-center">
          <h1 className="text-special font-bold text-2xl">1K+</h1>
          <p className="text-secondary font-light">Courses Available</p>
        </div>
        <div className="text-center">
          <h1 className="text-special font-bold text-2xl">500+</h1>
          <p className="text-secondary font-light">Expert Instructors</p>
        </div>
        <div className="text-center">
          <h1 className="text-special font-bold text-2xl">95%</h1>
          <p className="text-secondary font-light">Student Satisfaction</p>
        </div>
      </div>

      <div className="apple w-screen flex items-center justify-center py-24">
        <div className="text-center">
            <h1 className="text-4xl font-semibold text-primary">Your Next Chapter Starts Here</h1>
            <p className="text-secondary font-light my-2">Join thousands of learners and instructors who are already building the future on Learn Stack.</p>

            <div className="flex items-center justify-center gap-3">
                <button className="btn-primary px-4 py-2 rounded-full cursor-pointer">
                  Start Learning
                </button>
                <button className="btn-secondary px-4 py-2 rounded-full cursor-pointer">
                  Become Instructor
                </button>
            </div>
        </div>
      </div>

      <Small_footer/>
    </div>
  );
};

export default About_us;
