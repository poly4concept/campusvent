import React from 'react'
import Sidebar from '../../Components/sidebar';
import Feed from '../../Components/feed';
import Notification from '../../Components/notification';
import './home.css'


const HomePage = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <Feed />
            <Notification/>
        </div>
    )
}

export default HomePage
