import React from 'react'
import { MdOpenInNew } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import EventImg from './Artboard 2.png'
import './eventCard.css' 

const EventCard = ({item}) => {
    console.log(item);
    const { title, message, eventTime, ticketPrice, eventImage } = item;
    return (
        <div className='event-card'>
            <div className='event-img'>
                <img src={eventImage} alt='' />
            </div>
            <div className='event-info'>
                <span className='event-date'>Fri, July 25, 2021</span>
                <span className='event-title'>{ title }</span>
                <span className='event-message'> {message} </span>
            </div>
            <div className='event-extras'>
                <div className='icons'>
                    <MdOpenInNew className='icon'/>
                    <BsBookmark className='icon'/>
                </div>
                <p className='event-time'> {eventTime}am </p>
                <p className='event-price'>{ ticketPrice === 0 ? `Free` : `$ ${ticketPrice}` }</p> 
            </div>
        </div>
    )
}

export default EventCard;
