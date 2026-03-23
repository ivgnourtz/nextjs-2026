import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import iconChat from '@/../public/icon-chat.svg'
import iconMic from '@/../public/icon-mic.svg'
import iconVolume from '@/../public/icon-volume.svg'
import iconBook from '@/../public/icon-book.svg'
import iconRotate from '@/../public/icon-rotate.svg'
import iconPen from '@/../public/icon-pen.svg'
import iconArrowRight from '@/../public/icon-arrow-right.svg'

const features = [
  {
    icon: iconChat,
    iconBg: 'bg-primary-600/20',
    title: 'AI Chat Tutor',
    description:
      'Practice real conversations. Your AI tutor corrects grammar and explains mistakes instantly.',
  },
  {
    icon: iconMic,
    iconBg: 'bg-info-600/20',
    title: 'Speaking Practice',
    description:
      'Record your voice and receive AI pronunciation scores, powered by Whisper AI.',
  },
  {
    icon: iconVolume,
    iconBg: 'bg-primary-600/20',
    title: 'Text-to-Speech',
    description:
      'Hear native, quality pronunciations via ElevenLabs for authentic listening practice.',
  },
  {
    icon: iconBook,
    iconBg: 'bg-warning-600/20',
    title: 'AI Lesson Generator',
    description:
      'Personalized lessons — vocabulary, dialogues, and quizzes — tailored to your exact level.',
  },
  {
    icon: iconRotate,
    iconBg: 'bg-error-500/20',
    title: 'Vocabulary Trainer',
    description:
      'Master new words with spaced repetition flashcards built on scientific memory models.',
  },
  {
    icon: iconPen,
    iconBg: 'bg-primary-600/20',
    title: 'Writing Correction',
    description:
      'Submit essays and get AI feedback on grammar, style, coherence, and vocabulary.',
  },
]

const steps = [
  {
    number: '01',
    color: 'bg-primary-600',
    title: 'Set your level',
    description: 'A1-C2 placement test. AI calibrates to you.',
  },
  {
    number: '02',
    color: 'bg-info-600',
    title: 'Chat with AI Tutor',
    description: 'Real conversations. Errors corrected in real-time.',
  },
  {
    number: '03',
    color: 'bg-pink-600',
    title: 'Train speaking',
    description: 'Record, score, improve with Whisper AI.',
  },
  {
    number: '04',
    color: 'bg-primary-600',
    title: 'Build vocabulary',
    description: 'Spaced repetition. Never forget a word.',
  },
  {
    number: '05',
    color: 'bg-info-600',
    title: 'Write & Improve',
    description: 'AI grammar and style feedback on essays.',
  },
  {
    number: '06',
    color: 'bg-pink-600',
    title: 'Track progress',
    description: 'Daily streak, XP, and skill scores.',
  },
]

const stats = [
  { value: '50K+', label: 'Active Learners' },
  { value: '4.9★', label: 'App Rating' },
  { value: '5 Modes', label: 'AI Learning' },
  { value: '7-Day', label: 'Free Plan' },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* ─── Hero Section ─── */}
      <section
        id="hero"
        className="relative flex flex-col items-center text-center pt-20 pb-24 w-full"
      >
        {/* Badge row */}
        <div className="hero-badge mb-8 flex items-center gap-2 rounded-full border border-primary-600/30 bg-primary-600/10 px-4 py-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-primary-600 uppercase">
            GPT-4 &middot; Whisper AI &middot; ElevenLabs
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-4">
          Speak English
          <br />
          <span className="font-quotes italic text-primary-600">
            Like a Native
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-md text-gray-400 text-md leading-relaxed mb-8">
          An AI-powered tutor that corrects your grammar, trains your
          pronunciation, and builds your vocabulary — all in real-time.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 mb-12">
          <Link href="/sign-up">
            <Button
              variant="primary"
              className="px-7 py-3 text-md font-bold rounded-full shadow-teal hover:shadow-lg transition-all duration-300"
            >
              Start for Free
              <Image
                src={iconArrowRight}
                alt=""
                width={16}
                height={16}
                className="ml-1 inline-block"
              />
            </Button>
          </Link>
          <Link href="/demo">
            <Button className="px-7 py-3 text-md font-bold rounded-full border border-gray-600 bg-transparent text-white hover:bg-gray-800 transition-all duration-300">
              View Demo
            </Button>
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight">
                {stat.value}
              </span>
              <span className="text-2xs md:text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Core Features Section ─── */}
      <section id="features" className="w-full max-w-5xl px-6 py-20">
        <Badge className="mb-4 border-primary-600/30 bg-primary-600/10 text-primary-600 uppercase tracking-widest text-2xs font-bold h-auto px-3 py-1 rounded-full">
          Core Features
        </Badge>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
          Everything you need
          <br />
          to master English
        </h2>
        <p className="text-gray-400 text-md mb-12 max-w-lg">
          Powered by OpenAI, Whisper, and Eleven Labs for a complete immersive
          learning experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-gray-900/60 border-gray-700/40 ring-gray-700/40 hover:ring-primary-600/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <CardHeader className="gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center`}
                >
                  <Image
                    src={feature.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                </div>
                <CardTitle className="text-white text-lg font-bold">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── How It Works Section ─── */}
      <section id="how-it-works" className="w-full max-w-5xl px-6 py-20">
        <Badge className="mb-4 border-primary-600/30 bg-primary-600/10 text-primary-600 uppercase tracking-widest text-2xs font-bold h-auto px-3 py-1 rounded-full">
          How It Works
        </Badge>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-12">
          From zero to fluent in 7 days
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="bg-gray-900/60 border-gray-700/40 ring-gray-700/40 hover:ring-primary-600/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <CardHeader className="gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${step.color} flex items-center justify-center`}
                >
                  <span className="text-xs font-extrabold text-white">
                    {step.number}
                  </span>
                </div>
                <CardTitle className="text-white text-lg font-bold">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section id="cta" className="w-full max-w-5xl px-6 pb-24 pt-8">
        <div className="relative rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900 via-gray-1000 to-gray-900 p-12 md:p-16 flex flex-col items-center text-center overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />

          <h2 className="relative text-3xl md:text-4xl font-extrabold text-white mb-3">
            Ready to speak fluently?
          </h2>
          <p className="relative text-gray-400 text-md mb-8 max-w-md">
            Join 50,000+ learners. Free to start. No credit card required.
          </p>
          <div className="relative flex items-center gap-4">
            <Link href="/sign-up">
              <Button
                variant="primary"
                className="px-7 py-3 text-md font-bold rounded-full shadow-teal hover:shadow-lg transition-all duration-300"
              >
                Create Free Account
                <Image
                  src={iconArrowRight}
                  alt=""
                  width={16}
                  height={16}
                  className="ml-1 inline-block"
                />
              </Button>
            </Link>
            <Link href="/demo">
              <Button className="px-7 py-3 text-md font-bold rounded-full border border-gray-600 bg-transparent text-white hover:bg-gray-800 transition-all duration-300">
                Explore Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
