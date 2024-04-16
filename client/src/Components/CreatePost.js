import React from "react";
import { useState } from "react";
import "./CreatePost.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const [title, setTitle] = useState('');
const [to, setTo] = useState('');
const [from, setFrom] = useState('');
const [desc, setDesc] = useState('');



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
          <input type="text" placeholder="Title" className="title-input" name="title" OnInput={e => setTitle(e.target.value)} />
          <textarea className="desc-input" name="desc" rows="10" cols="36" placeholder="Description"></textarea>
          <div class="filter-container">
            <label className="flags-label">Flags:</label>
            <div className="filter-btns">
              <label>
                <input type="checkbox" name="gas" className="gas" />
                <button className="flag-button gas">Gas</button>
              </label>
              <label>
                <input type="checkbox" name="no-gas" className="no-gas" />
                <button className="flag-button no-gas">No Gas</button>
              </label>
            </div>
          </div>
          <button type="submit" className="create-post-btn">Create Post</button>


        </form>
      </div >


    </div >

  )
}

export default CreatePost