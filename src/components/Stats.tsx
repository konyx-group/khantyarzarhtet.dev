import { STATS } from '@/lib/data'
import { Container, Reveal } from '@/components/shared/PortfolioUI'

export function Stats() {
  return (
    <section className="border-y border-white/[0.07] bg-white/[0.025]">
      <Container className="py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className="bg-slate-950/80 px-4 py-7 text-center sm:py-9"
            >
              <p className="font-display text-4xl leading-none text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/35 sm:text-xs">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}