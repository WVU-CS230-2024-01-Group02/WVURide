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
                    <h1 className="title">{post.title}</h1>
                    <p className="post-desc">{post.text}</p>
                    <p className="post-time">{post.time}</p>
                </div>
                <button className="posts-pfp" />
                <p className="user-name">{post.userName}</p>
                <button className="message-btn">Talk</button>
            </div>
        </li>
    );
}

//async function getPosts(){
//    return await 
//}


function HomePage() {
    if(localStorage.getItem('user') === null){
        window.location.href = '/'
    }

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
                    <Link to="/profile"><button className="profile-btn" data-testid="profile-button"></button></Link>
                    <Link to="/home"><button className="home-btn" data-testid="home-button"></button></Link>
                    <Link to="/search"><button className="search-btn" data-testid="search-button"></button></Link>
                    <Link to="/message"><button className="msg-btn" data-testid="message-button"></button></Link>
                    <Link to="/"><button className="out-btn" data-testid="logout-button"></button></Link>
                    <Link to="/post"><button className="post-btn" data-testid="post-button"></button></Link>
                </div>
            </div>
            <div className="search-container">
                {/* <div className="search-bar">
                    <input type="text" placeholder="Where to?..." className="search-input" />
                    <Link to="/search"><button className="search-btn"></button></Link> 
                </div> */}
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
