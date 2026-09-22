import { useState, useEffect } from 'react'

const sections = ['about', 'skills', 'work', 'github', 'testimonials', 'certifications', 'education', 'writing', 'speaking', 'contact']

/**
 * Determines which section is currently "active" (shown in the page nav).
 *
 * Strategy: the active section is the bottom-most section whose top edge has
 * crossed a trigger line fixed at `lineRatio` of the viewport height. This is
 * deterministic — exactly one section can ever be active — and avoids the
 * flapping cause by an IntersectionObserver "band" that lets two neighbouring
 * sections be flagged at the same time.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const lineRatio = 0.35

    const update = () => {
      const line = window.innerHeight * lineRatio
      let current = ''

      // Iterate in DOM order (top -> bottom). The last section whose top is
      // above the line is the one we consider active.
      for (const sectionId of sections) {
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

