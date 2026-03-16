import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnglishAI",
  description: "Learn English with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  `}
      >
        <header className="fixed top-0 w-full flex items-center justify-between bg-primary px-8 py-4 shadow-md z-10">
          <div className="flex items-center space-x-4">
            <Image src="./icon-apple.svg" alt="Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-white">EnglishAI</h1>
          </div>

          <div className="flex items-center justify-end">
            <nav className="flex space-x-6">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
