import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import logoIcon from '@/../public/icon-logo.svg'

const inputClassName =
  'h-11 w-full rounded-xl border border-gray-800 bg-gray-1100 px-4 text-sm text-gray-200 outline-none placeholder:text-gray-500 focus:border-primary-600'

export default function SignUpPage() {
  return (
    <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-7 shadow-auth-card backdrop-blur">
      <div className="mb-6 text-center">
        <Link
          href="/"
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600/15 ring-1 ring-primary-600/60"
        >
          <Image src={logoIcon} alt="LinguaAI logo" width={22} height={22} />
        </Link>
        <h2 className="text-3xl font-semibold text-white">LinguaAI</h2>
        <p className="mt-2 text-sm text-gray-400">
          Your AI English learning companion
        </p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-1 rounded-xl border border-gray-700 bg-gray-1000 p-1">
        <Link
          href="/sign-in"
          className="rounded-lg py-2 text-center text-sm font-semibold text-gray-400 transition hover:text-white"
        >
          Sign In
        </Link>
        <span className="rounded-lg bg-gray-900 py-2 text-center text-sm font-semibold text-gray-100">
          Create Account
        </span>
      </div>

      <form className="space-y-3.5">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">
              First name
            </label>
            <input className={inputClassName} placeholder="First name" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300">
              Last name
            </label>
            <input className={inputClassName} placeholder="Last name" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Email</label>
          <input className={inputClassName} placeholder="Email" />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <input
            className={inputClassName}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">
            Confirm Password
          </label>
          <input
            className={inputClassName}
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <Button className="mt-1 h-11 w-full rounded-xl bg-primary-600 text-sm font-semibold text-gray-1100 hover:bg-primary-400">
          Create Free Account →
        </Button>
      </form>

      <p className="mt-5 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link
          href="/sign-in"
          className="font-semibold text-primary-400 hover:text-primary-300"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
