import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  PROJECTS,
  PROJECT_FILTERS,
  type Project,
  type ProjectFilter,
} from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Selected Work
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <div className="mb-10 lg:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            {...fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight text-white"
          >
            PROJECTS
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-sm lg:text-base text-white/50 leading-relaxed max-w-md lg:text-right"
          >
            Products and systems I&apos;ve shipped — web platforms, mobile apps,
            and desktop tools.
          </motion.p>
        </div>

        <motion.div
          {...fadeInUp}
          className="mb-10 lg:mb-14 flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-white/10 pb-4"
        >
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300',
                filter === f
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              )}
            >
              {f}
              {filter === f && (
                <span className="ml-2 inline-block h-px w-6 bg-white align-middle" />
              )}
            </button>
          ))}
          <span className="ml-auto hidden sm:inline text-xs text-gray-600 tracking-widest uppercase">
            {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </motion.div>

        <div className="border-t border-white/10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.button
                key={project.num + project.title}
                type="button"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="w-full text-left border-b border-white/10 py-8 md:py-10 group hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-1 flex items-baseline gap-3">
                    <span className="font-display text-2xl text-white/25 group-hover:text-white/50 transition-colors">
                      {project.num}
                    </span>
                  </div>

                  <div className="md:col-span-3 order-first md:order-none">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-600 tracking-widest uppercase">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-light text-white mb-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.company}</p>
                    <p className="text-xs text-gray-600 mt-1">{project.role}</p>
                  </div>

                  <div className="md:col-span-4">
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <ul className="hidden sm:flex flex-wrap gap-x-3 gap-y-1 mb-4">
                      {project.highlights.slice(0, 2).map((h) => (
                        <li
                          key={h}
                          className="text-xs text-gray-500 before:content-['·'] before:mr-2 before:text-gray-600"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs tracking-widest uppercase text-gray-600 group-hover:text-white/70 transition-colors">
                      View details →
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <Dialog
          open={selectedProject !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null)
          }}
        >
          <DialogContent className="max-w-2xl w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto bg-brand-panel border-white/10 text-white sm:rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-light text-white pr-6">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                {selectedProject?.role} · {selectedProject?.company} ·{' '}
                {selectedProject?.location} ·{' '}
                <span className="uppercase tracking-widest">
                  {selectedProject?.period}
                </span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5">
              {selectedProject && (
                <div className="aspect-[2/1] max-h-52 overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {selectedProject?.details}
              </p>

              {selectedProject?.highlights && (
                <div>
                  <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm text-gray-400"
                      >
                        <span className="text-white/30 shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs text-white/70 border border-white/10 bg-white/[0.03] rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
