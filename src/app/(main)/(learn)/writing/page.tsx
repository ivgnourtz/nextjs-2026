import Image from 'next/image'

import { Button } from '@/components/ui/button'
import LearnSidebar from '@/components/learn/LearnSidebar'
import { iconEdit, iconSend, iconCheck, iconStar } from '@/lib/icons'

export default function WritingPage() {
  const myWriting =
    'The internet have changed the way people communicate in the last decade. Before, people only can write letters or make phone calls. Now, we can send messages instantly and even have video calls with peoples around the world. This is very benefiting for business and personal relationships. However, some peoples spend too much time on social medias, which can be harmful for their mental health.'

  return (
    <div className="w-full max-w-7xl px-6 pb-10">
      <div className="flex gap-6">
        <LearnSidebar activeHref="/writing" />

        <section className="flex-1">
          <p className="text-primary-400 text-xs font-bold uppercase tracking-widest">
            WRITING CORRECTION
          </p>
          <h2 className="text-white text-4xl font-extrabold mt-3">
            AI Essay Feedback
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-2xl">
            Submit your writing and receive detailed AI corrections on grammar,
            style, vocabulary, and coherence.
          </p>

          <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-5">
            {/* Left: Your Writing */}
            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-white font-bold text-sm inline-flex items-center gap-2">
                  <span className="h-9 w-9 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                    <Image src={iconEdit} alt="" width={18} height={18} />
                  </span>
                  Your Writing
                </p>
              </div>

              <div className="rounded-2xl border border-gray-700/30 bg-gray-900/20 p-4">
                <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                  {myWriting}
                </p>
              </div>

              <div className="mt-4">
                <Button className="w-full h-11 rounded-xl bg-primary-600 text-gray-1100 hover:bg-primary-400">
                  Analyze with AI →
                </Button>
              </div>
            </div>

            {/* Right: Corrections */}
            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-white font-bold text-sm">AI Corrections</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-primary-300 font-semibold">
                  <Image src={iconCheck} alt="" width={12} height={12} />7
                  issues found
                </span>
              </div>

              <div className="space-y-3">
                <CorrectionItem
                  title="GRAMMAR · PRESENT PERFECT"
                  highlight1="have changed"
                  correct="has changed"
                />
                <CorrectionItem
                  title="GRAMMAR · MODALS"
                  highlight1="only can write"
                  correct="can only write"
                />
                <CorrectionItem
                  title="PLURAL · VOCAB"
                  highlight1="peoples"
                  correct="people"
                />
                <CorrectionItem
                  title="VOCAB · SOCIAL MEDIA"
                  highlight1="social medias"
                  correct="social media"
                />
                <CorrectionItem
                  title="COHERENCE · DETAIL"
                  highlight1="benefiting"
                  correct="beneficial"
                />
              </div>

              <div className="mt-4 rounded-2xl border border-gray-700/30 bg-gray-900/20 p-4">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                  <Image src={iconStar} alt="" width={12} height={12} />
                  Summary
                </p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  Great start — focus on present perfect agreement, plural
                  forms, and more precise vocabulary.
                </p>
              </div>
            </div>
          </div>

          {/* Overall score */}
          <div className="mt-6">
            <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-bold text-base">
                  Overall Score & Feedback
                </p>
                <span className="rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-primary-300 font-semibold">
                  B2 Level
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <ScoreCard
                  value={72}
                  label="Grammar"
                  color="bg-primary-600/10 border-primary-600/20"
                />
                <ScoreCard
                  value={68}
                  label="Vocabulary"
                  color="bg-info-600/10 border-info-600/20"
                />
                <ScoreCard
                  value={80}
                  label="Coherence"
                  color="bg-warning-600/10 border-warning-600/20"
                />
                <ScoreCard
                  value={75}
                  label="Style"
                  color="bg-pink-600/10 border-pink-600/20"
                />
                <ScoreCard
                  value={74}
                  label="Overall"
                  color="bg-primary-600/10 border-primary-600/20"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-gray-700/30 bg-gray-900/20 p-4">
                <p className="text-primary-300 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                  <Image src={iconSend} alt="" width={12} height={12} />
                  STYLE SUGGESTION
                </p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  Vary your sentence openers. Try: “Whereas previously…”, or “In
                  contrast to …”, to add sophistication.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function CorrectionItem({
  title,
  highlight1,
  correct,
}: {
  title: string
  highlight1: string
  correct: string
}) {
  return (
    <div className="rounded-2xl border border-gray-700/30 bg-gray-900/20 p-4">
      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
        {title}
      </p>
      <p className="text-gray-200 text-sm mt-2 leading-relaxed">
        <span className="rounded-md bg-red-500/10 px-2 py-1 text-red-200 border border-red-500/20">
          {highlight1}
        </span>{' '}
        → <span className="text-primary-200 font-semibold">{correct}</span>
      </p>
    </div>
  )
}

function ScoreCard({
  value,
  label,
  color,
}: {
  value: number
  label: string
  color: string
}) {
  return (
    <div className={`rounded-2xl border p-4 text-center ${color}`}>
      <p className="text-white text-2xl font-extrabold">{value}</p>
      <p className="text-gray-400 text-xs mt-1">{label}</p>
    </div>
  )
}
