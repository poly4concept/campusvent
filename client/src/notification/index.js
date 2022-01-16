import React from 'react'
import './notification.css'
import Organizer1 from '../assets/Member_10.png'
import Organizer2 from '../assets/Member_8.png'
import Button from '../button'

const Notification = () => {
    return (
        <div className='notification'>
            <div className='notification-container'>
                <div className='popular-box'>
                    <h5>Popular Events</h5>
                    <div className='popular-event'>
                        <h6>1. NextJs, The modern React framework</h6>
                        <p>286 people attending</p>
                    </div>
                    <div className='popular-event'>
                        <h6>2. React Native, the advanced part</h6>
                        <p>120 people attending</p>
                    </div>
                    <div className='popular-event'>
                        <h6>1. NextJs, The modern React framework</h6>
                        <p>286 people attending</p>
                    </div>
                    <a href='seemore' className='see-more'>See more</a>
                </div>

                <div className='organizer-box'>
                    <h5>Organizers to follow</h5>
                    <div className='organizer-div'>
                        <img src={Organizer1} alt="organizer1" className="organizer-img" width="45" height="45" />
                        <div  className='organizer-info'>
                            <p className='organizer-name'>Kim Anderson</p>
                            <p className='organizer-field'>Product Management</p>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className='organizer-div'>
                        <img src={Organizer2} alt="organizer2" className="organizer-img" width="45" height="45" />
                        <div className='organizer-info'>
                            <p className='organizer-name'>Dev Phenom</p>
                            <p className='organizer-field'>Frontend Development</p>
                            <button>Follow</button>
                        </div>
                    </div>
                    <a href='seemore' className='see-more'>See more</a>
                </div>
            </div>
        </div>
    )
}

export default Notification
