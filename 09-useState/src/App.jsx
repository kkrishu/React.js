// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setNum ] = useState(0)
//   const [user, setUser ] = useState("krishu")

//   function changeNum(){
//     setNum(1)
//     setUser("KRISHUUUU")
//   }

//   return (
//     <div>
//       <h1>Value of a is {num} <br /> value of user is {user} </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App








import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function Jump5Num(){
    setNum(num+5)
  }
  function decrease5(){
    setNum(num-5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={Jump5Num}>Increase By 5</button>
      <button onClick={decrease5}>Decrease by 5</button>
      
    </div>
  )
}

export default App
