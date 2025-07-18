'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div>
      
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#0070f3',
        color: 'white'
      }}>
        <h1 style={{ margin: 0 }}>My Blog</h1>
        <button
          onClick={handleLogin}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: 'white',
            color: '#0070f3',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </header>

      
      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Welcome to My Blog</h2>
        <p>
          Discover insightful articles, tutorials, and updates on topics you love.
          Our blog shares knowledge on web development, programming, and much more.
        </p>
        <p>
          Login to explore exclusive blog posts and manage your profile.
        </p>
      </main>
    </div>
  );
}
