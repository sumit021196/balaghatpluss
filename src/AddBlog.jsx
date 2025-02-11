// src/AddBlog.js
import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddBlog = async () => {
    if (!title || !content) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        createdAt: new Date(),
      });
      alert("Blog added successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div>
      <h2>Add a Blog</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
};

export default AddBlog;
