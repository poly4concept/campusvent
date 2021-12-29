import React from 'react'
import './sidebar.css'
import ProfilePic from './poly4 logo.png'
import { FaHome } from "react-icons/fa"; 
import { BsFillBookmarkPlusFill } from "react-icons/bs"; 
import { HiOutlineTicket } from "react-icons/hi"; 
import { CgMoreO, CgMoreAlt } from "react-icons/cg";
import { HiPencil } from "react-icons/hi";


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <a href="#home" className='logo' >CampusVent</a>
            <nav className='nav-options'>
                <ul class="navbar">
                    <li className="nav-item">
                        <FaHome className='nav-icon' />
                        <a href="#home" class="item-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <BsFillBookmarkPlusFill className='nav-icon' />
                        <a href="#bookmark" className="item-link">Bookmark</a>
                    </li>
                    <li className="nav-item">
                        <HiOutlineTicket className='nav-icon' />
                        <a href="#ticket" className="item-link">Notification</a>
                    </li>
                    <li className="nav-item">
                        <CgMoreO className='nav-icon' />
                        <a href="#ticket" className="item-link">Notification</a>
                    </li>
                    <a href="#create" className="create-btn"><HiPencil className='create-icon' /><div className="text">Create Event</div></a>
                </ul>
                <a href="#profile" className="profile-btn">
                    <div className="profile-info">
                        <img src={ProfilePic} alt="" className="profile-img" width="35" height="35"/>
                        <div>
                        <p className="name">Sadee</p>
                        <p className="username">@codewithsadee</p>
                        </div>
                    </div>
                    <div className="option-icon">
                        <CgMoreAlt className='icon'/>
                    </div>
                </a>
            </nav>

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
    )
}

export default Sidebar
