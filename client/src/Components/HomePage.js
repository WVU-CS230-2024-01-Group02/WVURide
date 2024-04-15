import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Post({ text, date, time, userName, to, from, title}) {
    return (
        <li className="post-item">
            <div className="post-content">
                <div className="post-text">
                    <h1 className="post-title">{title}</h1>
                    <p>{text}</p>
                    <p className="post-date">{date}</p>
                    <p className="post-time">{time}</p>
                </div>
                <button className="posts-pfp" />
                <p className="user-name">{userName}</p>
            </div>
        </li>
    );
}

async function getPosts(){
    return await axios.post("http://localhost:8800/retrieve5Posts").then(response => {
        console.log(response.status)
        console.log(response.data)
        return response.data
        }).catch(error => {
        if (error.status !== 200){
            return null
        }
        });
}


function HomePage(props) {

    const posts = getPosts()

    return (
        <div className="hp-container">
            <div className="blue-rect">
                <div className="side-btns">
                    <button className="profile-btn"></button>
                    <button className="home-btn"></button>
                    <button className="msg-btn"></button>
                    <Link to="/"><button className="out-btn"></button></Link>
                </div>
            </div>
            <div className="gmaps">
            </div>
            <div className="search-container">
                <div className="search-bar">
                    <input type="text" placeholder="Where to?..." className="search-input" />
                    <button className="search-btn"></button>
                </div>
            </div>
            <div className="post-container">
                <div className="title-container">
                    <div className="post-title">Posts</div>
                    <div className="post-underline"></div>
                </div>

                <ul className="post-list">
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            text={post.postDesc}
                            time={post.postTime}
                            userName={post.postAuth}
                            to={post.postTo}
                            from={post.postFrom}
                            title={post.postTitle}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
