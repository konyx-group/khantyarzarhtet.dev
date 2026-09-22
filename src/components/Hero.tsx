import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { HERO_IMAGE_URL, RESUME_URL } from '@/lib/constants'
import { ROLES } from '@/lib/data'
import { ActionLink, Container } from '@/components/shared/PortfolioUI'

function useTypewriter(words: string[], typeSpeed = 80, deleteSpeed = 40, pauseTime = 1600) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      // Pause at full word
      timeout = setTimeout(() => setDeleting(true), pauseTime)
    } else if (deleting && text === '') {
      // Move to next word
      setDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          )
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime])

  return text
}

export function Hero() {
  const typedRole = useTypewriter(ROLES)
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-[48rem] w-full items-end overflow-hidden pb-16 pt-32 sm:min-h-screen sm:pb-20">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Developer workspace with code on screen"
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.76)_48%,rgba(2,6,23,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#050b16_0%,transparent_42%,rgba(2,6,23,0.45)_100%)]" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-7 inline-flex min-h-7 items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200 sm:text-xs">
              {typedRole}
              <span className="ml-1.5 h-3 w-px animate-pulse bg-cyan-200" />
            </span>

            <h1 className="font-display text-[clamp(4.5rem,13vw,11rem)] leading-[0.72] tracking-[-0.045em] text-white">
              <span className="block">KHANT YAR</span>
              <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.65)]">
                ZAR HTET
              </span>
            </h1>

            <div className="mt-9 grid max-w-3xl gap-7 border-t border-white/15 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Full-stack developer creating fast, accessible digital products across web and
                mobile — with clean architecture and thoughtful interaction at the core.
              </p>
              <ActionLink href={RESUME_URL} external>
                View résumé
              </ActionLink>
            </div>
          </motion.div>
        </div>
        <a
          href="#about"
          className="absolute bottom-0 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white lg:flex"
        >
          Explore
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15">
            <ArrowDown className="h-4 w-4" />
          </span>
        </a>
      </Container>
    </section>
  )
}