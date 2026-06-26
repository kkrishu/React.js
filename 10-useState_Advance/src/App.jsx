import { User } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {
  // const[num , setNum]= useState({User: "Sarthak" , age:'20'})

  // const btnClick = ()=>{
  //   const newNum = {...num};
  //   newNum.User = "KRISHU"
  //   setNum(newNum)
    const[num , setNum]= useState([10,20,30])

    const btnClicked = () =>{
      const newNum = [...num]
      newNum.push(99)
      setNum(newNum)
    }
  
  return (
    <div>
      {/* <h1>{num.User},{num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
