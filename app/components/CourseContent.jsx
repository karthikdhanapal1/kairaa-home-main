import React, { useState } from "react"

export default function CourseContent({ id, title, desc,content }) {
  const [toggle, setToggle] = useState(false)

  const onHandlestate = () => {
    setToggle(!toggle)
  }

  return (
    <article className="p-2 px-5 pt-4 text-left border rounded-md">
      <div
        onClick={() => onHandlestate()}
        className="flex flex-row justify-between cursor-pointer"
      >
        <h2
          className="px-4 text-2xl font-bold text-center text-black lg:text-lg font-Poppins"
          onClick={() => onHandlestate()}
        >
          {title}
        </h2>

        <button
          className="w-12 h-12 text-lg font-semibold text-white text-gray-700 bg-blue-600 rounded-full lg:text-3xl"
          onClick={() => onHandlestate()}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>

      {toggle && (
        <p className="text-sm text-gray-600 lg:text-base font-Poppins">
          {
            content.map((content,i)=>(
                <li key={i}>{content}</li>
            ))
          }
        </p>
      )}
    </article>
  )
}