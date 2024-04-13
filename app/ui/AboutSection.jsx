import Image from 'next/image'
import React from 'react'

function AboutSection() {
  return (
    <section className='px-5 md:flex justify-between md:my-10 md:px-28 py-5'>
          <Image
          src="/about/about.png"
          width={500}
          height={500}
          alt="Picture of the author"/>

          <div className='md:w-1/2 mt-5 text-center pt-3'>
            <p className='md:text-2xl font-semibold text-blue-600'>About TechCraze Technologies</p>
            <h1 className='text-3xl md:text-4xl font-bold'>We Are Excellent Choice To Learning New Skills</h1>
            <p className='pt-5 text-base'>TechCraze Technologies is a leading online learning center that offers a wide range of courses and programs to students around the world. With its focus on flexibility and support, TechCraze Technologies has become a popular choice for those looking to advance their education or learn new skills.</p>
            <p className='pt-5 font-semibold'> Students have access to a wide range of learning resources that are designed to help them fully understand and retain the material.</p>
          </div>
      </section>
  )
}

export default AboutSection

