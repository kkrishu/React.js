import React, { useState } from 'react'

const App = () => {
  const [title , setTitle] = useState('')

  const SubmitHandler = (data) =>{
    data.preventDefault()
    console.log('form submitted by', title);

    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(data) =>{
        SubmitHandler(data)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(data)=>{
          setTitle(data.target.value)
        }}
        />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
