import React from 'react'
import Card from './components/card'

const App = () => {
  return ( 
    <div className='parent'>
      <Card user='Krishu' age={19} img = 'https://images.unsplash.com/photo-1774288904168-9a593abb0ff8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Arshey' age={20} img = 'https://images.unsplash.com/photo-1770723963970-ace02c7db50e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      
    </div>
  )
}

export default App
