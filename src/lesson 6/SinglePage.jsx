import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

export const SinglePage = () => {
    const {id} = useParams();
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    },[id]);

  return (
    <div>
        {post && (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )}
    </div>
  )
}

export default SinglePage;
