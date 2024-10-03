import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/components/Header'

export const metadata: Metadata = {
  title: "Medium | @coolinmc6",
  description: "Code for Medium by Colin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black relative">
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
