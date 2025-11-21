import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/app/components/Sidebar';

export const metadata: Metadata = {
  title: 'Medium | @coolinmc6',
  description: 'Code for Medium by Colin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <main className="min-h-screen lg:ml-72 transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
