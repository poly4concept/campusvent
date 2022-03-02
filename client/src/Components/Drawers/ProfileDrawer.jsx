import React, {useState} from 'react'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close';
import { FaHome } from "react-icons/fa"; 
import { BsFillBookmarkPlusFill } from "react-icons/bs"; 
import { HiOutlineTicket } from "react-icons/hi"; 
import { CgMoreO } from "react-icons/cg";
import { HiPencil } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOG_OUT } from '../../constants/actionTypes';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './Drawers.css'

const ProfileDrawer = ({ openState, closeDrawer, openDrawer }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogOut = () => {
        dispatch({ type: LOG_OUT });
        navigate('/')
        setUser(null)
    }
  return (
      <>
          <SwipeableDrawer anchor='left' open={openState} onClose={closeDrawer} onOpen={openDrawer} >
              <Box className='profile-drawer' role="presentation" sx={{ width: '75vw', height: '100vh' }} >
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '30px', px: '20px' }} >
                      <Link to="/home" className='nav-logo logo home-logo' >campus<span>vent</span></Link>
                      <CloseIcon onClick={closeDrawer} sx={{ fontSize: '25px', cursor: 'pointer' }} />
                  </Box>
                  <nav className='nav-options'>
                    <ul class="navbar">
                        <li className="nav-item">
                            <FaHome className='nav-icon' />
                            <Link to="/home" class="item-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <BsFillBookmarkPlusFill className='nav-icon' />
                            <Link to="/bookmark" className="item-link">Bookmark</Link>
                        </li>
                        <li className="nav-item">
                            <HiOutlineTicket className='nav-icon' />
                            <Link to="/notification" className="item-link">Notification</Link>
                        </li>
                        <li className="nav-item">
                            <CgMoreO className='nav-icon' />
                            <Link to="/more" className="item-link">More</Link>
                        </li>
                        <Link to="/create" className="create-btn"><HiPencil className='create-icon' /><div className="text">Create Event</div></Link>
                        </ul>
                  </nav>
                  <Box onClick={handleLogOut} className='log-out'> <BiLogOut className='nav-icon'/>Logout</Box>
              </Box>
          </SwipeableDrawer>
      </>
  )
}

export default ProfileDrawer