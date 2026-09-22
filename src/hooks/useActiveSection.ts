import { useState, useEffect } from 'react'
import { SECTIONS } from '@/lib/constants'

const sectionIds = SECTIONS.map(({ id }) => id)

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
            }
          })
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return activeSection
}

