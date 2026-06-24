import React from 'react'
import Navbar from './ navbar'
import Page1Content from './page1Content'
const section1 = (data) => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Page1Content users = {data.users}/>
    </div>
  )
}

export default section1
