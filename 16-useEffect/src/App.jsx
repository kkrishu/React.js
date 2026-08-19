import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
const App = () => {
  const [num,setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  return (
    <div>
      <h1>num{num}</h1>
      <h1>num2{num2}</h1>

      <button
      onMouseEnter={()=>{
        setNum (num + 1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}
      
      >HOVER</button>
      
    </div>
  )
}

export default App
