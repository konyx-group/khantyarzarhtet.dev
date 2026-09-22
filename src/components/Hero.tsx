import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HERO_IMAGE_URL, RESUME_URL } from '@/lib/constants'
import { ROLES } from '@/lib/data'

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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HERO_IMAGE_URL}
          alt="Developer workspace with code on screen"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for better text readability and blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-24 md:pb-0 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Typing badge */}
            <span className="inline-block mb-5 px-3 py-1 text-xs sm:text-sm font-medium tracking-widest uppercase text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              {typedRole}
              <span className="ml-1 inline-block w-[2px] h-[0.9em] bg-white/80 align-middle animate-pulse" />
            </span>

            {/* Name - smaller and cleaner */}
            <h1 className="font-display leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-white">KHANT YAR ZAR</span>
              <span className="block text-white/90">HTET</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 text-sm sm:text-base text-white/80 max-w-md leading-relaxed"
            >
              Full stack developer focused on building fast, accessible, and human-centered mobile and web applications. Currently shipping Java, JavaScript, TypeScript, React, ReactNative, PHP, Laravel and Node.js products.
            </motion.p>

            {/* Resume Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              {/* Eye / View Icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5h5v5M19 5l-9 9"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 13v4a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4"
                />
              </svg>
              Show Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}