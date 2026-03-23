import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import LearnSidebar from '@/components/learn/LearnSidebar'
import { iconPen, iconStar, iconZap } from '@/lib/icons'

export default function LessonsPage() {
  const vocab = [
    {
      word: 'Correspondence',
      pos: 'NOUN',
      meaning: 'Written communication in business',
    },
    {
      word: 'Forchoming',
      pos: 'ADJECTIVE',
      meaning: 'About to happen or appear soon',
    },
    {
      word: 'Acknowledgement',
      pos: 'VERB',
      meaning: 'To confirm receipt of something',
    },
    {
      word: 'Liaise',
      pos: 'VERB',
      meaning: 'To maintain communication and cooperation',
    },
    {
      word: 'Stipulate',
      pos: 'VERB',
      meaning: 'To specify as part of an agreement',
    },
    {
      word: 'Pursuant',
      pos: 'ADVERB',
      meaning: 'In accordance with; following',
    },
  ]

  return (
    <div className="w-full max-w-7xl px-6 pb-10">
      <div className="flex gap-6">
        <LearnSidebar activeHref="/lessons" />

        <section className="flex-1">
          <p className="text-primary-400 text-xs font-bold uppercase tracking-widest">
            AI LESSON GENERATOR
          </p>
          <h2 className="text-white text-4xl font-extrabold mt-3">
            Generate Your Lesson
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-2xl">
            AI creates personalized lessons — vocabulary, dialogues, and quizzes
            — at your exact level.
          </p>

          {/* Settings */}
          <div className="mt-6 rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white font-bold text-sm inline-flex items-center gap-2">
                <span className="h-9 w-9 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                  <Image src={iconPen} alt="" width={18} height={18} />
                </span>
                Lesson Settings
              </p>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-700/30 bg-gray-900/20 px-3 py-1 text-xs text-primary-300 font-semibold">
                <Image src={iconStar} alt="" width={12} height={12} />
                B2
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Field label="Topic" value="Business English" />
              <Field label="Level" value="B2" />
              <Field label="Length" value="20 min" />
              <Field label="Focus" value="Vocabulary + Speaking" />
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button className="h-11 rounded-xl bg-primary-600 text-gray-1100 hover:bg-primary-400 px-6">
                <span className="inline-flex items-center gap-2">
                  <Image src={iconZap} alt="" width={14} height={14} />
                  Generate Lesson with AI
                </span>
              </Button>
              <Button className="h-11 rounded-xl border border-gray-700/30 bg-gray-900/20 text-gray-200 hover:bg-gray-900/30 px-6">
                Practice in Chat
              </Button>
            </div>
          </div>

          {/* Generated lesson */}
          <div className="mt-6 rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                  Business Email Writing
                </p>
                <p className="text-white text-xl font-extrabold mt-2">
                  Business Email Writing
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  B2 · 20 min · AI Generated · 6 vocabulary words
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-gray-900/20 text-gray-200 border border-gray-700/30"
                >
                  Vocabulary
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-900/20 text-gray-200 border border-gray-700/30"
                >
                  Dialogue
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-900/20 text-gray-200 border border-gray-700/30"
                >
                  Quiz
                </Badge>
              </div>
            </div>

            <div className="mb-5 grid grid-cols-1 md:grid-cols-3 gap-3">
              {vocab.map((v) => (
                <div
                  key={v.word}
                  className="rounded-2xl border border-gray-700/30 bg-gray-900/20 p-4"
                >
                  <p className="text-primary-300 text-xs font-bold uppercase tracking-widest">
                    {v.word}
                  </p>
                  <p className="text-white text-sm font-extrabold mt-2">
                    {v.pos}
                  </p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    {v.meaning}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gray-700/30 bg-gray-900/20 p-5">
              <p className="text-white font-bold text-sm mb-3">
                DIALOGUE PRACTICE
              </p>
              <div className="space-y-3">
                <DialogueLine
                  who="Alex"
                  text="Dear Mr. Smith, I am writing to acknowledge receipt of your proposal dated 14 March."
                />
                <DialogueLine
                  who="AI"
                  text="Thank you. Pursuant to our earlier correspondence, I'd like to discuss the terms further."
                />
                <DialogueLine
                  who="Alex"
                  text="Of course. I will liaise with my team before the forthcoming week ends."
                />
                <DialogueLine
                  who="AI"
                  text="Please ensure the contract stipulates the delivery timeline clearly."
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-700/30 bg-gray-900/20 p-5">
              <p className="text-white font-bold text-sm mb-3">
                KNOWLEDGE CHECK
              </p>
              <p className="text-gray-200 text-sm mb-4">
                1. Which word means “to confirm receipt of something”?
              </p>
              <div className="flex flex-wrap gap-2">
                {['Stipulate', 'Acknowledgement', 'Liaise', 'Pursuant'].map(
                  (t) => (
                    <span
                      key={t}
                      className={[
                        'rounded-full border px-3 py-1 text-xs font-semibold',
                        t === 'Acknowledgement'
                          ? 'border-primary-600/40 bg-primary-600/15 text-primary-200'
                          : 'border-gray-700/30 bg-gray-900/20 text-gray-300',
                      ].join(' ')}
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="h-11 rounded-xl bg-primary-600 text-gray-1100 hover:bg-primary-400 px-6">
                Practice in AI Chat →
              </Button>
              <Button className="h-11 rounded-xl border border-gray-700/30 bg-gray-900/20 text-gray-200 hover:bg-gray-900/30 px-6">
                Save Words to Deck
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
        {label}
      </p>
      <div className="rounded-xl border border-gray-700/30 bg-gray-900/20 p-3 text-sm text-gray-200">
        {value}
      </div>
    </div>
  )
}

function DialogueLine({ who, text }: { who: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900/25 border border-gray-700/30 text-xs font-bold text-gray-200">
        {who === 'AI' ? 'AI' : who[0]}
      </span>
      <div className="rounded-2xl border border-gray-700/30 bg-gray-900/20 px-4 py-3">
        <p className="text-gray-300 text-xs font-semibold">{who}</p>
        <p className="text-white text-sm mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
