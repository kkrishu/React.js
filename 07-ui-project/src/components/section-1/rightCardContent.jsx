import React from 'react'

const rightCardContent = (data) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white h-12 w-12 rounded-full flex justify-center items-center text-xl font-bold'>{data.id+1}</h2>
        <div>
          <p className='text-xl text-white mb-13'>Prime customers, <br />that have acces <br />to bank credit and are satisfied <br />with the current <br />product </p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{data.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full '><i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default rightCardContent
