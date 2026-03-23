'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import {
  iconFire,
  iconChat,
  iconBook,
  iconMic,
  iconPen,
  iconZap,
  iconStar,
  iconTrophy,
  iconLock,
} from '@/lib/icons'

const achievements = {
  unlocked: [
    {
      title: 'Streak Starter',
      desc: '7-day streak',
      icon: iconFire,
      color: 'text-orange-500',
    },
    {
      title: 'Chat Addict',
      desc: '100 AI messages',
      icon: iconChat,
      color: 'text-blue-400',
    },
    {
      title: 'Word Hoarder',
      desc: '100 words learned',
      icon: iconBook,
      color: 'text-emerald-400',
    },
    {
      title: 'First Words',
      desc: 'First speaking session',
      icon: iconMic,
      color: 'text-indigo-400',
    },
    {
      title: "Writer's Block",
      desc: 'First essay submitted',
      icon: iconPen,
      color: 'text-amber-400',
    },
    {
      title: 'AI Learner',
      desc: '10 lessons generated',
      icon: iconZap,
      color: 'text-yellow-400',
    },
    {
      title: 'Level Up!',
      desc: 'Reached B2 level',
      icon: iconStar,
      color: 'text-yellow-500',
    },
    {
      title: 'Quiz Master',
      desc: '10 perfect quizzes',
      icon: iconTrophy,
      color: 'text-rose-500',
    },
  ],
  locked: [
    { title: 'On Fire!', desc: '30-day streak', icon: iconLock },
    { title: 'Vocab Nerd', desc: '500 words mastered', icon: iconLock },
    { title: 'Perfect Score', desc: '100/100 pronunciation', icon: iconLock },
    { title: 'C1 Achiever', desc: 'Reach C1 level', icon: iconLock },
  ],
}

export default function AchievementsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Card className="bg-gray-900/40 border-gray-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Unlocked</h2>
          <span className="text-sm font-semibold text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">
            8 / 24
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.unlocked.map((achievement, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all flex flex-col items-center text-center hover:bg-gray-800/50"
            >
              <div
                className={cn(
                  'w-12 h-12 mb-4 flex items-center justify-center',
                  achievement.color,
                )}
              >
                <Image
                  src={achievement.icon}
                  alt={achievement.title}
                  width={32}
                  height={32}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {achievement.title}
              </h3>
              <p className="text-xs text-gray-500">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-gray-900/40 border-gray-700/50 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Locked</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.locked.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 opacity-50 flex flex-col items-center text-center grayscale"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-gray-600">
                <Image
                  src={achievement.icon}
                  alt="Locked"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {achievement.title}
              </h3>
              <p className="text-xs text-gray-500">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
