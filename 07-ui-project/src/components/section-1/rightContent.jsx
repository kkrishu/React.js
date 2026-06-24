import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './rightCard'

const rightContent = (data) => {
    console.log(data.color)

  return (
    <div id='right' className='h-full overflow-x-auto w-2/3 p-5 flex flex-nowrap gap-10 '>
        {data.users.map(function(data,idx){
            return <RightCard key={idx} id = {idx} img = {data.img} tag = {data.tag}/>
        })}
    </div>
  )
}

export default rightContent
