import React from 'react'
import RightCardContent from './rightCardContent'

const rightCard = (data) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={data.img} alt="" />
     <RightCardContent id={data.id} tag = {data.tag}/>
    </div>
  )
}

export default rightCard
