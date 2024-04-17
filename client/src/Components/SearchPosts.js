import { useState } from "react";
import "./SearchPosts.css"
import { Link } from "react-router-dom";
import axios from 'axios';

function SearchPosts(props) {
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

const Profile = () => {
    const [to, setTo] = useState("")
    const [from, setFrom] = useState("")
    const [gas, setGas] = useState(-1)
    var postResponse

    async function searchPosts() {
        if (to == null && from == null && gas == -1) {
            const response = await axios.get("http://localhost:8800/retrieve5Posts").then(response => {
                const postItems = response.body.map((post) =>
                    <SearchPosts key={response.body.id}
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
                if (error.status !== 200) {
                    return null
                }
            });
        }
        else if (from == null && gas == -1 && to != null) {
            const response = await axios.get("http://localhost:8800/findPostByTo", {
                searchTo: to,
            }).then(response => {
                const postItems = response.body.map((post) =>
                    <SearchPosts key={response.body.id}
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
                if (error.status !== 200) {
                    return null
                }
            });
        }
        else if (to == null && gas == -1 && from != null) {
            const response = await axios.get("http://localhost:8800/findPostByFrom", {
                searchFrom: from,
            }).then(response => {
                const postItems = response.body.map((post) =>
                    <SearchPosts key={response.body.id}
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
                if (error.status !== 200) {
                    return null
                }
            });
        }
        else if (gas == -1 && from != null && to != null) {
            const response = await axios.get("http://localhost:8800/findPostByFromAndTo", {
                searchTo: to,
                searchFrom: from,
            }).then(response => {
                const postItems = response.body.map((post) =>
                    <SearchPosts key={response.body.id}
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
                if (error.status !== 200) {
                    return null
                }
            });
        }
    }

    return (
        <div className='search-posts-container'>
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


            <div className="searching-container">
                <div className="search-bar-from">
                    <input type="text" className="search-input-fm" placeholder="From:" required onInput={e => setFrom(e.target.value)}></input>
                </div>
                <div className="search-bar-to">
                    <input type="text" className="search-input-to" placeholder="To:" required onInput={e => setTo(e.target.value)}></input>
                </div>

                <div className="filter-btns-sr">
                    <label>
                        <input type="checkbox" name="gas" className="gas-sr" onInput={e => setGas(1)} />
                        <span className="flag-button-sr gas-sr" >Gas</span>
                    </label>
                    <label>
                        <input type="checkbox" name="no-gas" className="no-gas-sr" onInput={e => setGas(0)} />
                        <span className="flag-button-sr no-gas-sr">No Gas</span>
                    </label>
                </div>
                <button type="submit" className="search-post-btn" onClick={e => searchPosts()}>Search</button>
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


    )
}

export default Profile;