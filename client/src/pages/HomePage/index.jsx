import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Sidebar from '../../Components/sidebar';
import Avatar from '@mui/material/Avatar';
import Feed from '../../Components/feed';
import Notification from '../../Components/notification';
import ProfileDrawer from '../../Components/Drawers/ProfileDrawer'
import './home.css'


const HomePage = () => {
    const [openProfileInfo, setOpenProfileInfo] = useState(false);
    const user = JSON.parse(localStorage.getItem("profile"))

    const handleOpenProfileInfo = () => {
        setOpenProfileInfo(true)
    }
    const handleCloseProfileInfo = () => {
        setOpenProfileInfo(false)
    }
    
 
    return (
        <>
            <ProfileDrawer openState={openProfileInfo} openDrawer={handleOpenProfileInfo} closeDrawer={handleCloseProfileInfo} />
            <div className='home'>
                <Box className='mobile-header'>
                    <Avatar  onClick={handleOpenProfileInfo} className='avatar' src={user?.result?.imageUrl} alt={user?.result?.familyName}>{user?.result?.givenName.charAt(0)}</Avatar>
                    <h1>Home</h1>
                </Box>
                <Sidebar/>
                <Feed />
                <Notification/>
            </div>
        </>
    )
}

export default HomePage
