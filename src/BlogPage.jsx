// src/BlogPage.js
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Blog Page</h2>
      {blogs.length === 0 ? (
        <p>Loading blogs...</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPage;
