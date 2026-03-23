import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EnglishAI',
  description: 'Learn English with AI',
}

export default function LearnLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
