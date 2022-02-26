import React, { useState } from 'react'
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { FaHome } from "react-icons/fa"; 
import { BsFillBookmarkPlusFill } from "react-icons/bs"; 
import { HiOutlineTicket } from "react-icons/hi"; 
import { CgMoreO, CgMoreAlt } from "react-icons/cg";
import { HiPencil } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { LOG_OUT } from '../../constants/actionTypes';

import './sidebar.css'
// import ProfilePic from './poly4 logo.png'


const Sidebar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    const isMenuOpen = Boolean(anchorEl);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch({ type: LOG_OUT });
        navigate('/')
        setUser(null)
    }
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu anchorEl={anchorEl}
        sx={{ padding: '50px',}}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right"
        }} id={menuId} keepMounted
        transformOrigin={{
            vertical: "top",
            horizontal: "right"
        }} open={isMenuOpen} onClose={handleMenuClose} className='profile-dropdown' >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); handleLogOut()}}>Log Out</MenuItem>
        </Menu>
    );


    return (
        <>
            <div className='sidebar'>
                <Link to="home" className='nav-logo logo' >campus<span>vent</span></Link>
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
                    <a href='#k' onClick={handleProfileMenuOpen} className="profile-btn">
                        <div className="profile-info">
                            <Avatar className='avatar' src={user?.result?.imageUrl} alt={user?.result?.familyName}>{user?.result?.givenName.charAt(0) }</Avatar>
                            <div>
                            <p className="name">{user?.result.givenName}</p>
                                <p className="username">{`@${user?.result?.familyName}`}</p>
                            </div>
                        </div>
                        <div className="option-icon">
                            <CgMoreAlt className='icon'/>
                        </div>
                    </a>
                </nav>
                {renderMenu}
                {/* <div className='nav-profile'>
                    <div className='profile-img'>
                    <img src={ProfilePic} alt='profile' />
                    </div>
                    <div className='profile-info'>
                        <p className='profile-username'>Poly4</p>
                        <p>olajuwonmubarak355@gmail.com</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Sidebar
