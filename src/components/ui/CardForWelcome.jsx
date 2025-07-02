import React from 'react'

import {Link} from 'react-router-dom'
export const CardForWelcome = ({icon,box_name,paragraph,link}) => {
  return (
    <Link to={link} className='grid cursor-pointer place-items-center w-[220px] h-[220px] md:w-[300px] md:h-[200px] bg-green gap-3 rounded text-white p-2 hover:bg-green-900 hover:scale-101'>
        <div className="center flex gap-1 flex-col items-center capitalize ">
            <div className='border p-2 text-xl bg-white text-green rounded'>{icon}</div>
            <h3 className=' font-new text-md  md:text-lg'>{box_name}</h3>
            <p className='text-center font-thin  leading-6 text-xs md:text-sm text-gray-300'>{paragraph}</p>
        </div>
    </Link>
  )
}

export default CardForWelcome