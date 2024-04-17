import React from 'react'
import "./Profile.css"
import { Link } from "react-router-dom";



const Profile = () => {
  return (
    <div className='profile-container'>
      <div className="blue-rect">
        <div className="side-btns">
          <Link to="/profile"><button className="profile-btn"></button></Link>
          <Link to="/home"><button className="home-btn"></button></Link>
          <Link to="/search"><button className="search-btn"></button></Link>
          <Link to="/message"><button className="msg-btn"></button></Link>
          <Link to="/"><button className="out-btn"></button></Link>
          <Link to="/post"><button className="post-btn"></button></Link>
        </div>
      </div>
    </div>

  )
}

export default Profile;