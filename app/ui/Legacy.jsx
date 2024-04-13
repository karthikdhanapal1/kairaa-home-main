import { BookOpenText, GraduationCap, MonitorPlay } from 'lucide-react'
import React from 'react'

function Legacy() {
  return (
    <section className='px-5 pt-10 pb-10 text-white bg-blue-900 justify-evenly md:flex md:px-10'>
        <div className='flex items-center gap-3 p-3'>
            <GraduationCap size={200}/>
            <div>
                <h1 className='text-2xl font-semibold'>Learn technologies From Experts</h1>
                <p className='pt-4 text-base'>Blockchain courses we provide students with in-depth, specialized knowledge.</p>
            </div>
        </div>
        <div className='flex items-center gap-3 p-3 '>
            <BookOpenText size={200}/>
            <div>
                <h1 className='text-2xl font-semibold'>Over 30+ High Quality Topics</h1>
                <p className='pt-4 text-base'>Topics cover a wide range of subjects, from blockchain and and much more.</p>
            </div>
        </div>
        <div className='flex items-center gap-3 p-3'>
            <MonitorPlay size={200}/> 
            <div>
                <h1 className='text-2xl font-semibold'>Event & Program Video Update</h1>
                <p className='pt-4 text-base'>TechCraze Technologies keeps its students informed about events and programs.</p>
            </div>
        </div>
    </section>
  )
}

export default Legacy
