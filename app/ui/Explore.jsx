"use client"
import { ArrowRightFromLine } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Explore() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses)
      })
  }, [])
  return (
    <div className='py-6 text-center md:py-14'>
      <h1 className='text-3xl font-bold underline md:text-4xl decoration-indigo-500'>Explore Courses</h1>
      <div className='flex flex-wrap items-center justify-evenly pt-14'>
        {
          courses.slice(0, 3).map((course,i)=>(
            <Link key={course.id} href={`/courses/${course.id}`} className='w-auto border rounded-lg'>
          <div>
            <Image
            className='rounded-lg'
            src={course.img}
            width={400}
            height={300}
            alt="Picture of the author"/>
            <div className='p-4'>
              <h1 className='pt-3 text-2xl font-semibold'>{course.name}</h1>
              <p>62 modules</p>
              
            </div>
            
          </div>
        </Link>
          ))
        }
        <Link href='/courses' className='p-5 text-white bg-blue-600 rounded-full'>
          <ArrowRightFromLine/>
        </Link>
      </div>
    </div>
  )
}

export default Explore
