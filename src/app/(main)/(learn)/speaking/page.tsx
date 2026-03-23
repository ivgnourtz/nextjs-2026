import Image from 'next/image'
import { Button } from '@/components/ui/button'

import {
  iconMic,
  iconMicVolume,
  iconCheck,
  iconStar,
  iconZap,
} from '@/lib/icons'
import LearnSidebar from '@/components/learn/LearnSidebar'

export default function SpeakingPage() {
  return (
    <div className="w-full max-w-7xl px-6 pb-10">
      <div className="flex gap-6">
        <LearnSidebar activeHref="/speaking" />

        <section className="flex-1">
          <p className="text-primary-400 text-xs font-bold uppercase tracking-widest">
            SPEAKING PRACTICE
          </p>
          <h2 className="text-white text-4xl font-extrabold mt-3">
            Pronunciation Trainer
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-2xl">
            Record your voice and receive instant AI feedback on pronunciation,
            fluency, and rhythm.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Read this sentence aloud */}
            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                  <Image src={iconMicVolume} alt="" width={18} height={18} />
                </div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  READ THIS SENTENCE ALOUD
                </p>
              </div>

              <blockquote className="mt-4 text-white text-lg font-semibold leading-relaxed">
                “The weather in the north is getting colder, and I think we
                should bring warmer clothes for the trip.”
              </blockquote>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-gray-200">
                  <Image src={iconCheck} alt="" width={12} height={12} />
                  New sentence
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-gray-200">
                  <Image src={iconMic} alt="" width={12} height={12} />
                  Hear native pronunciation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-gray-200">
                  <Image src={iconStar} alt="" width={12} height={12} />
                  B2 Level
                </span>
              </div>

              <div className="mt-6 w-full h-px bg-gray-700/30" />

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary-600" />
                  <p className="text-gray-400 text-xs">
                    Tip: focus on /d/ sounds
                  </p>
                </div>
                <Button className="h-9 rounded-xl bg-primary-600 text-gray-1100 px-4 hover:bg-primary-400">
                  Play audio
                </Button>
              </div>
            </div>

            {/* Record panel */}
            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6 flex flex-col items-center justify-center">
              <div className="w-full flex flex-col items-center">
                <div className="w-full h-20 rounded-xl bg-gray-900/20 flex items-end justify-center gap-1 px-6">
                  {Array.from({ length: 18 }).map((_, i) => {
                    const h = 10 + ((i * 7) % 40)
                    return (
                      <span
                        key={i}
                        className="w-2 rounded-full bg-primary-600/60"
                        style={{ height: h }}
                      />
                    )
                  })}
                </div>

                <div className="mt-6 h-24 w-24 rounded-full bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                  <Image src={iconMic} alt="" width={26} height={26} />
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Tap to start recording
                </p>

                <div className="mt-5 w-full rounded-xl border border-gray-700/30 bg-gray-900/20 p-3">
                  <p className="text-gray-400 text-xs">
                    Your spoken words will appear here as text...
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Button className="h-10 rounded-xl bg-primary-600 text-gray-1100 hover:bg-primary-400 px-5">
                  Start recording
                </Button>
                <Button className="h-10 rounded-xl border border-gray-700/30 bg-gray-900/20 text-gray-200 px-5 hover:bg-gray-900/30">
                  Stop
                </Button>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="mt-6 rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-white font-bold text-base">
                  AI Pronunciation Feedback
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Instant scores with actionable tips
                </p>
              </div>
              <span className="rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-primary-300 font-semibold inline-flex items-center gap-2">
                <Image src={iconZap} alt="" width={12} height={12} />
                Overall: 87/100
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  value: 92,
                  label: 'Pronunciation',
                  color: 'bg-primary-600/15',
                },
                { value: 85, label: 'Fluency', color: 'bg-info-600/15' },
                { value: 79, label: 'Rhythm', color: 'bg-warning-600/15' },
                { value: 93, label: 'Clarity', color: 'bg-primary-500/15' },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border border-gray-700/30 ${s.color} p-4`}
                >
                  <p className="text-white font-extrabold text-2xl">
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-gray-700/30 bg-gray-900/20 p-4">
              <p className="text-primary-300 text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2">
                <Image src={iconStar} alt="" width={12} height={12} />
                AI FEEDBACK
              </p>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Great work! “Weather” and “clothes” were very clear. Slighly
                “colder” emphasizes the /d/ sound. Overall fluency is excellent
                for B2 level!
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="h-11 rounded-xl bg-primary-600 text-gray-1100 px-6 hover:bg-primary-400">
                Analyze My Pronunciation
              </Button>
              <Button className="h-11 rounded-xl border border-gray-700/30 bg-gray-900/20 text-gray-200 px-6 hover:bg-gray-900/30">
                Practice in Chat
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
