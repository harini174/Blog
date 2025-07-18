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
      const defaultBlogs = [
        {
          id: 1,
          title: 'India',
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
          description:
            'The Taj Mahal is a beautiful white building in Agra, India. It was built by Shah Jahan for his wife Mumtaz Mahal. It is made of white marble and looks very grand. Many people visit the Taj Mahal every year. It is a symbol of love and one of the Seven Wonders of the World.'
        },
        {
          id: 2,
          title: 'France',
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_Eiffel_Wikimedia_Commons.jpg',
          description:
            'The Eiffel Tower is a famous iron structure located in Paris, France, and is one of the most recognizable landmarks in the world. It was designed by Gustave Eiffel and built for the 1889 Exposition Universelle (World’s Fair) to celebrate the 100th anniversary of the French Revolution.'
        },
        {
          id: 3,
          title: 'China',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/GreatWall_2004_Summer_3.jpg/1920px-GreatWall_2004_Summer_3.jpg',
          description:
            'The Great Wall of China is one of the most famous structures in the world. It was built to protect Chinese kingdoms from invaders and stretches over 21,000 kilometers.'
        }
      ];
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
