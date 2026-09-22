import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Expertise
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            {...fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight text-white"
          >
            SKILLS
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-sm lg:text-base text-white/50 leading-relaxed max-w-md lg:text-right"
          >
            Stack I use to ship mobile apps, web platforms, and clean backend
            systems — from idea to production.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-white/10">
          {SKILL_GROUPS.map((group, index) => (
            <motion.article
              key={group.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group py-8 md:py-10 border-b border-white/10 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 [&:nth-last-child(-n+2)]:sm:border-b-0"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-2xl text-white/30 group-hover:text-white/70 transition-colors duration-300">
                  {group.num}
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
                  {group.label}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-sm text-white/70 border border-white/10 bg-white/[0.03] rounded-md hover:border-white/25 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
