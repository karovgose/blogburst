import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeContext, ThemeContextProvider } from '@/context/ThemeContext';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ThemeProvider from '@/providers/ThemeProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BlogBurst',
  description:
    'Introducing BlogBurst – Your Gateway to a World of Knowledge and Inspiration!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
