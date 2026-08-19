import React, { useState } from 'react'

const App = () => {
  const [title , setTitle]= useState('')
  const [Detail , setDetail]=useState('')
  const [task , setTask]=useState('')


  const submitHandler = (data)=>{
    data.preventDefault()

    const copyTask = [...task]

    copyTask.push({title,Detail})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  return (
    <div className='h-screen lg-flex bg-black text-white '>

      <form onSubmit={(data)=>{
        submitHandler(data)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
        
        {/* phela input */}
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
            value={title}
            onChange={(data) => {
              setTitle(data.target.value)
            }}
          />
          {/* detail wala */}
          <textarea
            type="text"
            className='px-5 h-40 py-2 border-2 rounded w-full outline-none flex items-start flex-row font-medium'
            placeholder='Write Details here' 
            value={Detail}
            onChange={(data) => {
              setDetail(data.target.value)
            }}
          />

          <button className='bg-white text-black px-5 py-2 rounded w-full outline-none font-medium active:scale-95'>Add Note</button>


      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
       <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-6 h-full overflow-auto'>
          {task.map(function(){

            return 'hero'
          })}
        </div>

      </div>

    </div>
  )
}

export default App
