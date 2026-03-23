import { ProfileSidebar, ProfileTabs } from '@/components/profile'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-7xl px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8 items-start">
      <ProfileSidebar />
      <div className="flex-1 w-full flex flex-col gap-6">
        <ProfileTabs />
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
