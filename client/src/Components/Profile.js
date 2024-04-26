import React from 'react'
import "./Profile.css"
import { Link } from "react-router-dom";



const Profile = () => {
  if (localStorage.getItem('user') === null) {
    window.location.href = '/'
  }
  return (
    <div className='profile-container'>
      <div className="blue-rect">
        <div className="side-btns">
          <Link to="/profile"><button className="profile-btn" data-testid="profile-button"></button></Link>
            <Link to="/home"><button className="home-btn" data-testid="home-button"></button></Link>
            <Link to="/search"><button className="search-btn" data-testid="search-button"></button></Link>
            <Link to="/message"><button className="msg-btn" data-testid="message-button"></button></Link>
            <Link to="/"><button className="out-btn" data-testid="logout-button"></button></Link>
            <Link to="/post"><button className="post-btn" data-testid="post-button"></button></Link>
        </div>
      </div>
    </div>

  )
}

export default Profile;