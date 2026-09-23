/** Shared smooth-scroll used by nav + hero portrait. */

let scrollRaf = 0

/**
 * JS-driven smooth scroll.
 * Locks the destination at start so lazy images / layout shifts mid-scroll
 * don't make the path stutter. A short settle pass only corrects large misses.
 */
export function smoothScrollToElement(el: HTMLElement, duration = 700) {
  if (scrollRaf) cancelAnimationFrame(scrollRaf)

  const startY = window.scrollY
  const endY = el.getBoundingClientRect().top + window.scrollY
  const distance = endY - startY

  if (Math.abs(distance) < 1) return

  // Short hops feel smoother if they finish a bit faster
  const ms = Math.min(duration, Math.max(320, Math.abs(distance) * 0.55))
  const start = performance.now()
  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / ms)
    window.scrollTo(0, startY + distance * ease(progress))

    if (progress < 1) {
      scrollRaf = requestAnimationFrame(step)
    } else {
      window.scrollTo(0, endY)
      settleOnElement(el)
    }
  }

  scrollRaf = requestAnimationFrame(step)
}

function settleOnElement(el: HTMLElement, ms = 280) {
  const deadline = performance.now() + ms
  const tick = () => {
    const targetY = el.getBoundingClientRect().top + window.scrollY
    // Only nudge if layout shifted a meaningful amount (e.g. image decode)
    if (Math.abs(targetY - window.scrollY) > 4) {
      window.scrollTo(0, targetY)
    }
    if (performance.now() < deadline) {
      scrollRaf = requestAnimationFrame(tick)
    }
  }
  scrollRaf = requestAnimationFrame(tick)
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) smoothScrollToElement(element)
}
