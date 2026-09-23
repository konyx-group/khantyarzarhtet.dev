import { motion } from 'framer-motion'
import { PLAY_PROJECTS } from '@/lib/data'
import {
  GITHUB_URL,
  KONYX_NAME,
  KONYX_TAGLINE,
  TELEGRAM_URL,
} from '@/lib/constants'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Play() {
  return (
    <section id="konyx" className="section-padding bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Studio
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-end">
          <div>
            <motion.h2
              {...fadeInUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-white"
            >
              {KONYX_NAME}
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.08 }}
              className="mt-4 text-xs tracking-widest uppercase text-white/40"
            >
              {KONYX_TAGLINE}
            </motion.p>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.12 }}
            className="lg:pb-1"
          >
            <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-md lg:ml-auto lg:text-right">
              A solo coding collective and personal brand I founded to ship
              small experiments, games, and ideas — one person, one studio.
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-xs tracking-widest uppercase lg:justify-end">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Telegram ↗
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-t border-white/10 pt-8"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
              Experiments
            </p>
            <h3 className="font-display text-2xl sm:text-3xl leading-none tracking-tight text-white">
              PLAY
            </h3>
          </div>
          <p className="text-sm text-white/50 leading-relaxed max-w-md sm:text-right">
            Small HTML / JS games hosted on GitHub Pages — built for fun, not
            for clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {PLAY_PROJECTS.map((project, index) => (
            <motion.article
              key={project.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex flex-col border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden border-b border-white/10"
              >
                <div className="aspect-[16/10] bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
              </a>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-xl text-white/25">
                    {project.num}
                  </span>
                  <h3 className="text-lg font-light text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs tracking-widest uppercase">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Live demo ↗
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
