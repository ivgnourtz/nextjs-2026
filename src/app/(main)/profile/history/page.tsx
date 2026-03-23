'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { iconChat, iconMic, iconBook, iconZap, iconPen } from '@/lib/icons'

const activities = [
  {
    type: 'AI Chat',
    topic: 'Present Perfect',
    details: '18 messages • 4 corrections',
    time: 'Today, 09:45',
    result: '+12 XP',
    resultType: 'xp',
    icon: iconChat,
  },
  {
    type: 'Speaking',
    topic: '/θ/ Sound',
    details: '5 sentences recorded',
    time: 'Today, 08:30',
    result: '87/100',
    resultType: 'score',
    icon: iconMic,
  },
  {
    type: 'Vocabulary',
    topic: '24 words',
    details: '21 correct • 3 for review',
    time: 'Yesterday, 20:15',
    result: '88%',
    resultType: 'percent',
    icon: iconBook,
  },
  {
    type: 'AI Lesson',
    topic: 'Business Email',
    details: 'Vocab + dialogue + quiz',
    time: 'Yesterday, 19:00',
    result: '+25 XP',
    resultType: 'xp',
    icon: iconZap,
  },
  {
    type: 'Writing',
    topic: 'Essay submitted',
    details: '7 corrections found',
    time: '2 days ago, 21:30',
    result: '74/100',
    resultType: 'score',
    icon: iconPen,
  },
]

export default function HistoryPage() {
  return (
    <Card className="bg-gray-900/40 border-gray-700/50 p-6">
      <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>

      <div className="flex flex-col gap-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="group flex items-center justify-between p-4 rounded-xl hover:bg-gray-800/50 transition-all border border-transparent hover:border-gray-700/50"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                <Image
                  src={activity.icon}
                  alt={activity.type}
                  width={20}
                  height={20}
                  className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-white">
                  {activity.type} —{' '}
                  <span className="text-gray-400 font-normal">
                    {activity.topic}
                  </span>
                </h3>
                <p className="text-xs text-gray-500 mt-1">{activity.details}</p>
                <p className="text-[10px] text-gray-600 mt-0.5">
                  {activity.time}
                </p>
              </div>
            </div>

            <div
              className={cn(
                'text-sm font-bold',
                activity.resultType === 'xp'
                  ? 'text-primary-500'
                  : activity.resultType === 'score'
                    ? 'text-info-400'
                    : 'text-warning-500',
              )}
            >
              {activity.result}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}
