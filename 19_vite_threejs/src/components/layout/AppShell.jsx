function AppShell({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-10">
        <header className="space-y-2">
          {subtitle ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
        </header>

        <main className="grid gap-8 lg:grid-cols-[2fr_1fr]">{children}</main>

        <footer className="text-center text-xs text-muted-foreground">
          Built with Vite, Three.js, and shadcn/ui
        </footer>
      </div>
    </div>
  )
}

export default AppShell
