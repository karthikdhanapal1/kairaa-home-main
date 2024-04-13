import { AudioWaveform, BookOpenText, HandCoins, Video } from 'lucide-react'
import React from 'react'

const features = [
  {
    id:1,
    name:'Exclusive Courses',
    desc:"TechCraze Technologies: Learn blockchain online at your own pace, with courses for all levels.",
    logo:<BookOpenText size={40} color='blue' className='flex items-center' />
  },
  {
    id:2,
    name:"Video Tutorials",
    desc:"Learn blockchain at your own pace and on your own schedule with our online video tutorials.",
    logo:<Video size={40} color='blue' className='flex items-center' />

  },
  {
    id:3,
    name:"Flexibility",
    desc:"Learn blockchain from anywhere in the world, at any time of day or night, with flexible online video tutorials.",
    logo:<AudioWaveform size={40} color='blue' className='flex items-center' />
  },
  {
    id:4,
    name:"Cost Efficiency",
    desc:"Save money on blockchain education with TechCraze Technologies cost-effective online courses.",
    logo:<HandCoins size={40} color='blue' className='flex items-center' />
  },
]

function Features() {
  return (
    <section className='px-5 pt-10 my-12 text-center md:px-24 bg-slate-100 md:py-10'>
      <h1 className='pb-6 mt-5 text-3xl font-extrabold md:text-4xl '>We Offer Innovative <span className='text-blue-600'>Online Classroom</span> </h1>
      <p className='font-semibold md:text-lg'>TechCraze Technologies outstanding feature is its wide range of educational materials,<br />
         designed to assist students in understanding and retaining the subject by offering a diverse collection of learning resources.</p>
      
      <div className='justify-between pt-10 md:flex'>
        {
          features.map((feature)=>(
            <div key={feature.id} className='pt-4 m-3 border rounded-md md:2/4 lg:w-1/4 p-7 ' >
              <div className='flex items-center justify-center'>{feature.logo}</div>
              <div>
                <h1 className='pb-4 text-xl font-semibold'>{feature.name}</h1>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Features
