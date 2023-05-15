// Blog.jsx
import React from 'react';
import './Blog.css';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Blog Post 1',
      thumbnail: 'thumbnail1.jpg',
      preview: 'This is a preview of Blog Post 1.',
    },
    {
      title: 'Blog Post 2',
      thumbnail: 'thumbnail2.jpg',
      preview: 'This is a preview of Blog Post 2.',
    },
    // ... more blog posts ...
  ];

  return (
    <div className="blog-container">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <img src={post.thumbnail} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.preview}</p>
        </div>
      ))}
    </div>
  );
}