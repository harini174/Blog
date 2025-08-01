'use client';

import Link from 'next/link';
import { useBlogs } from '@/context/BlogContext';

export default function Blog() {
  const { blogs } = useBlogs();

  if (!blogs || blogs.length === 0) {
    return <p>Loading blogs or none available</p>;
  }

  return (
    <div className="container">
      {blogs.map((blog) => (
        <div className="card" key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <img src={blog.image} alt={blog.title} className="image" />
          </Link>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}
