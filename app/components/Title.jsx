import React, { Children } from 'react'

function Title({children}) {
  return (
    <div className='pb-3 text-xl font-bold'>
      {children}
    </div>
  )
}

export default Title
