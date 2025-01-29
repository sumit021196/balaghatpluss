import React, { useState, useEffect } from "react";
import blogs from "./blogs.json"; // Importing static blog data

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded-lg shadow">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm">{blog.date}</p>
            <p className="mt-2">{blog.content.substring(0, 100)}...</p>
            <button className="mt-2 text-blue-500">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
