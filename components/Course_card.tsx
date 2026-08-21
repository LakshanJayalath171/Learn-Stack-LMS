import { Computer, Star } from "lucide-react";
import Image from "next/image";

const Course_card = ({title,description,thumbnail,ratings,price,discountPrice}) => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden rounded-2xl mt-6">
        <div className="w-full aspect-video relative">
          <Image src={thumbnail} alt="Course" fill className="object-cover"/>
        </div>
        <div className="p-4 bg-[#2ED8CF]/10 rounded-br-2xl rounded-bl-2xl">
          <div className="flex items-center justify-start gap-2">
            <Star className="text-amber-400"/>
            <p className="text-primary font-semibold">4.8</p>
            <p className="text-secondary">{ratings}</p>
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{description.length > 30 ? description.substring(0, 30) + "..." : description}</p>

          <hr className="text-secondary mt-3"/>

          <div className="flex items-center justify-start gap-3 mt-4 px-4 py-2">
            <h2 className="text-special font-bold">$ {discountPrice}</h2>
            <button className="btn-primary rounded-full cursor-pointer">View Course</button>
          </div>
        </div>
    </div>
  )
}

export default Course_card