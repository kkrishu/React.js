import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'

const page1Content = (data) => {
  
  return (
    <div className='pb-15 pt-6 flex items-center gap-10  h-[90vh] bg-white px-18'>
      <LeftContent/>
      <RightContent users = {data.users}/>
    </div>
  )
}

export default page1Content
