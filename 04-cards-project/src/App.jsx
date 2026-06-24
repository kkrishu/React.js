import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/card'


const App = () => {
  const jobsData = [
  {
    id: 1,
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    posted: "2 days ago",
    role: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    companyName: "Google",
    posted: "1 day ago",
    role: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$80/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
    companyName: "Microsoft",
    posted: "5 days ago",
    role: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    posted: "3 days ago",
    role: "Product Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    salary: "$150/hr",
    location: "Work from Home"
  }
];
console.log(jobsData)

  return (
    <div className='parent'>
      {jobsData.map(function(data){

        return <Card 
        logo = {data.logo}
        company = {data.companyName} 
        posted ={data.posted}
         role = {data.role} 
         tag1 = {data.tag1} 
         tag2 = {data.tag2} 
         salary = {data.salary} 
         location = {data.location}
         />
      })}
    </div>
  )
}

export default App

