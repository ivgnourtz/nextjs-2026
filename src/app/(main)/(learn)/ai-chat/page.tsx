import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import iconChat from '@/../public/icon-chat.svg'
import iconBook from '@/../public/icon-book.svg'
import iconMicVolume from '@/../public/icon-volume.svg'
import iconStar from '@/../public/icon-star.svg'
import iconSend from '@/../public/icon-send.svg'

const recentChats = [
  {
    title: 'Present Perfect Practice',
    time: 'Yesterday',
    count: '26 messages',
  },
  { title: 'Job Interview Prep', time: '2 days ago', count: '32 messages' },
  { title: 'Travel Vocabulary', time: '1 week ago', count: '19 messages' },
  { title: 'Idioms & Expressions', time: '3 days ago', count: '15 messages' },
]

const topicChips = ['Grammar', 'Business', 'Travel', 'Daily Life', 'IELTS']

type ChatBubble = {
  role: 'ai' | 'user'
  text: string
}

const conversation: ChatBubble[] = [
  {
    role: 'ai',
    text: "Hello Alex! I'm your AI English tutor. Today we'll practice the present perfect tense. Can you tell me about something you have done recently?",
  },
  {
    role: 'user',
    text: 'Yesterday I go to the cinema and we watch a movie.',
  },
  {
    role: 'ai',
    text: 'Good effort! Two corrections:\n\n1) Went (past simple) for the verb tense.\n2) Watched (past simple) for the verb tense.\n\nNow try: What have you done this week?',
  },
  {
    role: 'user',
    text: 'I have studied English for two hours this morning.',
  },
  {
    role: 'ai',
    text: 'Excellent! That is a perfect use of present perfect. Keep it up!',
  },
]

export default function AIChatPage() {
  return (
    <div className="w-full max-w-7xl px-6 pb-10">
      <div className="flex gap-6">
        {/* Left sidebar */}
        <aside className="w-80 shrink-0 hidden lg:block">
          <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/30 backdrop-blur p-4 h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                  <Image src={iconStar} alt="" width={18} height={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    AI English Tutor
                  </p>
                  <p className="text-gray-400 text-xs flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary-600" />
                    Online · Grammar corrections
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full h-10 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 border border-gray-700/30 text-gray-200 font-semibold mb-4">
              + New Chat
            </Button>

            <div className="mb-4">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Recent Chats
              </p>
              <div className="space-y-2">
                {recentChats.map((chat) => (
                  <Link
                    key={chat.title}
                    href="/ai-chat"
                    className="block rounded-2xl border border-gray-700/30 bg-gray-900/20 p-3 hover:bg-gray-900/40 transition"
                  >
                    <p className="text-gray-200 text-sm font-semibold">
                      {chat.title}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {chat.time} · {chat.count}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-700/40">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {topicChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                      chip === 'Grammar'
                        ? 'border-primary-600 bg-primary-600/15 text-primary-200'
                        : 'border-gray-800 bg-gray-1000 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Chat */}
        <section className="flex-1">
          <div className="rounded-2xl border border-gray-700/40 bg-gray-1000/20 backdrop-blur p-5 h-[calc(100vh-220px)] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center">
                  <Image src={iconChat} alt="" width={18} height={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    AI English Tutor
                  </p>
                  <p className="text-gray-400 text-xs">
                    Practice with corrections in real-time
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm font-semibold border border-gray-700/40 rounded-full px-3 py-1">
                Level: B2
              </p>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {conversation.map((msg, idx) => (
                <div
                  key={`${msg.role}-${idx}`}
                  className={`flex ${msg.role === 'ai' ? 'items-start' : 'justify-end'}`}
                >
                  {msg.role === 'ai' && (
                    <div className="mr-3 h-9 w-9 rounded-xl bg-primary-600/15 ring-1 ring-primary-600/40 flex items-center justify-center shrink-0">
                      <Image src={iconStar} alt="" width={16} height={16} />
                    </div>
                  )}
                  <div
                    className={`max-w-[680px] rounded-2xl border px-4 py-3 whitespace-pre-line ${
                      msg.role === 'ai'
                        ? 'bg-gray-900/35 border-gray-700/40 text-gray-200'
                        : 'bg-primary-600/15 border-primary-600/30 text-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-gray-700/40 pt-4 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="h-10 w-10 rounded-xl border border-gray-700/40 bg-gray-900/30 hover:bg-gray-900/50 transition flex items-center justify-center"
                  aria-label="Voice"
                >
                  <Image src={iconMicVolume} alt="" width={18} height={18} />
                </button>
                <button
                  type="button"
                  className="h-10 w-10 rounded-xl border border-gray-700/40 bg-gray-900/30 hover:bg-gray-900/50 transition flex items-center justify-center"
                  aria-label="Vocabulary"
                >
                  <Image src={iconBook} alt="" width={18} height={18} />
                </button>
              </div>

              <input
                className="flex-1 h-11 rounded-xl border border-gray-700/40 bg-gray-900/20 px-4 text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:border-primary-600"
                placeholder="Type your message..."
              />

              <Button className="h-11 w-11 rounded-xl bg-primary-600 hover:bg-primary-400 text-gray-1100">
                <Image src={iconSend} alt="" width={18} height={18} />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
