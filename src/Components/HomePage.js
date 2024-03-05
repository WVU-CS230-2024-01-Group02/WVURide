import React from "react";
import "./HomePage.css";


function HomePage() {

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
            <div className="search-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-btn"></button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
