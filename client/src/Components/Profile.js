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

      <div className='pfp-container'>
        <div className='pf-pic'>
          <div className='full-nm'>Full Name</div>
          <div className='usr-nm'>Username</div>
        </div>

      </div>
      
      <div className='info-box'>
        <div className="title-container">
          <div className="post-title">Information</div>
          <div className="post-underline-info"></div>
        </div>
      </div>

      <div className='bio-box'>
        <div className='title-container'>
          <div className='post-title'>Bio</div>
          <div className='post-underline-bio'></div>
        </div>
      </div>

      <div className='recent-box'>
        <div className='title-container'>
          <div className='post-title'>Recent</div>
          <div className='post-underline-recent'></div>
        </div>
      </div>


    </div>
  )
}

export default Profile;