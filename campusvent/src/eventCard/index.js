import React from 'react'

const EventCard = ({img}) => {
    return (
        <div className='event-card'>
            <img src={img} alt='' />
            <div className='event-info'>
                <p>Fri, July 25, 2021</p>
                <h3>Remote Design Sprint</h3>
                <p>Remote sesning klgfjoijpjkalkjfkojo  pojgpljfkjg kjgiailjg kpgk g kginsgkkg klslgl </p>
            </div>
            <div className='event-extras'>
                <div className='icons'>

                </div>
                <p className='event-time'>10:00am</p>
                <p className='event-price'>Free</p> 
            </div>
        </div>
    )
}

export default EventCard;
