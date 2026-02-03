import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  
                  // Set dir and lang based on URL path
                  const path = window.location.pathname;
                  const isArabic = path.startsWith('/ar');
                  document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
                  document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
