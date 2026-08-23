"use client"

import { useParams } from 'next/navigation';


const course_details = () => {
    const {id} = useParams();
  return (
    <div>{"course "+ id}</div>
  )
}

export default course_details