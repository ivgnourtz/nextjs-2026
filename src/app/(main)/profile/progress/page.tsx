'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const skills = [
  { name: 'Speaking', level: 74, color: 'bg-primary-500' },
  { name: 'Listening', level: 61, color: 'bg-info-400' },
  { name: 'Grammar', level: 83, color: 'bg-primary-400' },
  { name: 'Vocabulary', level: 52, color: 'bg-warning-500' },
  { name: 'Writing', level: 40, color: 'bg-pink-500' },
]

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const weeklyActivity = [32, 45, 52, 28, 65, 42, 58] // Simple data for bars

const calendarDays = [
  { day: 'Mo', active: true },
  { day: 'Tu', active: true },
  { day: 'We', active: true },
  { day: 'Th', active: true },
  { day: 'Fr', active: true },
  { day: 'Sa', active: true },
  { day: 'Su', active: true },
  { day: 'Mo', active: true },
  { day: 'Tu', active: true },
  { day: 'We', active: true },
  { day: 'Th', active: true },
  { day: 'Fr', active: true },
  { day: 'Sa', active: true },
  { day: 'Su', active: true, today: true },
  { day: 'Mo', active: false },
  { day: 'Tu', active: false },
]

export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Skill Breakdown */}
      <Card className="bg-gray-900/40 border-gray-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Skill Breakdown</h2>
          <span className="text-xs font-bold text-primary-400 bg-primary-500/10 px-2.5 py-1 rounded-full border border-primary-500/20">
            B2 Level
          </span>
        </div>
        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-gray-400 flex items-center gap-2">
                  {skill.name === 'Speaking' && '🗣️'}
                  {skill.name === 'Listening' && '👂'}
                  {skill.name === 'Grammar' && '📖'}
                  {skill.name === 'Vocabulary' && '📚'}
                  {skill.name === 'Writing' && '✍️'}
                  {skill.name}
                </span>
                <span className="text-white">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-1000',
                    skill.color,
                  )}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Weekly Activity */}
      <Card className="bg-gray-900/40 border-gray-700/50 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Weekly Activity</h2>
        <div className="flex items-end justify-between h-32 gap-2 mb-4">
          {weeklyActivity.map((value, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2 group"
            >
              <div
                className={cn(
                  'w-full rounded-t-md transition-all duration-300 relative',
                  index === 6
                    ? 'bg-warning-500'
                    : 'bg-primary-500/80 group-hover:bg-primary-500',
                )}
                style={{ height: `${value}%` }}
              >
                {/* Tooltip on hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {value} min
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-medium uppercase">
                {days[index]}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-gray-800/50">
          <div className="text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
              Avg
            </p>
            <p className="text-sm font-bold text-white">32 min</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
              Best
            </p>
            <p className="text-sm font-bold text-primary-400">52 min (Fri)</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
              Total
            </p>
            <p className="text-sm font-bold text-white">3.7 hrs</p>
          </div>
        </div>
      </Card>

      {/* Streak Calendar */}
      <Card className="bg-gray-900/40 border-gray-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Streak Calendar 🔥
          </h2>
          <span className="text-xs font-bold text-error-400 bg-error-500/10 px-2.5 py-1 rounded-full border border-error-500/20">
            14 Days
          </span>
        </div>
        <div className="grid grid-cols-7 sm:grid-cols-14 gap-2">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={cn(
                'aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold border transition-all',
                day.today
                  ? 'bg-primary-500 border-primary-400 text-gray-900 shadow-lg shadow-primary-500/20'
                  : day.active
                    ? 'bg-primary-900/40 border-primary-500/30 text-primary-400'
                    : 'bg-gray-800/20 border-gray-800 text-gray-600',
              )}
            >
              {day.day}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
