import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import logoIcon from '@/../public/icon-logo.svg'

import iconDashboard from '@/../public/icon-dashboard.svg'
import iconChat from '@/../public/icon-chat.svg'
import iconMic from '@/../public/icon-mic.svg'
import iconBook from '@/../public/icon-book.svg'
import iconPen from '@/../public/icon-pen.svg'
import iconEdit from '@/../public/icon-edit.svg'
import iconUser from '@/../public/icon-user.svg'

const navLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: iconDashboard },
  { label: 'AI Chat', href: '/ai-chat', icon: iconChat },
  { label: 'Speaking', href: '/speaking', icon: iconMic },
  { label: 'Vocabulary', href: '/vocabulary', icon: iconBook },
  { label: 'Lessons', href: '/lessons', icon: iconPen },
  { label: 'Writing', href: '/writing', icon: iconEdit },
  { label: 'Profile', href: '/profile', icon: iconUser },
]

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className="px-8 py-4 fixed top-0 z-10 w-full h-15.5 flex items-center justify-between bg-gray-1100/90 backdrop-blur-md border-b border-gray-700/50 shadow-md">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 w-7.5 h-7.5 flex items-center justify-center bg-primary-600 rounded-md">
            <Image src={logoIcon} alt="Logo" width={30} height={30} />
          </div>
          <h1 className="text-2xl font-bold text-white">LinguaAI</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <Button
            variant="primary"
            className="px-6 py-1.5 bg-primary-600 text-gray-1100 rounded-2xl hover:bg-primary-400"
          >
            <Link
              href="/sign-out"
              className="font-bold text-lg group/button-hover:text-white"
            >
              Sign Out
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center bg-gray-1100">
        <main className="flex min-h-screen w-full flex-col items-center justify-start pt-20">
          {children}
        </main>
      </div>

      <footer className="w-full border-t border-gray-700/50 bg-gray-1100 py-8 text-center text-sm text-gray-500">
        © 2026 LinguaAI. All rights reserved.
      </footer>
    </>
  )
}
