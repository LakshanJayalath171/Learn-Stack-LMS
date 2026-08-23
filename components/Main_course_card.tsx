import { Clock, Heart, Star } from 'lucide-react'
import Image from 'next/image'


const Main_course_card = ({title,price,level,instructor,duration,category,thumbnail,ratings}) => {
  return (
    <div className='flex flex-col'>
        <div className='relative aspect-video w-full rounded-lg overflow-hidden'>
            <Image src={thumbnail} alt={title} fill className='rounded-lg object-cover'/>
            <div className='absolute top-2 right-2 apple p-1 cursor-pointer rounded-full'>
                <Heart/>
            </div>

            <div className='bg-amber-500 rounded-[8px] absolute bottom-2 left-2 px-3 py-1 text-gray-900 font-medium text-[10px]'>
                TOP RATED
            </div>
        </div>
        <div className='apple rounded-bl-2xl rounded-br-2xl px-2 py-2'>
            <p className='text-sm font-medium text-secondary'>{category} . {level}</p>
            <h2 className='text-lg font-bold text-primary'>{title}</h2>
            <p className='text-gray-600 text-sm'>{instructor}</p>

            <div className='flex items-center justify-start gap-2'>
                <p className='text-amber-500'>{ratings}</p>
                <div className='flex items-center justify-center py-3'>
                    <Star className='text-amber-500 text-sm'/>
                    <Star className='text-amber-500 text-sm'/>
                    <Star className='text-amber-500 text-sm'/>
                    <Star className='text-amber-500 text-sm'/>
                </div>
                <p className='text-secondary text-sm'>(1,234)</p>
            </div>
            <hr className='text-secondary'/>

            <div className='flex items-center justify-between py-3'>
                <div className='flex items-center justify-start gap-2'>
                    <Clock className='text-secondary text-sm'/>
                    <p className='text-secondary text-sm'>{duration}</p>
                </div>

                <h2 className='text-lg font-bold text-special'>${price.toFixed(2)}</h2>
            </div>
        </div>
    </div>
  )
}

export default Main_course_card