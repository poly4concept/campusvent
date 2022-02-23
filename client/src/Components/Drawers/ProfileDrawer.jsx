import React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import { FaHome } from "react-icons/fa"; 
import { BsFillBookmarkPlusFill } from "react-icons/bs"; 
import { HiOutlineTicket } from "react-icons/hi"; 
import { CgMoreO } from "react-icons/cg";
import { HiPencil } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ProfileDrawer = ({openState, closeDrawer, openDrawer}) => {
  return (
      <>
          <SwipeableDrawer anchor='left' open={openState} onClose={closeDrawer} onOpen={openDrawer} >
              <Box role="presentation" sx={{ width: '75vw' }} >
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '30px', px: '20px' }} >
                      <Link to="home" className='nav-logo logo home-logo' >campus<span>vent</span></Link>
                      <CloseIcon onClick={closeDrawer} sx={{ fontSize: '25px', cursor: 'pointer' }} />
                  </Box>
                  <nav className='nav-options'>
                    <ul class="navbar">
                        <li className="nav-item">
                            <FaHome className='nav-icon' />
                            <Link to="home" class="item-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <BsFillBookmarkPlusFill className='nav-icon' />
                            <Link to="bookmark" className="item-link">Bookmark</Link>
                        </li>
                        <li className="nav-item">
                            <HiOutlineTicket className='nav-icon' />
                            <Link to="ticket" className="item-link">Notification</Link>
                        </li>
                        <li className="nav-item">
                            <CgMoreO className='nav-icon' />
                            <Link to="ticket" className="item-link">More</Link>
                        </li>
                        <Link to="create" className="create-btn"><HiPencil className='create-icon' /><div className="text">Create Event</div></Link>
                    </ul>
            </nav>
              </Box>
          </SwipeableDrawer>
      </>
  )
}

export default ProfileDrawer