import React, { useState } from "react";
import "./Home.css";
import pic1 from '../assets/p1.png'
import Posts from "./Posts";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  return (
    <div className="container">
      <div className="input-group mb-3 jss58">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <img src={pic1} className="img-fluid" alt="bgnd" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Whats new with YOU?"
          value={post}
          aria-label="Username"
          aria-describedby="basic-addon1"
         
        />
      </div>

      {posts.length > 0 ? (
        posts.map((post) => {
          console.log(post);
          return <Posts post={post} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
