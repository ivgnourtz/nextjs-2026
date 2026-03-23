import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import {
  iconFire,
  iconChat,
  iconBook,
  iconStar,
  iconDashboard,
  iconMic,
  iconPen,
  iconEdit,
  iconMicVolume,
  iconLock,
  iconArrowRight,
} from '@/lib/icons'

const sidebarItems = [
  { label: 'Dashboard', href: '/dashboard', icon: iconDashboard },
  { label: 'AI Chat Tutor', href: '/ai-chat', icon: iconChat },
  { label: 'Speaking', href: '/speaking', icon: iconMic },
  { label: 'Vocabulary', href: '/vocabulary', icon: iconBook },
  { label: 'Lessons', href: '/lessons', icon: iconPen },
  { label: 'Writing', href: '/writing', icon: iconEdit },
]

const todayLessons = [
  {
    title: 'AI Grammar Chat',
    subtitle: 'Present perfect tense practice',
    status: 'In progress',
    icon: iconChat,
  },
  {
    title: 'Pronunciation /θ/ sound',
    subtitle: '15 practice sentences',
    status: 'New',
    icon: iconMicVolume,
  },
  {
    title: 'Vocabulary Review',
    subtitle: 'Due today · 24 words today',
    status: 'Due today',
    icon: iconBook,
  },
  {
    title: 'Writing: Email etiquette',
    subtitle: 'Formal tone practice',
    status: 'Locked',
    icon: iconLock,
  },
  {
    title: 'AI Lesson: Business English',
    subtitle: 'Lesson ready',
    status: 'New',
    icon: iconPen,
  },
]

const skillProgress = [
  { label: 'Speaking', value: 74, color: 'bg-primary-600' },
  { label: 'Listening', value: 61, color: 'bg-info-600' },
  { label: 'Grammar', value: 83, color: 'bg-primary-500' },
  { label: 'Vocabulary', value: 52, color: 'bg-warning-600' },
  { label: 'Writing', value: 40, color: 'bg-pink-600' },
]

const quickActions = [
  { title: 'Chat with AI Tutor', icon: iconChat, href: '/ai-chat' },
  { title: 'Speaking Practice', icon: iconMic, href: '/speaking' },
  { title: 'Review 24 Words', icon: iconBook, href: '/vocabulary' },
  { title: 'Generate New Lesson', icon: iconPen, href: '/lessons' },
]

