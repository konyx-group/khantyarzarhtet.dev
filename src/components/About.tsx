import { motion } from 'framer-motion'
import { FULL_NAME, HERO_PROFILE_URL, LOCATION } from '@/lib/constants'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

const STORIES = [
  {
    num: '01',
    label: 'Origin',
    body: 'My journey began in mobile development, which gave me a strong foundation in user-centric experiences. I learned to care about interface, feel, and the small details people actually notice.',
  },
  {
    num: '02',
    label: 'Craft',
    body: 'I believe the best way to master the craft is to build. Every project is a chance to push my boundaries — whether that is a cross-platform app or a scalable web platform.',
  },
  {
    num: '03',
    label: 'Journey',
    body: 'After shipping in a fast-paced mobile environment, I moved into a full-time PHP Laravel role. Today I use that front-end intuition to architect robust back-end systems — and I run KONYX as my solo studio for experiments.',
  },
] as const

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            About Khant
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight text-white mb-12 lg:mb-16"
        >
          WHO I AM
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-20 items-center mb-16 lg:mb-20">
          <motion.figure {...fadeInUp} className="relative max-w-sm mx-auto lg:max-w-none lg:mx-0 w-full">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <img
                src={HERO_PROFILE_URL}
                alt={FULL_NAME}
                width={640}
                height={800}
                decoding="async"
                fetchPriority="low"
                className="aspect-[4/5] w-full object-cover object-[center_20%]"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs text-gray-500 tracking-widest uppercase">
              <span>Full Stack Developer</span>
              <span>{LOCATION}</span>
            </figcaption>
          </motion.figure>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-xl">
              Hi, I&apos;m Khant — a software developer driven by a deep passion
              for clean code and thoughtful design. Today I work as a full-stack
              developer, bridging engaging front-end interfaces with robust,
              scalable back-end systems. I don&apos;t just write code; I focus
              on building reliable software that genuinely solves real-world
              problems.
            </p>

            <blockquote className="mt-10 pt-8 border-t border-white/10 max-w-xl">
              <p className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.9] tracking-tight text-white">
                Building fast,
                <br />
                <span className="text-white/40">accessible</span>,
                <br />
                and human-centered
                <br />
                software.
              </p>
              <p className="mt-5 text-xs text-gray-500 tracking-widest uppercase">
                Development philosophy
              </p>
            </blockquote>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
          {STORIES.map((story, index) => (
            <motion.article
              key={story.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group px-0 md:px-8 py-8 md:py-10 border-b md:border-b-0 md:border-l border-white/10 first:md:border-l-0 first:md:pl-0 last:md:pr-0"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-2xl text-white/30 group-hover:text-white/70 transition-colors duration-300">
                  {story.num}
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
                  {story.label}
                </span>
              </div>
              <p className="text-sm lg:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {story.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
