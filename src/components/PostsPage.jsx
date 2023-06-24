import React, { useEffect, useState } from "react";
import OnePost from "./OnePost";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div>
      <h3>These are all posts from the database.</h3>
      {posts.map((post) => (
        <OnePost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
