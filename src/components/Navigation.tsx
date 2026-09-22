import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/lib/utils'
import { EMAIL_LINK, GITHUB_URL, LINKEDIN_URL, SECTIONS } from '@/lib/constants'

const navItems = SECTIONS

const socialLinks = [
  { label: 'Mail', href: EMAIL_LINK },
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
]

/** Cancels an in-flight nav scroll when the user clicks another section. */
let scrollRaf = 0

/**
 * JS-driven smooth scroll that tracks the element live each frame.
 *
 * Native `scrollIntoView({ behavior: 'smooth' })` gets silently cancelled when
 * the DOM is mutated mid-scroll (active-nav class toggles). A fixed targetY is
 * also wrong on first visit: lazy images above the destination still have ~0
 * height when we click, then expand as they enter the viewport — so we land
 * short (above the section). Re-reading the element's position every frame
 * (and briefly after) follows those layout shifts.
 */
function smoothScrollToElement(el: HTMLElement, duration = 700) {
  if (scrollRaf) cancelAnimationFrame(scrollRaf)

  const startY = window.scrollY
  const getTargetY = () => el.getBoundingClientRect().top + window.scrollY
  if (Math.abs(getTargetY() - startY) < 1) return

  const start = performance.now()
  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / duration)
    // Aim at the live position so expanding content above doesn't leave us short
    const targetY = getTargetY()
    window.scrollTo(0, startY + (targetY - startY) * ease(progress))

    if (progress < 1) {
      scrollRaf = requestAnimationFrame(step)
    } else {
      window.scrollTo(0, getTargetY())
      // Lazy images can still finish loading a beat after the animation ends
      settleOnElement(el)
    }
  }

  scrollRaf = requestAnimationFrame(step)
}

/** Keep pinned to the section for a short window while layout settles. */
function settleOnElement(el: HTMLElement, ms = 900) {
  const deadline = performance.now() + ms
  const tick = () => {
    const targetY = el.getBoundingClientRect().top + window.scrollY
    if (Math.abs(targetY - window.scrollY) > 1) {
      window.scrollTo(0, targetY)
    }
    if (performance.now() < deadline) {
      scrollRaf = requestAnimationFrame(tick)
    }
  }
  scrollRaf = requestAnimationFrame(tick)
}

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      smoothScrollToElement(element)
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start md:hidden">
        {/* Menu Button - Left */}
        <div className="relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-sm text-white mix-blend-difference"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute left-0 mt-4 w-48 bg-brand-panel border border-white/10 rounded-lg backdrop-blur-sm shadow-xl shadow-black/50 overflow-hidden">
              <div className="py-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      'w-full text-left px-5 py-3 text-sm text-white transition-colors duration-200',
                      'hover:bg-white/5',
                      activeSection === item.id && 'bg-white/[0.06] text-white'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Social Links - Right (Mobile) */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Social Links - Fixed Top Right (hidden on mobile) */}
      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10">
        <div className="flex items-center gap-6 justify-end">
          <span className="flex items-center gap-2 text-xs text-white/70 mix-blend-difference">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
            </span>
            Open to work
          </span>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation Items - Fixed Bottom Right (hidden on mobile) */}
      <nav 
        className={cn(
          'hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 transition-all duration-500',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-sm text-white mix-blend-difference transition-all duration-300 relative py-1',
                'hover:opacity-60',
                activeSection === item.id && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}