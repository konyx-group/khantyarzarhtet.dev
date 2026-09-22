import { useState, useEffect } from 'react'
import { SECTIONS } from '@/lib/constants'

/**
 * Determines which section is currently "active" (shown in the page nav).
 *
 * Strategy: the active section is the bottom-most section whose top edge has
 * crossed a trigger line fixed at `lineRatio` of the viewport height. This is
 * deterministic — exactly one section can ever be active — and avoids the
 * flapping cause by an IntersectionObserver "band" that lets two neighbouring
 * sections be flagged at the same time.
 *
 * Section order MUST match page DOM order (same as SECTIONS / Index).
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const lineRatio = 0.35
    const sectionIds = SECTIONS.map((s) => s.id)

    const update = () => {
      const line = window.innerHeight * lineRatio
      let current = ''

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) {
          current = sectionId
        }
      }

      setActiveSection(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return activeSection
}
