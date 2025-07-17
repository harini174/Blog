'use client';
import { useState } from 'react';
import { useBlogs } from '@/context/BlogContext';
import CreateBlog from '@/components/CreateBlog';
import EditBlog from '@/components/EditBlog';
import BlogCard from '@/components/BlogCard';

export default function AdminDashboard() {
  const { blogs } = useBlogs();
  const [editingBlog, setEditingBlog] = useState(null);

  return (
    <div style={{ padding: '40px' }}>
      <h1>Admin Dashboard</h1>
      {editingBlog ? (
        <EditBlog blog={editingBlog} onCancel={() => setEditingBlog(null)} />
      ) : (
        <CreateBlog />
      )}
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onEdit={setEditingBlog} />
        ))}
      </div>
    </div>
  );
}
