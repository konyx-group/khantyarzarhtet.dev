import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CERTIFICATIONS,
  EDUCATION,
  type Certification,
} from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export function Education() {
  const [openCert, setOpenCert] = useState<string | null>(null)

  const toggleCert = (cert: Certification) => {
    setOpenCert((current) => (current === cert.title ? null : cert.title))
  }

  return (
    <section id="education" className="section-padding bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Background
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            {...fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight text-white"
          >
            EDUCATION
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-sm lg:text-base text-white/50 leading-relaxed max-w-md lg:text-right"
          >
            Studies, training, and credentials that shaped how I build software.
          </motion.p>
        </div>

        <div className="border-t border-white/10 mb-16 lg:mb-24">
          {EDUCATION.map((item, index) => (
            <motion.article
              key={item.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-white/10"
            >
              <div className="md:col-span-2 flex items-baseline gap-3">
                <span className="font-display text-2xl text-white/30">
                  {item.num}
                </span>
                <span className="text-xs tracking-widest uppercase text-gray-500 md:hidden">
                  {item.period}
                </span>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-lg md:text-xl font-light text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.school}</p>
                <p className="text-xs text-gray-600 mt-1">{item.location}</p>
              </div>
              <div className="md:col-span-4">
                <p className="hidden md:block text-xs text-gray-500 tracking-widest uppercase mb-3">
                  {item.period}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div id="certifications">
          <motion.h3
            {...fadeInUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight text-white mb-8 lg:mb-10"
          >
            CERTIFICATIONS
          </motion.h3>

          <div className="border-t border-white/10">
            {CERTIFICATIONS.map((cert, index) => {
              const isOpen = openCert === cert.title
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="border-b border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleCert(cert)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-5 md:py-6 grid grid-cols-[4.5rem_1fr_auto] sm:grid-cols-[5.5rem_1fr_auto] gap-4 items-baseline group"
                  >
                    <span className="text-xs tracking-widest uppercase text-gray-500 group-hover:text-gray-400 transition-colors">
                      {cert.year}
                    </span>
                    <span>
                      <span className="block text-sm md:text-base text-white/80 group-hover:text-white transition-colors">
                        {cert.title}
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">
                        {cert.issuer}
                      </span>
                    </span>
                    <span
                      className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors"
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="pb-6 pr-8 sm:pl-[5.5rem] text-sm text-gray-400 leading-relaxed max-w-3xl">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
