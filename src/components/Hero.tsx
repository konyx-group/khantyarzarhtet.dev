import { useEffect, useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { HERO_IMAGE_URL, HERO_PROFILE_URL, RESUME_URL, FULL_NAME, KONYX_NAME } from '@/lib/constants'
import { ROLES } from '@/lib/data'
import { HERO_ORBIT_RINGS } from '@/components/HeroOrbitLogos'
import { scrollToSection } from '@/lib/scroll'

function useTypewriter(words: string[], typeSpeed = 80, deleteSpeed = 40, pauseTime = 1600) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseTime)
    } else if (deleting && text === '') {
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

const FOUNDER_LINE = `Founder of ${KONYX_NAME}`

function useHoverTypewriter(full: string, active: boolean, typeSpeed = 36) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (!active) {
      setText('')
      return
    }

    setText('')
    let i = 0
    const timeout = { id: 0 as ReturnType<typeof setTimeout> }

    const tick = () => {
      i += 1
      setText(full.slice(0, i))
      if (i < full.length) {
        timeout.id = setTimeout(tick, typeSpeed)
      }
    }

    timeout.id = setTimeout(tick, 80)
    return () => clearTimeout(timeout.id)
  }, [active, full, typeSpeed])

  return text
}

const easeOut = [0.22, 1, 0.36, 1] as const

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOut },
  },
}

export function Hero() {
  const typedRole = useTypewriter(ROLES)
  const [portraitHover, setPortraitHover] = useState(false)
  const founderTyped = useHoverTypewriter(FOUNDER_LINE, portraitHover)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      >
        <img
          src={HERO_IMAGE_URL}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-24 md:pb-0 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-12 lg:gap-20">
          {/* Text — staggered entrance */}
          <motion.div
            className="flex-1 min-w-0"
            variants={textContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={textItem}
              className="inline-block mb-5 px-3 py-1 text-xs sm:text-sm font-medium tracking-widest uppercase text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
            >
              {typedRole}
              <span className="ml-1 inline-block w-[2px] h-[0.9em] bg-white/80 align-middle animate-pulse" />
            </motion.span>

            <motion.h1
              variants={textItem}
              className="font-display leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block text-white">KHANT YAR ZAR</span>
              <span className="block text-white/90">HTET</span>
            </motion.h1>

            <motion.p
              variants={textItem}
              className="mt-6 text-sm sm:text-base text-white/80 max-w-md leading-relaxed"
            >
              "Building Scalable Solutions for Mobile & Web." <br />
              I am a Full-Stack Developer specializing in seamless user experiences and robust backend architectures. 
              I turn complex problems into fast, reliable, and human-centered products.
            </motion.p>

            <motion.a
              variants={textItem}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
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

          {/* Profile as the sun — 3 orbit rings (2 · 2 · 3 logos) */}
          <motion.div
            className="shrink-0 self-center md:self-auto md:ml-auto"
            initial={{ opacity: 0, scale: 0.88, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: easeOut }}
          >
            <div className="-translate-x-3 -translate-y-4 sm:-translate-x-5 sm:-translate-y-6 md:-translate-x-8 md:-translate-y-10 lg:-translate-x-12 lg:-translate-y-14">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Orbit path rings */}
                {HERO_ORBIT_RINGS.map((ring) => (
                  <div
                    key={`path-${ring.orbit}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 pointer-events-none"
                    style={{ width: `${ring.orbit}%`, height: `${ring.orbit}%` }}
                    aria-hidden="true"
                  />
                ))}

                {/* One spinning track per ring; multiple logos share it */}
                {HERO_ORBIT_RINGS.map((ring) => (
                  <div
                    key={`ring-${ring.orbit}`}
                    className="hero-orbit-ring absolute left-1/2 top-1/2 pointer-events-none"
                    style={{
                      width: `${ring.orbit}%`,
                      height: `${ring.orbit}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {ring.logos.map(({ name, Icon, color, start }) => (
                      <div
                        key={name}
                        className="hero-planet-revolve absolute left-1/2 top-1/2 z-20"
                        style={
                          {
                            '--orbit-dur': `${ring.duration}s`,
                            '--orbit-start': `${start}deg`,
                            animationDirection: ring.reverse ? 'reverse' : 'normal',
                          } as CSSProperties
                        }
                      >
                        <div className="hero-planet group relative flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 border border-white/15 backdrop-blur-sm shadow-lg shadow-black/50 pointer-events-auto">
                          <Icon
                            color={color}
                            className="h-4 w-4 sm:h-5 sm:w-5 md:h-[1.35rem] md:w-[1.35rem]"
                          />
                          <span className="hero-planet-label pointer-events-none absolute bottom-full left-1/2 mb-2 z-30 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-[10px] sm:text-xs font-medium tracking-wide text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                            {name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Sun — click portrait → Konyx */}
                <button
                  type="button"
                  onClick={() => scrollToSection('konyx')}
                  onMouseEnter={() => setPortraitHover(true)}
                  onMouseLeave={() => setPortraitHover(false)}
                  onFocus={() => setPortraitHover(true)}
                  onBlur={() => setPortraitHover(false)}
                  aria-label={`${FULL_NAME}, founder of ${KONYX_NAME}. Go to Konyx section`}
                  className="absolute left-1/2 top-1/2 z-10 w-[48%] h-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-transform duration-300 hover:scale-[1.03]"
                >
                  <img
                    src={HERO_PROFILE_URL}
                    alt={FULL_NAME}
                    width={288}
                    height={288}
                    className="h-full w-full rounded-full object-cover object-center ring-1 ring-white/25 shadow-[0_0_60px_-12px_rgba(255,255,255,0.15)]"
                  />
                </button>

                {/* Founder label + leader line (anchored to text so they stay aligned) */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute z-30 left-[68%] top-[14%] sm:left-[70%] sm:top-[12%] md:left-[72%] md:top-[10%] transition-opacity duration-300 ${
                    portraitHover ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <svg
                    className="absolute right-full top-[0.55em] -translate-y-1/2 overflow-visible w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16"
                    viewBox="0 0 96 64"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="50"
                      y1="80"
                      x2="70"
                      y2="40"
                      stroke="rgba(255,255,255,0.55)"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <p className="relative whitespace-nowrap text-[10px] sm:text-xs tracking-widest uppercase text-white/85 min-h-[1.25em]">
                    {founderTyped}
                    {portraitHover && founderTyped.length < FOUNDER_LINE.length && (
                      <span className="ml-0.5 inline-block w-[1px] h-[0.9em] bg-white/80 align-middle animate-pulse" />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
