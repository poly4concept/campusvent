import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Sidebar from '../../Components/sidebar'
import Events from '../../Components/events'
import ProfileDrawer from '../../Components/Drawers/ProfileDrawer'
import './bookmark.css'

const Bookmark = () => {
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
          <Box className='mobile-header'>
                  <Avatar  onClick={handleOpenProfileInfo} className='avatar' src={user?.result?.imageUrl} alt={user?.result?.familyName}>{user?.result?.givenName.charAt(0)}</Avatar>
                  <h1>Bookmarks</h1>
          </Box>
          <div className='bookmark-container'>
              <Sidebar />
              <div className="bookmarks">
                  <h2>Bookmarks</h2>
                  <div className="bookmarks-div">
                      <Events bookmark/>
                  </div>
              </div>
        </div>
      </>
  )
}

export default Bookmark