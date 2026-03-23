export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="relative flex min-h-[calc(100vh)] w-full items-center justify-center overflow-hidden bg-gray-1100 px-4 py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,170,0.12),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(91,142,255,0.14),transparent_38%)]" />
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </section>
  )
}
