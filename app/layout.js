import './globals.css';
import { BlogProvider } from './context/BlogContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}