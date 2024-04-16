import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Children from "react";

function Post(props) {
    return (
        <li className="post-item">
            <div className="post-content">
                <div className="post-text">
                    <h1 className="post-title">{props.title}</h1>
                    <p>{props.text}</p>
                    <p className="post-time">{props.time}</p>
                </div>
                <button className="posts-pfp" />
                <p className="user-name">{props.userName}</p>
            </div>
        </li>
    );
}

//async function getPosts(){
//    return await 
//}


async function HomePage(props) {

    const postResponse = await axios.get("http://localhost:8800/retrieve5Posts").then(response => {
        const postItems = response.body.map((post) => 
            <Post key={response.body.id}
                text={response.body.postDesc}
                time={response.body.postTime}
                userName={response.body.postAuth}
                to={response.body.postTo}
                from={response.body.postFrom}
                title={response.body.postTitle}
            />
        )
        return postItems
        }).catch(error => {
            if (error.status !== 200){
                return null
            }
        });
        

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
                    {postResponse}
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
