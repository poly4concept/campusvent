import React from 'react'
import './sidebar.css'
import { FaHome } from "react-icons/fa"; 
import { BsFillBookmarkPlusFill } from "react-icons/bs"; 
import { HiOutlineTicket } from "react-icons/hi"; 
import { CgMoreO, CgMoreAlt } from "react-icons/cg";
import { HiPencil } from "react-icons/hi";
import { Link } from 'react-router-dom';
import ProfilePic from './poly4 logo.png'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to="home" className='logo' >campus<span>vent</span></Link>
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
                        <Link to="ticket" className="item-link">Notification</Link>
                    </li>
                    <Link to="create" className="create-btn"><HiPencil className='create-icon' /><div className="text">Create Event</div></Link>
                </ul>
                <Link to="profile" className="profile-btn">
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
                </Link>
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
