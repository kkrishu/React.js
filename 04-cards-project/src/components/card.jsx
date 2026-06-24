import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (data) => {
  return (
          <div className="card">

        {/* TOP */}
        <div className="top">
          <img src={data.logo} alt="" />
          
          <button className="saveBtn">
            Save <Bookmark size={16} />
          </button>
        </div>

        {/* CENTER */}
        <div className="center">
          <h3>{data.company} <span>{data.posted}</span></h3> 

          <h2>{data.role}</h2>

          <div className="tags">
            <h4>{data.tag1}</h4>
            <h4>{data.tag2}</h4>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom">
          <div>
            <h3>{data.salary}</h3>
            <p>{data.location}</p>
          </div>

          <button className="applyBtn">Apply Now</button>
        </div>

      </div>
  )
}

export default Card
