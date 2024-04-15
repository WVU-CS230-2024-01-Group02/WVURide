import React from "react";
import { useState } from "react";
import "./CreatePost.css";
import { Link } from "react-router-dom";
import axios from 'axios';



const CreatePost = () => {
  return (
    <div className="plus-posts-container">
      <div className="blue-rect">
        <div className="side-btns">
          <Link to="/profile"><button className="profile-btn"></button></Link>
          <Link to="/home"><button className="home-btn"></button></Link>
          <Link to="/message"><button className="msg-btn"></button></Link>
          <Link to="/"><button className="out-btn"></button></Link>
          <Link to="/post"><button className="post-btn"></button></Link>
        </div>
      </div>
      <div className="cpost-container">
        <div className="cpost-title-container">
          <div className="cpost-title">Post your Ride</div>
          <div className="cpost-underline"></div>
        </div>
        <form className="create-post-form">
          <label className="divide"></label>
          <input type="text" placeholder="Title" className="title-input" name="title" required/>
          <textarea className="desc-input" name="desc" rows="10" cols="36" placeholder="Description"></textarea>
          <div class="filter-container">
            <label className="flags-label">Flags:</label>
            <div className="under-flags"></div>
            <div className="filter-btns">
              <label>
                <input type="checkbox" name="gas" className="gas" />
                <span className="flag-button gas">Gas</span>
              </label>
              <label>
                <input type="checkbox" name="no-gas" className="no-gas" />
                <span className="flag-button no-gas">No Gas</span>
              </label>
            </div>
            <div className="loc-range">
              <input type="text" className="FROM" placeholder="To:" required></input>
              <input type="text" className="TO" placeholder="From:" required></input>

            </div>
          </div>
          <button type="submit" className="create-post-btn">Create Post</button>


        </form>
      </div >


    </div >

  )
}

export default CreatePost