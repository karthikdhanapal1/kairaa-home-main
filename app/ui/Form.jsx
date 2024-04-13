import React from 'react'

function Form() {
  return (
    <div>
        <form className="w-full max-w-2xl p-6 bg-white shadow-xl required rounded-20px " >
        <h1 className='pb-6 text-2xl font-bold'>Fill out this form</h1>

        <div className="flex flex-row mb-6 -mx-3">




          <div className="w-full px-3 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase" htmlFor="hires">
              Your Name <span className="text-red-500"> *</span>         </label>
            <input placeholder="name" className="block w-full px-4 py-3 mb-3 leading-tight border border-black rounded-md appearance-none focus:outline-none " name="from_name" required type="text" />
          </div>

          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase" htmlFor="hires">
              Email Address<span className="text-red-500"> *</span> 
            </label>
            <input placeholder="email" className="block w-full px-4 py-3 mb-3 leading-tight border border-black rounded-md appearance-none focus:outline-none " name="from_email" type="email" required />
          </div>

        </div>
        <div className="flex flex-row mb-6 -mx-3">

          <div className="w-full px-3 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase" htmlFor="hires">
              Phone Number<span className="text-red-500"> *</span> 
            </label>
            <input placeholder="Phone Number" className="block w-full px-4 py-3 mb-3 leading-tight border border-black rounded-md appearance-none required focus:outline-none " name="from_phone_number" required type="text" />
          </div>

        </div>
        


        <div className="flex flex-wrap mb-4 space-y-2">
        {/* <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="hires">
              Where do you want to study ?
            </label> */}
          <div className="w-full">
            <textarea placeholder="How can we help you ?" className="block w-full px-6 py-3 mb-3 leading-tight border border-black rounded-md appearance-none h-36 focus:outline-none" name="message" required />
          </div>
        </div>
        <div className="w-1/2">
          <button type="submit" className="w-full px-3 mt-2 py-2.5 flex items-center justify-center text-sm rounded-md text-white font-Poppins  md:text-lg  bg-blue-600">Submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default Form
