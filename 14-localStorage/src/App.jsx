import React from 'react'

const App = () => {
  const age = localStorage.getItem('age')
  const user = localStorage.getItem('user')
  console.log(age)
  console.log(user)
  localStorage.removeItem('user')
  localStorage.clear()
  
  const users = {
    username: 'krishu',
    age: 20 ,
    city:'bareilly'

  }
  localStorage.setItem('users',JSON.stringify(users))
  const usera = JSON.prase(localStorage.getItem('users'))
  console.log(usera);

  return (
    <div>
      app
    </div>
  )
}

export default App

