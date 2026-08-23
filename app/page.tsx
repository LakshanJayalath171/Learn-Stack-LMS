import Course_card from "@/components/Course_card";
import Footer from "@/components/Footer";
import Main_Navbar from "@/components/Main_Navbar";
import { sample_courses, offers, profileImages } from "@/constant";
import { PlayCircle, Star } from "lucide-react";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      {/* main navbar section */}
      <Main_Navbar />

      {/* main hero section */}
      <div className="flex px-10 w-screen h-[calc(100vh-80px)] items-center justify-between">
        <div className="flex-1">
          <div className="bg-white/10 px-2 py-1 rounded-full border border-solid border-[1px] border-[#2ED8CF] flex items-center justify-center gap-2">
            <Star className="text-special" />
            <p className="text-special">Your #1 Rated E-learning platform...</p>
          </div>

          <div className="mt-6">
            <h1 className="text-primary text-5xl font-extrabold">
              Learn.Build .Grow.
            </h1>
            <h3 className="text-secondary mt-3">
              A better place for students to learn and teachers to share their
              knowledge. Master modern technical skills with industry experts.
            </h3>
          </div>

          <div className="flex items-center justify-start gap-4 mt-2">
            <button className="btn-primary rounded-full px-4 cursor-pointer">
              Start Learning
            </button>
            <button className="btn-secondary rounded-full px-4 cursor-pointer flex gap-2">
              <PlayCircle />
              Learn More
            </button>
          </div>

          <div className="flex mt-4 items-center justify-start gap-8">
            <div className="flex items-center justify-center -gap-2">
              {profileImages.map((items, index) => (
                <Image
                  key={index}
                  src={items}
                  alt="Profile"
                  width={40}
                  height={40}
                  className={`rounded-full ${index !== 0 && "-ml-2"} border border-solid  border-1px border-[#2ED8CF]`}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-3">
                <Star className="text-special" />
                <p className="text-secondary">4.9/5.0</p>
              </div>
              <p className="text-secondary">10,000+ Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image src={"/images/Logo.png"} alt="Logo" width={400} height={400} />
        </div>
      </div>

      {/* Perfomance section */}

      <div className="grid grid-cols-4 bg-cyan-400/10 w-screen h-full py-6">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-special font-bold text-2xl">10K+</h2>
            <p className="text-secondary font-light">Students</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-special font-bold text-2xl">500+</h2>
            <p className="text-secondary font-light">Courses</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-special font-bold text-2xl">150+</h2>
            <p className="text-secondary font-light">Teachers</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-special font-bold text-2xl">50+</h2>
            <p className="text-secondary font-light">Categories</p>
          </div>
        </div>
      </div>

      {/* Courses section  */}

      <div className="px-10 py-10">
        <h1 className="text-primary font-bold text-4xl">Top Rated Courses</h1>
        <p className="text-secondary font-light">
          Discover the most popular courses on our platform
        </p>

        <div className="grid grid-cols-4 gap-3">
          {sample_courses.map((items, index) => (
            <Course_card
              key={index}
              title={items.title}
              description={items.shortDescription}
              thumbnail={items.thumbnail}
              ratings={items.rating}
              price={items.price}
              discountPrice={items.discountPrice}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center px-10 py-6">
        <div className="text-center">
          <h1 className="text-primary font-bold text-4xl px-10">
            What We Offer
          </h1>
          <p className="text-secondary font-light px-10">
            Explore our wide range of courses and learning resources <br/> to enhance
            your skills and knowledge.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {offers.map((items, index) => (
          <div key={index} className="flex items-center justify-center py-4">
            <Image src={items} alt={`Offer ${index + 1}`} width={800} height={400} />
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}
