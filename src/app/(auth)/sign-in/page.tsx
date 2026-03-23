import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import logoIcon from '@/../public/icon-logo.svg'
import googleIcon from '@/../public/icon-google.svg'
import appleIcon from '@/../public/icon-apple.svg'

const inputClassName =
  'h-11 w-full rounded-xl border border-gray-800 bg-gray-1100 px-4 text-sm text-gray-200 outline-none placeholder:text-gray-500 focus:border-primary-600'

export default function SignInPage() {
  return (
    <div className="auth-card-shadow rounded-3xl border border-gray-800 bg-gray-900/80 p-7 backdrop-blur">
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
        <span className="rounded-lg bg-gray-900 py-2 text-center text-sm font-semibold text-gray-100">
          Sign In
        </span>
        <Link
          href="/sign-up"
          className="rounded-lg py-2 text-center text-sm font-semibold text-gray-400 transition hover:text-white"
        >
          Create Account
        </Link>
      </div>

      <form className="space-y-3.5">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">
            Email address
          </label>
          <input
            className={inputClassName}
            title="Email address"
            placeholder="Email address"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <input
            className={inputClassName}
            type="password"
            title="Password"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 text-xs text-gray-400">
            <input
              type="checkbox"
              defaultChecked
              className="accent-primary-600"
            />
            Remember me
          </label>
          <Link
            href="#"
            className="text-xs text-primary-400 hover:text-primary-300"
          >
            Forgot password?
          </Link>
        </div>

        <Button className="mt-2 h-11 w-full rounded-xl bg-primary-600 text-sm font-semibold text-gray-1100 hover:bg-primary-400">
          Sign In →
        </Button>
      </form>

      <div className="my-5 flex items-center gap-3 text-xs text-gray-500">
        <span className="h-px flex-1 bg-gray-800" />
        or continue with
        <span className="h-px flex-1 bg-gray-800" />
      </div>

      <div className="space-y-2.5">
        <Button className="h-10 w-full rounded-xl border border-gray-800 bg-gray-1000 text-sm text-gray-300 hover:bg-gray-900">
          <Image
            src={googleIcon}
            alt="Google icon"
            width={14}
            height={14}
            className="mr-2"
          />
          Google
        </Button>
        <Button className="h-10 w-full rounded-xl border border-gray-800 bg-gray-1000 text-sm text-gray-300 hover:bg-gray-900">
          <Image
            src={appleIcon}
            alt="Apple icon"
            width={14}
            height={14}
            className="mr-2"
          />
          Apple
        </Button>
      </div>

      <p className="mt-5 text-center text-sm text-gray-500">
        No account?{' '}
        <Link
          href="/sign-up"
          className="font-semibold text-primary-400 hover:text-primary-300"
        >
          Sign up free
        </Link>
      </p>
    </div>
  )
}
