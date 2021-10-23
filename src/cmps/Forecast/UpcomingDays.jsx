import React from 'react'
import DaysPreview from './DaysPreview.jsx'

const UpcomingDays = (days) => {

    return (

        <div className="card-list">
             {days && days.days.map((day,idx) => (
                    <DaysPreview {...day} key={idx}/>
                ))}
        </div>
    )
}

export default UpcomingDays
