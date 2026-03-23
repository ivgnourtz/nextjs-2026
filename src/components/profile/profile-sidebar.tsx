'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { iconUser, iconEdit } from '@/lib/icons'
import { cn } from '@/lib/utils'

export function ProfileSidebar() {
  return (
    <div className="w-full md:w-80 flex flex-col gap-6">
      <Card className="p-6 bg-gray-800/50 border-gray-700/50 flex flex-col items-center text-center relative overflow-hidden group">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-primary-600/20 to-transparent -z-10" />
        <div className="absolute top-4 right-4 text-primary-500/10">
          <div className="w-24 h-24 border border-current rounded-full absolute -top-12 -right-12" />
          <div className="w-32 h-32 border border-current rounded-full absolute -top-16 -right-16" />
        </div>

        <div className="relative group/avatar cursor-pointer">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-info-400 p-0.5 shadow-lg shadow-primary-500/20">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-3xl font-bold text-white overflow-hidden">
              {/* In a real app, this would be an image or initials */}
              AN
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-800 border-2 border-primary-500 rounded-full flex items-center justify-center shadow-md group-hover/avatar:bg-primary-500 transition-colors">
            <Image
              src={iconEdit}
              alt="Edit"
              width={14}
              height={14}
              className="invert group-hover/avatar:invert-0 transition-all"
            />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white">Alex Nguyen</h2>
          <p className="text-gray-400 text-sm">
            @alex.nguyen • Joined Jan 2025
          </p>
        </div>

        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Aspiring international business. Learning English for professional
          fluency. 🇻🇳 &rarr; 🌎
        </p>

        <div className="w-full mt-6 p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-primary-400 font-bold">B2</span>
            <span className="text-xs text-gray-400">
              Next: C1 — 34% complete
            </span>
          </div>
          <h3 className="text-sm font-semibold text-white mb-2">
            Upper-Intermediate
          </h3>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-500 rounded-full"
              style={{ width: '34%' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 w-full mt-6 py-4 border-t border-gray-700/50">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-white">14</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
              Streak
            </span>
          </div>
          <div className="flex flex-col items-center border-x border-gray-700/50">
            <span className="text-xl font-bold text-white">284</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
              Words
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-white">47h</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
              Time
            </span>
          </div>
        </div>

        <Button
          variant="secondary"
          className="w-full mt-6 py-6 bg-gray-700/50 border-gray-600/50 text-white hover:bg-gray-600/50 flex items-center justify-center gap-2"
        >
          <Image
            src={iconEdit}
            alt="Edit"
            width={16}
            height={16}
            className="invert opacity-70"
          />
          Edit Profile
        </Button>
      </Card>
    </div>
  )
}
