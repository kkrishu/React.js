import React from 'react'

const App = () => {
  const SubmitHandler = (data) =>{
    data.preventDefault()
    console.log("form submited")
  }
  return (
    <div>
      <form onSubmit={(data) =>{
        SubmitHandler(data)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
