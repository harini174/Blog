'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); 
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    router.push('/blog');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Please enter your credentials to continue</p>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" style={styles.button}>
            Continue to Blog
          </button>
        </form>
        
        <div style={styles.footer}>
          <p>Don't have an account? <a href="#" style={styles.link}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f7f4',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
    padding: '40px',
    width: '100%',
    maxWidth: '450px',
  },
  title: {
    color: '#2e7d32',
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '8px',
    textAlign: 'center',
  },
  subtitle: {
    color: '#616161',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    color: '#424242',
    fontSize: '14px',
    fontWeight: '500',
  },
  input: {
    padding: '14px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '15px',
    transition: 'all 0.3s ease',
  },
  inputFocus: {
    outline: 'none',
    borderColor: '#4caf50',
    boxShadow: '0 0 0 2px rgba(76, 175, 80, 0.2)',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#3d8b40',
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '14px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '24px',
    color: '#616161',
    fontSize: '14px',
  },
  link: {
    color: '#2e7d32',
    textDecoration: 'none',
    fontWeight: '500',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};