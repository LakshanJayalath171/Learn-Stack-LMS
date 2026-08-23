import Main_course_card from "@/components/Main_course_card";
import Main_Navbar from "@/components/Main_Navbar";
import { Search } from "lucide-react";
import { sample_courses } from "@/constant";
import Link from "next/link";



const courses = () => {
  return (
    <div>
      <Main_Navbar />

      <div className="flex items-center justify-center bg-green-soft">
        <div className="text-center px-10 py-10">
          <h1 className="text-3xl font-bold text-primary my-3">
            Explore All Courses
          </h1>
          <p className="text-secondary my-2">
            Master new skills with deep-dive courses designed for professionals.
            Build your stack today.
          </p>

          <div className="apple w-full h-full rounded-full px-6 py-2 flex items-center justify-between ">
            <div className="flex items-center justify-center gap-3">
              <Search />
              <input
                type="text"
                className="w-full focus:outline-none rounded-full py-2 px-4"
                placeholder="Search courses, topics, skills..."
              />
            </div>
            <button className="btn-primary rounded-full px-4 py-2 cursor-pointer">
              Search
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 pt-3">
            <h3 className="text-special font-medium">Popular Topics:</h3>
            <p className="text-secondary font-light italic">
              Web Development, Data Science, Machine Learning
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary-soft w-screen h-full px-10 py-4 flex items-center justify-start gap-2 overflow-x-auto">
        <div className="px-6 py-1 rounded-full cursor-pointer text-primary font-medium bg-primary-soft">
          All
        </div>

        <div className="px-6 py-1 rounded-full cursor-pointer text-primary font-medium apple">
          Web Development
        </div>
        <div className="px-6 py-1 rounded-full cursor-pointer text-primary font-medium apple">
          Data Science
        </div>
        <div className="px-6 py-1 rounded-full cursor-pointer text-primary font-medium apple">
          Machine Learning
        </div>
      </div>

      <div className="flex  gap-2">
        <div className="flex-1 p-2 border-r border-solid border-1px border-[#2ED8CF] my-2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-primary font-semibold">Filters</h1>
            <p className="text-special font-light cursor-pointer hover:underline">
              Clear All
            </p>
          </div>

          <hr className="text-special" />

          <div className="py-2">
            <h1 className="text-primary font-medium">Level</h1>

            <div className="flex flex-col gap-1 my-3 px-2 py-3">
              <label
                htmlFor="beginner"
                className="flex items-center gap-2 text-secondary"
              >
                <input
                  type="checkbox"
                  id="beginner"
                  className="accent-[#2ED8CF]"
                />
                Beginner
              </label>
              <label
                htmlFor="intermediate"
                className="flex items-center gap-2 text-secondary"
              >
                <input
                  type="checkbox"
                  id="intermediate"
                  className="accent-[#2ED8CF]"
                />
                Intermediate
              </label>
              <label
                htmlFor="advanced"
                className="flex items-center gap-2 text-secondary"
              >
                <input
                  type="checkbox"
                  id="advanced"
                  className="accent-[#2ED8CF]"
                />
                Advanced
              </label>
            </div>
          </div>
          <hr className="text-special"/>

          <div className="py-2">
            <h1 className="text-primary font-bold">Price</h1>
            <div className=" px-2 py-3">
              <label htmlFor="free" className="flex items-center gap-2">
                <input type="radio" name="plan" value="free" className="accent-[#2ED8CF]"/>
                Free
              </label>

              <label htmlFor="paid" className="flex items-center gap-2">
                <input type="radio" name="plan" value="paid" className="accent-[#2ED8CF]"/>
                Paid
              </label>
              <label htmlFor="all" className="flex items-center gap-2">
                <input type="radio" name="plan" value="all" className="accent-[#2ED8CF]"/>
                All
              </label>
            </div>
          </div>
        </div>
        <div className="flex-4 w-full h-full items-start py-4">
          <div className="px-4 py-2 flex items-center justify-between">
            <p className="text-secondary">Showing 100 courses</p>
            <div className="flex items-center justify-center gap-3">
              <p>Sort by:</p>
              <select className="px-2 py-1 rounded-md  border-1px apple">
                <option className="text-primary apple">Most Popular</option>
                <option className="text-primary apple">Newest</option>
                <option className="text-primary apple">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {sample_courses.map((course, index) => (
            <Link key={index} href={`/courses/${course.id}`}>
              <Main_course_card              
                title={course.title}
                price={course.price}
                level={course.level}
                instructor={course.instructor.name}
                duration={course.duration}
                category={course.category}
                thumbnail={course.thumbnail}
                ratings={course.rating}
              />
          </Link>
          ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default courses;
