import {
  ABOUT_DEV_IMAGE_URL,
  ABOUT_CODE_IMAGE_URL,
  ABOUT_TEAM_IMAGE_URL,
} from '@/lib/constants'
import { Reveal, SectionHeader, SectionShell, Tag } from '@/components/shared/PortfolioUI'

const values = [
  { image: ABOUT_CODE_IMAGE_URL, label: 'Learning by building', number: '01' },
  { image: ABOUT_TEAM_IMAGE_URL, label: 'Collaboration by default', number: '02' },
]

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeader
        index="01"
        eyebrow="About"
        title="ENGINEER WITH AN EYE FOR DESIGN."
        description="I turn complex product problems into focused, dependable experiences — from database architecture to the final interaction."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="group relative min-h-[28rem] overflow-hidden rounded-3xl sm:min-h-[38rem]">
            <img
              src={ABOUT_DEV_IMAGE_URL}
              alt="Developer at a laptop in a modern workspace"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <Tag>Yangon, Myanmar</Tag>
              <p className="mt-4 max-w-lg text-lg leading-8 text-white/80">
                I care about the details people feel: speed, clarity, accessibility, and software
                that stays maintainable after launch.
              </p>
            </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal className="glass-panel rounded-3xl p-7 sm:p-9">
            <span className="font-mono text-xs text-cyan-300">CURRENTLY</span>
            <p className="mt-8 font-display text-4xl leading-[0.95] sm:text-5xl">
              SHIPPING SCALABLE WEB PRODUCTS WITH PHP & LARAVEL.
            </p>
            <p className="mt-6 text-sm leading-7 text-white/50">
              Previously focused on cross-platform mobile products, now building robust back-end
              systems and polished end-to-end web experiences.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Reveal
                key={value.label}
                delay={index * 0.08}
                className="group relative min-h-52 overflow-hidden rounded-3xl"
              >
                <img
                  src={value.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <span className="absolute left-5 top-5 font-mono text-xs text-cyan-300">
                  {value.number}
                </span>
                <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/80">
                  {value.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}