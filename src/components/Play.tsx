import { motion } from 'framer-motion'
import { PLAY_PROJECTS } from '@/lib/data'
import { GITHUB_URL } from '@/lib/constants'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Play() {
  return (
    <section id="play" className="section-padding bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Side Experiments
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            {...fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight text-white"
          >
            PLAY
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-sm lg:text-base text-white/50 leading-relaxed max-w-md lg:text-right"
          >
            Small HTML / JS games hosted on GitHub Pages — built for fun, not
            for clients.
          </motion.p>
        </div>

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

        <motion.p
          {...fadeInUp}
          className="mt-10 text-xs text-gray-600 tracking-widest uppercase"
        >
          More on{' '}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            github.com/konyx-group
          </a>
        </motion.p>
      </div>
    </section>
  )
}
