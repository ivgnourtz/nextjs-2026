'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import LearnSidebar from '@/components/learn/LearnSidebar'
import { iconBook, iconCheck, iconFire, iconZap, iconTrophy } from '@/lib/icons'

type TabKey = 'flashcards' | 'wordList' | 'quiz'

export default function VocabularyPage() {
  const [tab, setTab] = useState<TabKey>('flashcards')

  const wordRows = useMemo(
    () => [
      {
        word: 'Persevere',
        meaning: 'To continue despite difficulty',
        status: 'Review',
        review: 'Today',
        progressColor: 'bg-primary-600/15 ring-primary-600/40',
      },
      {
        word: 'Eloquent',
        meaning: 'Fluent and persuasive in speech',
        status: 'Mastered',
        review: 'in 7 days',
        progressColor: 'bg-primary-600/10 ring-primary-600/20',
      },
      {
        word: 'Ambiguous',
        meaning: 'Open to multiple interpretations',
        status: 'Learning',
        review: 'Tomorrow',
        progressColor: 'bg-info-600/10 ring-info-600/20',
      },
      {
        word: 'Nuance',
        meaning: 'A subtle difference in meaning',
        status: 'Review',
        review: 'Today',
        progressColor: 'bg-warning-600/10 ring-warning-600/20',
      },
      {
        word: 'Tenacious',
        meaning: 'Holding firm, persistently determined',
        status: 'Learning',
        review: 'in 2 days',
        progressColor: 'bg-pink-600/10 ring-pink-600/20',
      },
    ],
    [],
  )

  return (
    <div className="w-full max-w-7xl px-6 pb-10">
      <div className="flex gap-6">
        <LearnSidebar activeHref="/vocabulary" />

        <section className="flex-1">
          <p className="text-primary-400 text-xs font-bold uppercase tracking-widest">
            VOCABULARY TRAINER
          </p>
          <h2 className="text-white text-4xl font-extrabold mt-3">
            Smart Flashcards
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-2xl">
            Spaced repetition — review words at the perfect moment to lock them
            in long-term memory.
          </p>

          {/* Tabs */}
          <div className="mt-6 rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-2">
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  key: 'flashcards' as const,
                  label: 'Flashcards',
                  icon: iconBook,
                },
                {
                  key: 'wordList' as const,
                  label: 'Word List',
                  icon: iconCheck,
                },
                { key: 'quiz' as const, label: 'Quiz', icon: iconTrophy },
              ].map((t) => {
                const active = t.key === tab
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTab(t.key)}
                    className={[
                      'rounded-xl h-10 flex items-center justify-center gap-2 text-sm font-semibold border transition',
                      active
                        ? 'bg-primary-600/20 border-primary-600/40 text-white'
                        : 'bg-gray-900/20 border-gray-700/30 text-gray-400 hover:text-gray-200 hover:bg-gray-900/30',
                    ].join(' ')}
                  >
                    <Image src={t.icon} alt="" width={16} height={16} />
                    {t.label}
                  </button>
                )
              })}
            </div>
          </div>

          {tab === 'flashcards' && (
            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Card 1 of 24 due today</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-primary-300 font-semibold">
                  <Image src={iconFire} alt="" width={12} height={12} />
                  24 due
                </span>
              </div>

              <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-8 flex flex-col items-center">
                <p className="text-primary-300 text-xs font-semibold uppercase tracking-widest">
                  VERB · B2
                </p>
                <h3 className="text-white text-3xl font-extrabold mt-2">
                  Persevere
                </h3>
                <p className="text-gray-400 text-sm mt-1">/ˌpɜːsɪˈvɪə(r)/</p>
                <p className="text-gray-500 text-xs mt-6">
                  Tap to reveal meaning
                </p>

                <div className="mt-7 flex gap-3">
                  <Button className="h-9 rounded-xl bg-pink-600/10 text-pink-200 border border-pink-600/20 hover:bg-pink-600/15">
                    Hard
                  </Button>
                  <Button className="h-9 rounded-xl bg-warning-600/10 text-warning-200 border border-warning-600/20 hover:bg-warning-600/15">
                    Good
                  </Button>
                  <Button className="h-9 rounded-xl bg-primary-600/10 text-primary-200 border border-primary-600/20 hover:bg-primary-600/15">
                    Easy
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-200 font-bold text-sm">
                    Session progress
                  </p>
                  <p className="text-gray-400 text-xs">3 / 24 reviewed</p>
                </div>
                <div className="h-2.5 rounded-full bg-gray-900/40 ring-1 ring-gray-700/30 overflow-hidden">
                  <div
                    className="h-full bg-primary-600"
                    style={{ width: '12.5%' }}
                  />
                </div>
              </div>
            </div>
          )}

          {tab === 'wordList' && (
            <div className="mt-6 rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-bold text-sm">Flashcards</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-gray-300">
                  <Image src={iconZap} alt="" width={12} height={12} />
                  Review list
                </span>
              </div>

              <div className="overflow-auto">
                <table className="min-w-[780px] w-full text-left">
                  <thead>
                    <tr className="text-gray-400 text-xs uppercase tracking-wider">
                      <th className="py-2 px-3">Word</th>
                      <th className="py-2 px-3">Meaning</th>
                      <th className="py-2 px-3">Status</th>
                      <th className="py-2 px-3">Review</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wordRows.map((row) => (
                      <tr
                        key={row.word}
                        className="border-t border-gray-700/30"
                      >
                        <td className="py-3 px-3">
                          <div className="text-white font-semibold text-sm">
                            {row.word}
                          </div>
                          <div className="text-gray-500 text-xs mt-1">
                            /.../
                          </div>
                        </td>
                        <td className="py-3 px-3 text-gray-300 text-sm">
                          {row.meaning}
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`inline-flex items-center rounded-full border border-gray-700/30 px-3 py-1 text-xs text-gray-200 ${row.progressColor}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-gray-400 text-sm">
                          {row.review}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'quiz' && (
            <div className="mt-6 rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400 text-sm">
                  Question 2 of 10 · B2 Level
                </p>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-gray-300">
                  <Image src={iconTrophy} alt="" width={12} height={12} />
                  Quiz
                </span>
              </div>

              <div className="h-2.5 rounded-full bg-gray-900/40 ring-1 ring-gray-700/30 overflow-hidden mb-5">
                <div
                  className="h-full bg-primary-600"
                  style={{ width: '25%' }}
                />
              </div>

              <p className="text-white text-lg font-semibold mb-5">
                “Despite many setbacks, she continued to ____ until she reached
                her goal.”
              </p>

              <div className="space-y-3">
                {[
                  { key: 'A', label: 'abandon' },
                  { key: 'B', label: 'persevere' },
                  { key: 'C', label: 'hesitate' },
                  { key: 'D', label: 'recede' },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    className="w-full rounded-xl border border-gray-700/30 bg-gray-900/20 py-3 px-4 text-left text-gray-200 hover:bg-gray-900/30 transition flex items-center gap-3"
                  >
                    <span className="h-7 w-7 rounded-lg bg-gray-900/40 border border-gray-700/30 flex items-center justify-center text-xs font-bold text-gray-300">
                      {opt.key}
                    </span>
                    <span className="text-sm font-semibold capitalize">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-end">
                <Button className="h-10 rounded-xl bg-primary-600 text-gray-1100 hover:bg-primary-400 px-5">
                  Next Question →
                </Button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
