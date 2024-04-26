import React from "react";
import { useState, useEffect, useCallback } from "react";
import "./SearchPosts.css"
import { Link } from "react-router-dom";
import axios from 'axios';

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

function SearchPosts(){
    if (localStorage.getItem('user') === null) {
        window.location.href = '/'
    }

    const [to, setTo] = useState("")
    const [from, setFrom] = useState("")
    const [gas, setGas] = useState(0)

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

    const fetchPostsByFrom = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/findPostByFrom").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    const fetchPostsByTo = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/findPostByTo").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    const fetchPostsByToAndFrom = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/findPostByToAndFrom").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    const fetchGasPosts = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/retrieveGasPosts").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    const fetchGasPostsByFrom = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/findGasPostByFrom").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    const fetchGasPostsByTo = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/findGasPostByTo").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    const fetchGasPostsByToAndFrom = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/findGasPostByToAndFrom").then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        setPosts({ loaded: true, data: response })
    }, [setPosts])

    async function SearchForPosts() {
        useEffect(() => {
            if (!posts.loaded) {

                if (to == null && from == null && gas == 0) {
                    fetchPosts()
                }
                else if (from == null && gas == 0 && to != null) {
                    fetchPostsByTo()
                }
                else if (to == null && gas == 0 && from != null) {
                    fetchPostsByFrom()
                }
                else if (gas == 0 && from != null && to != null) {
                    fetchPostsByToAndFrom()
                }
                else if(to == null && from == null && gas == 1) {
                    fetchGasPosts()
                }
                else if (from == null && gas == 1 && to != null) {
                    fetchGasPostsByTo()
                }
                else if (to == null && gas == 1 && from != null) {
                    fetchGasPostsByFrom()
                }
                else if (gas == 1 && from != null && to != null) {
                    fetchGasPostsByToAndFrom()
                }
            }
        }, [fetchPosts, fetchPostsByTo, fetchPostsByFrom, fetchPostsByToAndFrom, fetchGasPosts, fetchGasPostsByTo, fetchGasPostsByFrom, fetchGasPostsByToAndFrom, posts.loaded])
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
                <button type="submit" className="search-post-btn" onClick={e => SearchForPosts()}>Search</button>
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
    )
}

export default SearchPosts;