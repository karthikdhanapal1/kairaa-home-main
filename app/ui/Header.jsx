import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <main className='items-center justify-between px-5 pt-4 md:px-24 md:flex '>
        <div className='items-center justify-between md:w-2/4 '>
            <div className='pt-10 text-center '>
                <h1 className='text-4xl font-extrabold text-center md:text-5xl'>Discover Blockchain Technology with <span className='text-blue-700 '>TechCraze Technologies</span> Online Courses.</h1>
                <p className='pt-10 md:text-lg'>TechCraze Technologies is the leading provider of online blockchain courses. We offer a wide range of courses to meet the needs of students of all levels of experience, from beginners to advanced learners.</p>
                <Link href='/courses' className='flex items-center justify-center gap-2 p-4 mt-16 text-center text-white bg-blue-600'>Explore Courses<MoveRight /></Link>
            </div>
        </div>
        <div className='p-3 rounded-lg'>
          <Image 
          className='hidden rounded-lg md:flex'
            src="/homee.jpg"
            width={400}
            height={300}
            alt="Picture of the author"/>
        </div>
        
    </main>
  )
}

export default Header