export default function DashboardPage() {
  return (
    <div className="w-full max-w-7xl px-6 pb-10">
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 hidden lg:block">
          <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                <Image src={iconFire} alt="Fire" width={18} height={18} />
              </div>
              <div>
                <p className="text-white text-base font-bold">My Learning</p>
                <p className="text-gray-400 text-xs">Level: B2</p>
              </div>
            </div>

            <div className="space-y-1.5 mb-5">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-1">
                Learning
              </p>
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-300 hover:bg-gray-900/40 transition"
                >
                  <span className="h-8 w-8 rounded-xl bg-gray-900/40 ring-1 ring-gray-700/40 flex items-center justify-center">
                    <Image src={item.icon} alt="" width={16} height={16} />
                  </span>
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700/40">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-1 mb-2">
                Account
              </p>
              <Link
                href="/sign-out"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-300 hover:bg-gray-900/40 transition"
              >
                <span className="h-8 w-8 rounded-xl bg-gray-900/40 ring-1 ring-gray-700/40 flex items-center justify-center">
                  <Image src={iconStar} alt="" width={16} height={16} />
                </span>
                Sign Out
              </Link>
            </div>
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-white text-2xl font-bold">
                Good morning, Alex 👋
              </p>
              <p className="text-gray-400 text-sm mt-1">
                3 lessons scheduled · 24 vocabulary words today
              </p>
            </div>
            <Button className="h-10 rounded-xl bg-primary-600 text-gray-1100 hover:bg-primary-400 px-4">
              Continue Learning →
            </Button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                  <Image src={iconFire} alt="" width={18} height={18} />
                </div>
                <div className="text-3xl font-extrabold text-white">14</div>
              </div>
              <p className="text-gray-400 text-xs mt-3">Day streak</p>
              <p className="text-gray-300 text-sm font-semibold">2 this week</p>
            </div>

            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-info-600/15 ring-1 ring-info-600/40 flex items-center justify-center">
                  <Image src={iconChat} alt="" width={18} height={18} />
                </div>
                <div className="text-3xl font-extrabold text-white">127</div>
              </div>
              <p className="text-gray-400 text-xs mt-3">AI messages</p>
              <p className="text-gray-300 text-sm font-semibold">18 today</p>
            </div>

            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-warning-600/15 ring-1 ring-warning-600/40 flex items-center justify-center">
                  <Image src={iconBook} alt="" width={18} height={18} />
                </div>
                <div className="text-3xl font-extrabold text-white">284</div>
              </div>
              <p className="text-gray-400 text-xs mt-3">Words mastered</p>
              <p className="text-gray-300 text-sm font-semibold">
                12 this week
              </p>
            </div>

            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                  <Image src={iconStar} alt="" width={18} height={18} />
                </div>
                <div className="text-3xl font-extrabold text-white">B2</div>
              </div>
              <p className="text-gray-400 text-xs mt-3">Current level</p>
              <p className="text-primary-300 text-sm font-semibold">from B1</p>
            </div>
          </div>

          {/* Lessons + Right column */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            {/* Today lessons */}
            <div className="xl:col-span-2">
              <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-bold text-base">
                    Today's Lessons
                  </p>
                  <Link
                    href="/lessons"
                    className="text-sm text-gray-400 hover:text-white transition inline-flex items-center gap-1"
                  >
                    View all{' '}
                    <Image src={iconArrowRight} alt="" width={14} height={14} />
                  </Link>
                </div>

                <div className="space-y-3">
                  {todayLessons.map((lesson) => (
                    <div
                      key={lesson.title}
                      className="rounded-2xl border border-gray-700/30 bg-gray-900/20 p-4 flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gray-900/40 ring-1 ring-gray-700/30 flex items-center justify-center">
                          <Image
                            src={lesson.icon}
                            alt=""
                            width={18}
                            height={18}
                          />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {lesson.title}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {lesson.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-semibold text-gray-300">
                          {lesson.status}
                        </span>
                        <span className="mt-2 block h-px w-24 bg-gray-700/20" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white font-bold text-base">
                    14-Day Streak
                  </p>
                  <Image src={iconFire} alt="" width={18} height={18} />
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 28 }).map((_, idx) => {
                    const active = idx % 5 !== 0
                    return (
                      <div
                        key={idx}
                        className={`h-7 rounded-lg ${
                          active
                            ? 'bg-primary-600/70 ring-1 ring-primary-600/40'
                            : 'bg-gray-900/30 ring-1 ring-gray-700/20'
                        }`}
                      />
                    )
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
                <p className="text-white font-bold text-base mb-3">
                  Quick Actions
                </p>
                <div className="space-y-2.5">
                  {quickActions.map((action) => (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="flex items-center justify-between rounded-2xl border border-gray-700/30 bg-gray-900/20 px-4 py-3 hover:bg-gray-900/40 transition"
                    >
                      <span className="flex items-center gap-3">
                        <span className="h-9 w-9 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                          <Image
                            src={action.icon}
                            alt=""
                            width={18}
                            height={18}
                          />
                        </span>
                        <span className="text-sm font-semibold text-gray-200">
                          {action.title}
                        </span>
                      </span>
                      <Image
                        src={iconArrowRight}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
                <p className="text-white font-bold text-base mb-1">
                  AI TIP OF THE DAY
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Use “have been doing” for activities that started in the past
                  and are still going on.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Progress */}
          <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-white font-bold text-base">Skill Progress</p>
                <p className="text-gray-400 text-xs mt-1">
                  Track your strengths and focus areas
                </p>
              </div>
              <p className="text-gray-300 text-sm font-semibold rounded-full border border-gray-700/40 px-3 py-1">
                B2 Level
              </p>
            </div>

            <div className="space-y-4">
              {skillProgress.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-300 text-sm">{skill.label}</p>
                    <p className="text-gray-300 text-sm font-semibold">
                      {skill.value}%
                    </p>
                  </div>
                  <div className="h-2.5 rounded-full bg-gray-900/40 ring-1 ring-gray-700/20 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
