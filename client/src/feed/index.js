import React from 'react'
import './feed.css'
// import EventImg from './Artboard 2.png'
import { useSelector } from 'react-redux';
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import Events from '../events';

const Feed = () => {
    const events = useSelector(state => state.events)
    console.log(events);
    
    return (
        <div className='feed'>
            <div className='feed-header'>
                <div className='search'>
                    <FiSearch className="search-icon"/>
                    <input type="text" placeholder="Search events"/>
                </div>
                <GoSettings className='settings-icon' />
                <IoMdNotificationsOutline className='notification-icon'/>
            </div>
            <div className='feed-options' >
                <div >All</div>
                <div className='active' >For You</div>
                <div >Following</div>
            </div>
            <div className='events-div'>
                <Events />
            </div>
            
        </div>
    )

}
export default Feed
