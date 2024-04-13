import React from 'react'
import Title from './Title'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const activities = ['Upcoming Events','Seminars','Performace']

const links = ['Terms & Conditions','Refund Policy','Privacy Policy']

const resources = [
  {
    id:1,
    name:"Latest Blogs",
    path:"/blogs"
  },
  {
    id:2,
    name:"FAQ's",
    path:"/faq"
  },
  {
    id:3,
    name:"Privacy Policy",
    path:"/policy"
  },
  {
    id:4,
    name:"Our Terms",
    path:"/terms"
  },

]

const address = [
  {
    id:1,
    name:"support@techcrazetechnologies.com",
    logo:<Mail />
  },
  {
    id:2,
    name:"+91-953-539-5350",
    logo:<Phone />
  },
  {
    id:1,
    name:"5/105, 1nd floor, pillayar koil street,bangalore - 600100.",
    logo:<MapPin />
  },
]


function Footer() {
  return (
    <footer className='px-6 pt-10 pb-10 font-sans text-center text-white bg-blue-900 md:px-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        <div className='w-full pr-4 text-left'>
          <Title>About Us</Title>
          
    
          <p className='pt-2'>TechCraze Technologies is a top-notch online learning 
            center that offers a wide range of courses.</p>
        </div>
        <div className='w-full text-left'>
          {/* <Title>Quick Links</Title> */}
          <Title>Quick Links</Title>
          <ul className='text-left'>
            {links.map((activity)=>(
              <li key={activity} className='pt-2'>{activity}</li>
            ))}
          </ul>
        </div>
        <div className='text-left'>
          <Title>Resources</Title>
          <ul className='flex flex-col '>
            {resources.map((activity)=>(
              <Link href={activity.path} key={activity.id} className='md:pt-2'>{activity.name}</Link>
            ))}
          </ul>
        </div>
        <div className='w-full text-left'>
          <Title>Get in Touch</Title>
          <ul>
            {address.map((activity)=>(
              <li key={activity.id} className='flex '>
                <div className='flex gap-2 mt-2'>
                  <p>{activity.logo}</p>
                  <p>{activity.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='items-center justify-center mt-8 text-center md:flex'>
      © 2024 TechCrazeTechnologies.com. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
