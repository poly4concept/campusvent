import React from 'react'
import Sidebar from '../../Components/sidebar'
import Events from '../../Components/events'
import './bookmark.css'

const Bookmark = () => {
  return (
      <div className='bookmark-container'>
          <Sidebar />
          <div className="bookmarks">
              <h2>Bookmarks</h2>
              <div className="bookmarks-div">
                  <Events bookmark/>
              </div>
          </div>
    </div>
  )
}

export default Bookmark