'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const accountSettings = [
  { label: 'Full Name', value: 'Alex Nguyen', action: 'Edit' },
  { label: 'Email', value: '[email protected]', action: 'Change' },
  { label: 'Password', value: 'Last changed 30 days ago', action: 'Update' },
  { label: 'Language', value: 'Vietnamese (vi)', action: 'Vietnamese' },
]

const notificationSettings = [
  {
    label: 'Daily Reminder',
    desc: 'Get nudged to practice each day',
    active: true,
  },
  {
    label: 'Streak Alerts',
    desc: 'Warning when streak is at risk',
    active: true,
  },
  { label: 'Weekly Report', desc: 'Email summary every Sunday', active: false },
  {
    label: 'New Lesson Ready',
    desc: 'When AI generates a lesson',
    active: true,
  },
]

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Account Section */}
      <Card className="bg-gray-900/40 border-gray-700/50 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Account</h2>
        <div className="flex flex-col gap-6">
          {accountSettings.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-800/50 last:border-0"
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  {item.label}
                </span>
                <span className="text-xs text-gray-500 mt-1">{item.value}</span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-gray-800 border-gray-700 text-gray-300 hover:text-white"
              >
                {item.action}
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Notifications Section */}
      <Card className="bg-gray-900/40 border-gray-700/50 p-6">
        <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
        <div className="flex flex-col gap-6">
          {notificationSettings.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  {item.label}
                </span>
                <span className="text-xs text-gray-500 mt-1">{item.desc}</span>
              </div>
              <div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${item.active ? 'bg-primary-500' : 'bg-gray-700'}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${item.active ? 'translate-x-6' : 'translate-x-0'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Danger Zone Section */}
      <Card className="bg-gray-900/40 border-error-800/30 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-error-600/50" />
        <h2 className="text-lg font-bold text-error-400 mb-6 flex items-center gap-2">
          <span className="text-xl">⚠️</span> Danger Zone
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">
                Delete Account
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Permanently remove all data
              </span>
            </div>
            <Button
              variant="destructive"
              size="sm"
              className="bg-error-800/20 text-error-400 border border-error-800/50 hover:bg-error-800/40"
            >
              Delete
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">
                Reset Progress
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Start fresh — keep account
              </span>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:text-white"
            >
              Reset
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
