import Image from 'next/image'
import Link from 'next/link'

import {
  iconBook,
  iconChat,
  iconDashboard,
  iconEdit,
  iconFire,
  iconMic,
  iconPen,
  iconStar,
} from '@/lib/icons'

const items = [
  { label: 'Dashboard', href: '/dashboard', icon: iconDashboard },
  { label: 'AI Chat Tutor', href: '/ai-chat', icon: iconChat },
  { label: 'Speaking', href: '/speaking', icon: iconMic },
  { label: 'Vocabulary', href: '/vocabulary', icon: iconBook },
  { label: 'Lessons', href: '/lessons', icon: iconPen },
  { label: 'Writing', href: '/writing', icon: iconEdit },
]

export default function LearnSidebar({ activeHref }: { activeHref: string }) {
  return (
    <aside className="w-80 shrink-0 hidden lg:block">
      <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-4 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
            <Image src={iconFire} alt="" width={18} height={18} />
          </div>
          <div>
            <p className="text-white font-bold text-sm">My Learning</p>
            <p className="text-gray-400 text-xs">Level: B2</p>
          </div>
        </div>

        <div className="space-y-1.5 mb-5">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-1 mb-2">
            Learning
          </p>
          {items.map((item) => {
            const active = item.href === activeHref
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition',
                  active
                    ? 'bg-primary-600/20 border border-primary-600/40 text-white'
                    : 'text-gray-300 hover:bg-gray-900/40 border border-transparent',
                ].join(' ')}
              >
                <span className="h-9 w-9 rounded-xl bg-gray-900/40 ring-1 ring-gray-700/30 flex items-center justify-center">
                  <Image src={item.icon} alt="" width={18} height={18} />
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="pt-3 border-t border-gray-700/40">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-1 mb-2">
            Account
          </p>
          <Link
            href="/sign-out"
            className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-gray-300 hover:bg-gray-900/40 transition"
          >
            <span className="h-9 w-9 rounded-xl bg-gray-900/40 ring-1 ring-gray-700/30 flex items-center justify-center">
              <Image src={iconStar} alt="" width={18} height={18} />
            </span>
            Sign Out
          </Link>
        </div>
      </div>
    </aside>
  )
}
