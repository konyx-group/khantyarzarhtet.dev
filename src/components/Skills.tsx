import { Code2, Database, Layout, Smartphone } from 'lucide-react'
import { SKILLS } from '@/lib/data'
import { Reveal, SectionHeader, SectionShell } from '@/components/shared/PortfolioUI'

const icons = [Code2, Layout, Smartphone, Database]

export function Skills() {
  return (
    <SectionShell id="skills" surface>
      <SectionHeader
        index="02"
        eyebrow="Capabilities"
        title="TOOLS I BUILD WITH."
        description="A practical full-stack toolkit shaped by shipping real products across web, mobile, desktop, and data."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <Reveal
              key={skill}
              delay={index * 0.04}
              className="group min-h-44 rounded-2xl border border-white/[0.08] bg-slate-950/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.05]"
            >
              {(() => {
                const Icon = icons[index % icons.length]
                return <Icon className="h-5 w-5 text-cyan-300/80" aria-hidden="true" />
              })()}
              <span className="mt-14 block text-base font-medium text-white/75 transition-colors group-hover:text-white">
                {skill}
              </span>
              <span className="mt-3 block font-mono text-[10px] text-white/25">
                0{index + 1}
              </span>
            </Reveal>
          ))}
      </div>
    </SectionShell>
  )
}