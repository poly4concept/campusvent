import React from 'react'
import { useSelector } from 'react-redux'
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import EventCard from '../eventCard';
import './events.css'

const Events = ({ bookmark }) => {
    const events = useSelector(state => state.events)
    const bookmarkedEvents = events.filter(event => event.bookmarked === true)
    const usedEvents = bookmark ? bookmarkedEvents : events 

    return (
        <div className='events-container' >
            {usedEvents.length === 0 ? <Hypnosis color='#df861d' /> : (    
                        usedEvents.map(item => (
                                <EventCard key={item._id} item={item} className='events-card' />
                        ))     
                )
            }
        </div>
      )
}

export default Events
