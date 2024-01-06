import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Call = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/items')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]); // Log posts whenever it changes

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} className=' h-32 w-20'/>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Call;
