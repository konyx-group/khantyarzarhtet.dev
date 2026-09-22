import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'
import { FULL_NAME, SECTIONS } from '@/lib/constants'

const navItems = SECTIONS

export function Navigation() {
  const activeSection = useActiveSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left"
            aria-label="Back to top"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">
              KY
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-white/80 sm:block">
              {FULL_NAME}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-medium transition-colors',
                  activeSection === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.12em] text-white/55">Available</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={cn(
          'fixed inset-0 z-40 flex flex-col justify-center bg-slate-950/95 px-8 backdrop-blur-2xl transition duration-300 md:hidden',
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'border-b border-white/10 py-5 text-left font-display text-5xl transition-colors',
                activeSection === item.id ? 'text-cyan-300' : 'text-white/70'
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}