import React from 'react'

const card = (data) => {
    console.log(data)
  return (
        <div className="card">
            <img src={data.img} alt="" />
            <h1>{data.user},</h1><br /> <h3>{data.age}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    )
}

export default card
