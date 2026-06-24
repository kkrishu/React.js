import React from 'react'
import HeroText from './heroText'
import Arrow from './arrow'

const leftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between  '>
        
      <HeroText/>
      <Arrow/>
        
    </div>
  )
}

export default leftContent
