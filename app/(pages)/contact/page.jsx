import Form from '@/app/ui/Form'
import Header from '@/app/ui/Header'
import Link from 'next/link'
import React from 'react'

const locations = [
  {
    id:1,
    name:"Corporate Office",
    loca:"No 5/105, 1nd floor, Bangalore High way BG- 641002."
  },
// //  {
//     id:2,
//     name:"Chennai Branch",
//     loca:"20/14, Kalaivanar Street, Jafferkhanpet, Chennai - 600083."
//   },
//   {
//     id:3,
//     name:"Trichy Branch",
//     loca:"No 76-O, Jothi complex, Thillai nagar, Pincode - 620018."
//   },
//   {
//     id:4,
//     name:"Tirunelveli Branch",
//     loca:"No 12, Shanthi complex, Vasanth nagar, Pincode - 627005."
//   },
//   {
  //   id:5,
  //   name:"Salem Branch",
  //   loca:"Sairam complex, Veeranganur main road, Thalaivasal. Pincode - 636112."
  // },
   {
    id:6,
    name:"Email Us",
    loca:"support@techcrazetechnologies.com"
  },
  {
    id:7,
    name:"Helpline",
    loca:"+91 95353595350"
  },

]

function Contact() {
  return (
    <>
      <section 
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className={`bg-[url('/banners/contact.png')] h-[60%] p-6 mb-10`}>
          <div className={` mx-auto pt-10 pb-6 flex flex-col-reverse xl:flex-row`} >
            <div className="flex items-center justify-center w-full">
                  <div>
                    <p className="z-50 pb-8 text-3xl font-extrabold text-center text-white uppercase md:text-6xl">
                      Contact Us
                    </p>
                    
                  </div>
            </div>
          </div>

        </section>
        <section >
          <div className='justify-between px-10 md:flex md:px-20'>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2646.915494022643!2d76.9501719398783!3d11.005770379366965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ec698f3dc1%3A0xc0ad951fb5edb38c!2sKairaa%20Tech%20serve%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1710936603899!5m2!1sen!2sin"  height="580" className='bottom-0 md:w-1/2 lg:w-[600px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Form/>
          </div>
          <div className='flex flex-wrap justify-between px-20 mt-7'>
            {
              locations.map((location)=>(
                <div key={location.id} className='w-full p-5 m-2 text-center bg-blue-200 border rounded-lg md:p-10 md:w-1/4 '>
                  <h1 className='pb-3 text-2xl font-extrabold'>{location.name}</h1>
                  <p className='text-wrap'>{location.loca}</p>
                </div>
              ))
            }

          </div>
        </section>
      </>
  )
}

export default Contact
