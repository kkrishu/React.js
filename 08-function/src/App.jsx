// import React from 'react'

// const App = () => {

//   function inputchanging(data){
//     console.log(data)
//   }
//   return (
//     <div>
//       <input onChange={function(data){
//         inputchanging(data.target.value);
//       }} type="text" placeholder='naam bataa oyee'/>
      
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>
      <div onMouseMove={(data)=>{
        console.log(data.clientX);
        
      }} className="box"></div>
    </div>
  )
}

export default App
