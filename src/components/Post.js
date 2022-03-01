import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'

const Post = () => {

    const params = useParams();
    const id = params.post_id
    console.log(params)

    const [post, setPost] = useState([])

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(res.data)
        })()
    }, [])

    return (
        <div className="card">
            <div className="card-body" key={post.id}>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div >
    )

}

export default Post