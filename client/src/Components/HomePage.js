import React from "react";
import "./HomePage.css";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Post(post) {
    console.log(post)
    return (
        <li className="post-item">
            <div className="post-content">
                <div className="post-text">
                    <h1 className="post-title">{post.title}</h1>
                    <p>{post.text}</p>
                    <p className="post-time">{post.time}</p>
                </div>
                <button className="posts-pfp" />
                <p className="user-name">{post.userName}</p>
            </div>
        </li>
    );
}

//async function getPosts(){
//    return await 
//}


function HomePage() {

    const [posts, setPosts] = useState({ loaded: false, data: [] })

    const fetchPosts = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/retrieve5Posts").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    useEffect(() => {
        if (!posts.loaded) {
            fetchPosts()
        }
    }, [fetchPosts, posts.loaded])

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
                    {posts.loaded && posts.data.length > 0 ? posts.data.map(post => {
                        console.log(post)
                        return <Post
                            text={post.postDesc}
                            time={post.postTime}
                            userName={post.postAuth}
                            title={post.postTitle}
                        />
                    }) : null}
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
