import React from 'react'
import { useSelector } from 'react-redux'
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import EventCard from '../eventCard';
import './events.css'

const Events = () => {
    const events = useSelector(state => state.events)
    // console.log(events);

    return (
        <div className='events-container' >
            {events.length === 0 ? <Hypnosis color='#df861d' /> : (    
                        events.map(item => (
                                <EventCard key={item._id} item={item} className='events-card' />
                        ))     
                )
            }
        </div>
      )
}

export default Events
