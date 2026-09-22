/** Shared smooth-scroll used by nav + hero portrait. */

let scrollRaf = 0

/**
 * JS-driven smooth scroll that tracks the element live each frame.
 * Re-reads position so lazy-loaded images above the target don't leave us short.
 */
export function smoothScrollToElement(el: HTMLElement, duration = 700) {
  if (scrollRaf) cancelAnimationFrame(scrollRaf)

  const startY = window.scrollY
  const getTargetY = () => el.getBoundingClientRect().top + window.scrollY
  if (Math.abs(getTargetY() - startY) < 1) return

  const start = performance.now()
  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / duration)
    const targetY = getTargetY()
    window.scrollTo(0, startY + (targetY - startY) * ease(progress))

    if (progress < 1) {
      scrollRaf = requestAnimationFrame(step)
    } else {
      window.scrollTo(0, getTargetY())
      settleOnElement(el)
    }
  }

  scrollRaf = requestAnimationFrame(step)
}

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

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) smoothScrollToElement(element)
}
