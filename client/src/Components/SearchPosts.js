import React from "react";
import { useState, useEffect, useCallback } from "react";
import "./SearchPosts.css"
import { Link } from "react-router-dom";
import axios from 'axios';

function Post(post) {
    return (
        <li className="post-item">
            <div className="post-content">
                <div className="post-text">
                    <h1 className="title">{post.title}</h1>
                    <p className="post-desc">{post.text}</p>
                    <p className="post-time">{post.time}</p>
                    <p className="post-from">{post.postFrom}</p>
                    <p className="post-to">{post.postTo}</p>
                    <p className="post-gas">{post.postGas}</p>
                </div>
                <button className="posts-pfp" />
                <p className="user-name">{post.userName}</p>
                <button className="message-btn">Talk</button>
            </div>
        </li>
    );
}



/*function SearchForPosts(searchTo, searchFrom, searchGas) {

    const [posts, setPosts] = useState({ loaded: false, data: [] })
    const fetchPosts = useCallback(async () => {
        const response = await axios.get("http://localhost:8800/searchPosts", {
            to: searchTo,
            from: searchFrom,
            gas: searchGas
        }).then(response => {
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

    return posts
}*/

function SearchPosts() {
    if (localStorage.getItem('user') === null) {
        window.location.href = '/'
    }

    const [searchTo, setTo] = useState("")
    //console.log(searchTo)
    const [searchFrom, setFrom] = useState("")
    //console.log(searchFrom)
    const [searchGas, setGas] = useState(-1)
    console.log(searchGas)

    function inputGas(e) {
        if (searchGas === -1 || searchGas === 0) {
            setGas(1)
        }
        else {
            setGas(-1)
        }
    }
    function inputNoGas(e) {
        if (searchGas === -1 || searchGas === 1) {
            setGas(0)
        }
        else {
            setGas(-1)
        }
    }


    const [posts, setPosts] = useState({ loaded: false, data: [] })

    const fetchPosts = useCallback(async () => {
        console.log(searchTo)
        console.log(searchFrom)
        console.log(searchGas)
        const response = await axios.post("http://localhost:8800/searchPosts", {
            to: searchTo,
            from: searchFrom,
            gas: searchGas
        }).then(response => {
            return response.data
        }).catch(error => {
            if (error.status !== 200) {
                return null
            }
        });
        console.log(response)
        setPosts({ loaded: true, data: response })
    }, [setPosts, searchTo, searchFrom, searchGas])


    useEffect(() => {
        if (!posts.loaded) {
            fetchPosts()
        }
    }, [fetchPosts, posts.loaded])

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
                    <input type="text" className="search-input-fm" placeholder="From:" onInput={e => setFrom(e.target.value)}></input>
                </div>
                <div className="search-bar-to">
                    <input type="text" className="search-input-to" placeholder="To:" onInput={e => setTo(e.target.value)}></input>
                </div>

                <div className="filter-btns-sr">
                    <label>
                        <input type="checkbox" name="gas" className="gas-sr" onInput={e => inputGas()} />
                        <span className="flag-button-sr gas-sr" >Gas</span>
                    </label>
                    <label>
                        <input type="checkbox" name="no-gas" className="no-gas-sr" onInput={e => inputNoGas(0)} />
                        <span className="flag-button-sr no-gas-sr">No Gas</span>
                    </label>
                </div>
                <button type="button" className="search-post-btn" onClick={e => fetchPosts()}>Search</button>
            </div >

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
                            from={post.postFrom}
                            to={post.postTo}
                            gas={post.postGas}

                        />
                    }) : null}
                </ul>
            </div>
        </div >
    )
}

export default SearchPosts;