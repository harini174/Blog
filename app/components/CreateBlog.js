'use client';
import { useState } from 'react';
import { useBlogs } from '@/context/BlogContext';

export default function CreateBlog() {
  const { blogs, saveBlogs } = useBlogs();
  const [form, setForm] = useState({ 
    title: '', 
    image: '', 
    description: '' 
  });

  const handleCreate = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(), 
      ...form,
      createdAt: new Date().toISOString()
    };
    saveBlogs([...blogs, newBlog]);
    setForm({ title: '', image: '', description: '' });
  };

  return (
    <form onSubmit={handleCreate} className="blog-form">
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({...form, title: e.target.value})}
        required
      />
      <input
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({...form, image: e.target.value})}
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({...form, description: e.target.value})}
        required
      />
      <button type="submit">Add Blog</button>
    </form>
  );
}