'use client';
import { useState, useEffect } from 'react';
import { useBlogs } from '@/context/BlogContext';

export default function EditBlog({ blog, onCancel }) {
  const { blogs, saveBlogs } = useBlogs();
  const [form, setForm] = useState(blog);

  useEffect(() => {
    setForm(blog);
  }, [blog]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = blogs.map((b) => (b.id === blog.id ? form : b));
    saveBlogs(updated);
    onCancel();
  };

  return (
    <form onSubmit={handleUpdate}>
      <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}
