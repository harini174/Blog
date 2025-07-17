'use client';

import { useBlogs } from '@/context/BlogContext';

export default function BlogDetail({ params }) {
  const { blogs } = useBlogs();
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div style={{ padding: '40px' }}>
      <img src={blog.image} alt={blog.title} width="300" />
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
    </div>
  );
}
