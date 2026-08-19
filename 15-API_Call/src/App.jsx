import React,{useState} from 'react'
import axios from 'axios'

const App = () => {
  
  const [data, setData] = useState([])

  /*const getData = async () =>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data); 
  }*/ 
 /*const getData = async() => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response.data);

 }*/

  const getData = async() => {

    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>GET DATA</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Heyy {elem.author}{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
