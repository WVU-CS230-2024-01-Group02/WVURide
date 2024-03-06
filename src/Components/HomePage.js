import React from "react";
import "./HomePage.css";

function Post({ text, date, time, userName }) {
    return (
        <li className="post-item">
            <div className="post-content">
                <div className="post-text">
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


function HomePage() {
    
    const posts = [
        {
            text: "Anyone usually goes to beechurst? I got two classes in downtown and wanted to know if anyone is offering rides. See more...",
            date: "March 4, 2024",
            time: "25min ago",
            userName: "User1"
        },
        {
            text: "I have a parking pass for the ESB parking lot. I can pick-up/drop-off as long as you pay for gas. See more...",
            date: "March 4, 2024",
            time: "1hr ago",
            userName: "User2"
        }, 
        {
            text: "I have a parking pass for the ESB parking lot. I can pick-up/drop-off as long as you pay for gas. See more...",
            date: "March 4, 2024",
            time: "7hr ago",
            userName: "User3"
        }
       
    ];

    return (
        <div className="hp-container">
            <div className="blue-rect">
                <div className="side-btns">
                    <button className="profile-btn"></button>
                    <button className="home-btn"></button>
                    <button className="msg-btn"></button>
                    <button className="out-btn"></button>
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
                            text={post.text}
                            date={post.date}
                            time={post.time}
                            userName={post.userName}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
