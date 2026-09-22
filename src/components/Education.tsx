import {
  UCSY_IMAGE_URL,
  MST_IMAGE_URL,
  OJT_IMAGE_URL,
} from '@/lib/constants'
import { Reveal, SectionHeader, SectionShell, Tag } from '@/components/shared/PortfolioUI'

const education = [
  {
    title: 'Computer Science',
    place: 'University of Computer Studies, Yangon',
    meta: 'Yangon, Myanmar',
    description:
      'A foundation in programming, algorithms, data structures, and practical software engineering.',
    image: UCSY_IMAGE_URL,
  },
  {
    title: 'ITPEC — Fundamental Information Technology Engineer',
    place: 'MST College',
    meta: 'Passed April 2025',
    description:
      'Studied Japan’s ITPEC program and passed the FE examination, validating a broad engineering foundation.',
    image: MST_IMAGE_URL,
  },
  {
    title: 'OJT — Employee Management System',
    place: 'On-the-job training',
    meta: '2025',
    description:
      'Built a complete employee management system in pure PHP, translating real operational needs into maintainable software.',
    image: OJT_IMAGE_URL,
  },
]

export function Education() {
  return (
    <SectionShell id="education" surface>
      <SectionHeader
        index="04"
        eyebrow="Journey"
        title="FOUNDATIONS & MILESTONES."
        description="The academic and practical experiences that shaped how I approach engineering."
      />
      <div className="space-y-4">
        {education.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className="group grid overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/40 md:grid-cols-[18rem_1fr]"
          >
            <div className="h-56 overflow-hidden md:h-full">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <Tag>{item.place}</Tag>
                <span className="font-mono text-xs text-cyan-300/60">0{index + 1}</span>
              </div>
              <h3 className="max-w-2xl text-xl font-medium leading-snug text-white sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">{item.description}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.14em] text-white/30">{item.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}