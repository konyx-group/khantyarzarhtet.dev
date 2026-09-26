import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { HERO_IMAGE_URL, HERO_PROFILE_URL, KONYX_NAME } from '@/lib/constants'

const ASSETS = [HERO_IMAGE_URL, HERO_PROFILE_URL]
const MINIMUM_DISPLAY_TIME = 900
const HOLD_AT_COMPLETE = 1100
const FALLBACK_TIMEOUT = 5000
const OVERLAY_FADE_DURATION = 0.85

type LoadingScreenProps = {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showContent, setShowContent] = useState(true)
  const shouldReduceMotion = useReducedMotion()
  const onCompleteRef = useRef(onComplete)
  const hasCompletedRef = useRef(false)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (hasCompletedRef.current) return

    const startedAt = performance.now()
    let settledAssets = 0
    let completionTimer: ReturnType<typeof setTimeout> | undefined
    let rafId = 0
    let displayProgress = 0
    let targetProgress = 0

    const tickProgress = () => {
      const next = displayProgress + (targetProgress - displayProgress) * 0.18
      displayProgress = Math.abs(targetProgress - next) < 0.35 ? targetProgress : next
      setProgress(Math.round(displayProgress))

      if (displayProgress < targetProgress) {
        rafId = requestAnimationFrame(tickProgress)
      }
    }

    const setTarget = (value: number) => {
      targetProgress = value
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(tickProgress)
    }

    const finish = () => {
      if (hasCompletedRef.current) return
      hasCompletedRef.current = true
      setTarget(100)

      const elapsed = performance.now() - startedAt
      const remainingMinimum = Math.max(0, MINIMUM_DISPLAY_TIME - elapsed)

      completionTimer = setTimeout(() => {
        setShowContent(false)
        // One paint with solid black (no bar), then hand off — Hero is already under us.
        requestAnimationFrame(() => {
          onCompleteRef.current()
        })
      }, remainingMinimum + HOLD_AT_COMPLETE)
    }

    const markAssetSettled = () => {
      if (hasCompletedRef.current) return
      settledAssets += 1
      setTarget(Math.round((settledAssets / ASSETS.length) * 100))

      if (settledAssets === ASSETS.length) {
        finish()
      }
    }

    const images = ASSETS.map((src) => {
      const image = new Image()
      let hasSettled = false

      const settleOnce = () => {
        if (hasSettled) return
        hasSettled = true
        markAssetSettled()
      }

      image.onload = settleOnce
      image.onerror = settleOnce
      image.src = src

      if (image.complete) {
        settleOnce()
      }

      return image
    })

    const fallbackTimer = setTimeout(finish, FALLBACK_TIMEOUT)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(fallbackTimer)
      if (completionTimer) clearTimeout(completionTimer)
      cancelAnimationFrame(rafId)
      images.forEach((image) => {
        image.onload = null
        image.onerror = null
      })
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-black px-6 text-white"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: shouldReduceMotion ? 0.15 : OVERLAY_FADE_DURATION,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${KONYX_NAME}, ${progress}%`}
    >
      <div
        className="w-full max-w-2xl transition-opacity duration-150"
        style={{ opacity: showContent ? 1 : 0 }}
      >
        <h1 className="font-display text-left text-3xl leading-none tracking-wide sm:text-4xl">
          {KONYX_NAME}
        </h1>

        <div className="mt-4 h-[2px] w-full overflow-hidden bg-white/15" aria-hidden="true">
          <motion.div
            className="h-full origin-left bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
          />
        </div>

        <div className="mt-2 flex justify-end">
          <span
            className="font-mono text-[11px] tabular-nums tracking-wider text-white/55 sm:text-xs"
            aria-hidden="true"
          >
            {String(progress).padStart(3, '0')}%
          </span>
        </div>
      </div>
    </motion.div>
  )
}
