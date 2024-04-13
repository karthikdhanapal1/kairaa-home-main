"use client" 

import { AlignJustify, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const navLink = [
  {
    id:5,
    name:"Home",
    path:"/home"
  },
  // {
  //   id:1,
  //   name:"Home",
  //   path:"/home"
  // },
  {
    id:2,
    name:"Courses",
    path:"/courses"
  },
  {
    id:3,
    name:"About Us",
    path:"/about"
  },
  {
    id:4,
    name:"Contact us",
    path:"/contact"
  },

  

]

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen,setIsOpen] = useState(false)
  return (

    <nav className='' >
      <div className='justify-between hidden px-10 py-2 text-white bg-blue-600 md:flex'>
        <h1>Mon - Sat : 9AM IST - 7PM IST</h1>
        <h1>Call: +91-9535395350</h1>
        <h1>Email: Support@techcrazetechnologies.com</h1>
      </div>
      <div className='flex items-center justify-between px-4 py-2 bg-slate-50'>
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Next.js Logo"
          width={150}
          height={150}
          priority
        />
      <ul className='flex-col justify-between hidden w-2/4 md:flex md:flex-row '>
        {
          navLink.map((link)=>(
              <Link className={`${pathname === link.path ? 'active' : 'font-semibold text-slate-700 font-sans'}`} href={link.path} key={link.id}>{link.name}</Link>
          ))
        }
      </ul>
      <ul className='flex gap-3 '>
        <button className='p-2 border-2 border-blue-300 rounded-lg'>Log In</button>
        <button className='p-2 text-white bg-blue-400 border-2 border-blue-300 rounded-lg'>Sign Up</button>
      </ul>
      <ul className='md:hidden'>
        <Menu onClick={()=>{
          setIsOpen(!isOpen);
          console.log(isOpen);
          }} />
      </ul>
      </div>
      {/* <div className={`${isOpen===true ?"bg-green-200":"bg-blue-200"}`}> */}
        <div className={`md:hidden h-screen w-3/4 absolute right-0 top-30 transition duration-150 ease-in-out ${
                    isOpen === true
                      ? 'border-l-2 border-primary bg-blue-200'
                      : 'hidden'
                  }`}>
          <div className='flex flex-col border'>
          {
          navLink.map((link)=>(
              <Link onClick={()=>setIsOpen(!isOpen)} className={`p-4 border ${pathname === link.path ? 'active' : ''}`} href={link.path} key={link.id}>{link.name}</Link>
          ))
        }
          </div>
        </div>
      {/* // </div> */}

      
    </nav>
    
  )
}

export default Navbar
