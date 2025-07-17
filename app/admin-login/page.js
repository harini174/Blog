'use client';

import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/admin-dashboard'); 
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin} style={{ display: 'inline-block' }}>
        <button type="submit" style={{ padding: '10px 20px' }}>
          Login as Admin
        </button>
      </form>
    </div>
  );
}
