'use client';
import { useBlogs } from '@/context/BlogContext';

export default function BlogCard({ blog, onEdit }) {
  const { blogs, saveBlogs } = useBlogs();

  const handleDelete = () => {
    const updated = blogs.filter((b) => b.id !== blog.id);
    saveBlogs(updated);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
      <img src={blog.image} alt={blog.title} style={{ width: '100%' }} />
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <button onClick={() => onEdit(blog)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
