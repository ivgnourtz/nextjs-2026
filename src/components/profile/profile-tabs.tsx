'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import { iconChart, iconTrophy, iconBell, iconSettings } from '@/lib/icons'

const tabs = [
  { label: 'Progress', href: '/profile/progress', icon: iconChart },
  { label: 'Achievements', href: '/profile/achievements', icon: iconTrophy },
  { label: 'History', href: '/profile/history', icon: iconBell },
  { label: 'Settings', href: '/profile/settings', icon: iconSettings },
]

export function ProfileTabs() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-900/50 border border-gray-700/50 rounded-2xl w-full">
      {tabs.map((tab) => {
        const isActive =
          pathname === tab.href ||
          (pathname === '/profile' && tab.href === '/profile/progress')
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-200',
              isActive
                ? 'bg-gray-800 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50',
            )}
          >
            <Image
              src={tab.icon}
              alt={tab.label}
              width={16}
              height={16}
              className={cn('invert', isActive ? 'opacity-100' : 'opacity-50')}
            />
            <span>{tab.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
