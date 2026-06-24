
import Section1 from './components/section-1/section1'
import Section2 from './components/section-2/section2'
const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1764983255241-3768b4df0c57?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied',

    },
    {
      img:'https://images.unsplash.com/photo-1764795850459-3e73e5013ae8?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'neon',
      tag:'Underserved',

    },
    {
      img:'https://plus.unsplash.com/premium_photo-1681407252047-8f4a54159d83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbmFuY2lhbCUyMHNlcnZpY2V8ZW58MHwxfDB8fHww',
      intro:'',
      color:'white',
      tag:'Underbanked',

    },
    {
      img:'https://images.unsplash.com/photo-1751912455778-6ec1feabefaa?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Served',
    }
  ]
  
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
