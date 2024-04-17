import React from "react";
import { useState } from "react";
import "./CreatePost.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import TOKEN from './Login';



const CreatePost = () => {
  const [postTitle, setTitle] = useState('')
  const [postFrom, setFrom] = useState('')
  const [gas, setGas] = useState(0)
  const [postDesc, setDesc] = useState('')
  const [postTo, setTo] = useState('')

  async function onPost(e) {
    e.preventDefault();
    if (postTitle == null || postFrom == null || postTo == null || postTitle.length > 45 || postDesc.length > 500 || postTo.length > 45 || postFrom.length > 45) {
      var errMsg = ""
      if (postTitle == null) {
        errMsg += "Title can't be empty"
      }
      if (postFrom == null) {
        if (errMsg == "") {
          errMsg += "From can't be empty"
        }
        else {
          errMsg += ", From can't be empty"
        }
      }
      if (postTo == null) {
        if (errMsg == "") {
          errMsg += "To can't be empty"
        }
        else {
          errMsg += ", To can't be empty"
        }
      }
      if (postTitle.length > 45) {
        if (errMsg == "") {
          errMsg += "Title is too long"
        }
        else {
          errMsg += ", Title is too long"
        }
      }
      if (postDesc.length > 500) {
        if (errMsg == "") {
          errMsg += "Description is too long"
        }
        else {
          errMsg += ", Description is too long"
        }
      }
      if (postTo.length > 45) {
        if (errMsg == "") {
          errMsg += "To is too long"
        }
        else {
          errMsg += ", To is too long"
        }
      }
      if (postFrom.length > 45) {
        if (errMsg == "") {
          errMsg += "From is too long"
        }
        else {
          errMsg += ", and From is too long"
        }
      }
    }
    else {
      const response = await axios.post("http://localhost:8800/postAPost", {
        username: TOKEN,
        from: postFrom,
        to: postTo,
        gasFlag: gas,
        desc: postDesc,
        title: postTitle
      }).then(response => {
        console.log(response.status)
        console.log(response.data)
        return response.data
      }).catch(error => {
        if (error.status !== 200) {
          return null
        }
      });
    }
  }

  return (
    <div className="plus-posts-container">
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
      <div className="cpost-container">
        <div className="cpost-title-container">
          <div className="cpost-title">Post your Ride</div>
          <div className="cpost-underline"></div>
        </div>
        <form className="create-post-form">
          <label className="divide"></label>
          <input type="text" placeholder="Title" className="title-input" name="title" OnInput={e => setTitle(e.target.value)} required />
          <textarea className="desc-input" name="desc" rows="10" cols="36" placeholder="Description" OnInput={e => setDesc(e.target.value)}></textarea>
          <div class="filter-container">
            <label className="flags-label">Flags:</label>
            <div className="under-flags"></div>
            <div className="filter-btns">
              <label>
                <input type="checkbox" name="gas" className="gas" onInput={e => setGas(1)} />
                <span className="flag-button gas" >Gas</span>
              </label>
              <label>
                <input type="checkbox" name="no-gas" className="no-gas" onInput={e => setGas(0)} />
                <span className="flag-button no-gas">No Gas</span>
              </label>
            </div>
            <div className="loc-range">
              <input type="text" className="FROM" placeholder="From:" required onInput={e => setFrom(e.target.value)}></input>
              <input type="text" className="TO" placeholder="To:" required onInput={e => setTo(e.target.value)}></input>

            </div>
          </div>
          <button type="submit" className="create-post-btn" OnClick={e => onPost()}>Create Post</button>


        </form>
      </div >


    </div >

  )
}

export default CreatePost