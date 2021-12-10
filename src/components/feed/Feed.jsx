import { useState, useEffect } from 'react'
import axios from 'axios'
import Share from '../share/Share'
import Post from '../post/Post'
import './feed.css'

export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("posts/timeline/61b23bd8962f02ac828adef7")
            console.log(res.data)
        }
        fetchPosts()
    }, [])

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div> 
    )
}