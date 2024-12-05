import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from Firebase or API here (mock data for now)
    const fetchedPosts = [
      {
        id: 1,
        title: "My First Post",
        body: "This is the body of the first post.",
        imageUrl: "https://via.placeholder.com/150",
        authorName: "John Doe",
        authorProfileImage: "https://via.placeholder.com/50",
        timestamp: "2024-12-01",
      },
      {
        id: 2,
        title: "Another Post",
        body: "This is another post with some content.",
        imageUrl: "https://via.placeholder.com/150",
        authorName: "Jane Smith",
        authorProfileImage: "https://via.placeholder.com/50",
        timestamp: "2024-12-02",
      },
    ];
    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
