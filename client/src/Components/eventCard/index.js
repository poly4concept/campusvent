import React from 'react'
import { MdOpenInNew } from "react-icons/md";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import './eventCard.css' 
import { bookmark } from '../../actions/events';
import { useDispatch } from 'react-redux'; 

const EventCard = ({ item }) => {
    const dispatch = useDispatch()   
    const { title, message, eventTime, ticketPrice, eventImage, bookmarked } = item;


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
                    <MdOpenInNew className='icon' />
                    <div className='bookmark-container' onClick={() => {
                            dispatch(bookmark(item._id),
                            )
                        }} >          
                        {bookmarked ? <BsFillBookmarkFill className='icon' color='#df861d'/> : <BsBookmark color='icon' className='icon' /> }
                    </div>
                </div>
                <p className='event-time'> {eventTime}am</p>
                <p className='event-price'>{ticketPrice === 0 ? `Free` : `$ ${ticketPrice}`}</p> 
            </div>
        </div>
    )
}

export default EventCard;
