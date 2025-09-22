'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata is typically for server components, but keeping the type definition
// export const metadata: Metadata = {
//   title: "Beat Music Dashboard",
//   description: "Mini Music Distribution Dashboard",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const authPages = ['/login', '/signup'];

    if (!isLoggedIn && !authPages.includes(pathname)) {
      router.push('/login');
    } else if (isLoggedIn && authPages.includes(pathname)) {
      router.push('/dashboard');
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* Only render Navbar if not on auth pages */}
          {!['/login', '/signup'].includes(pathname) && <Navbar />}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}