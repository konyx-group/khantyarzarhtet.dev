import { useState } from 'react'
import { motion } from 'framer-motion'
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
import { SectionHeader, SectionShell, Tag } from '@/components/shared/PortfolioUI'

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <SectionShell id="work">
        <SectionHeader
          index="03"
          eyebrow="Selected work"
          title="BUILT FOR THE REAL WORLD."
          description="A selection of production work and independent builds spanning commerce, education, operations, and mobile experiences."
          className="mb-10 sm:mb-12"
        />

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 lg:mb-14">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-300',
                filter === f
                  ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                  : 'border-white/10 text-white/45 hover:border-white/25 hover:text-white'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects - Timeline Layout */}
        <div className="space-y-0">
          {filteredProjects.map((project, index) => (
            <motion.button
              key={project.company + project.period}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="group w-full cursor-pointer border-t border-white/10 py-7 text-left transition-colors duration-300 hover:bg-white/[0.025] md:py-9"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                {/* Thumbnail */}
                <div className="md:col-span-3">
                  <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                </div>

                {/* Title & Meta */}
                <div className="md:col-span-4">
                  <h3 className="mb-2 text-lg font-medium text-white md:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/45">
                    {project.company}
                  </p>
                  <p className="mt-1 text-xs text-white/25">
                    {project.location}
                  </p>
                  <Tag className="mt-3">{project.category}</Tag>
                </div>

                {/* Period + Description */}
                <div className="md:col-span-5">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-cyan-300/70">
                    {project.period}
                  </p>
                  <p className="line-clamp-2 text-sm leading-relaxed text-white/45">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-white/25 transition-colors duration-300 group-hover:text-cyan-200">
                    View details →
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Project Detail Modal */}
        <Dialog
          open={selectedProject !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null)
          }}
        >
          <DialogContent className="max-w-2xl border-white/10 bg-brand-panel text-white">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-light text-white pr-6">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                {selectedProject?.company} · {selectedProject?.location} ·{' '}
                <span className="uppercase tracking-widest">{selectedProject?.period}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {selectedProject && (
                <div className="aspect-video overflow-hidden rounded-lg border border-gray-800">
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

              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs text-gray-300 border border-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    </SectionShell>
  )
}