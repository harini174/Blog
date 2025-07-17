'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (stored) {
      setBlogs(JSON.parse(stored));
    } else {
      const defaultBlogs = [];
      setBlogs(defaultBlogs);
      localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
    }
  }, []);

  const saveBlogs = (updatedBlogs) => {
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <BlogContext.Provider value={{ blogs, saveBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);