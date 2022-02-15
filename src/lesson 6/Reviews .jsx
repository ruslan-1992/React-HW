import React from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const ReviewsData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  })
   
    return (
      <div>
        <h2>Reviews</h2>
        {
          posts.map(post => (
            <Link key={post.id} to={`/reviews/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))
        } 
      </div>
    );
};

export default ReviewsData;