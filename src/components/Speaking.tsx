import { TALKS } from '@/lib/data'
import { ContentList, SectionHeader, SectionShell } from '@/components/shared/PortfolioUI'

export function Speaking() {
  return (
    <SectionShell id="speaking" surface>
      <SectionHeader
        eyebrow="Speaking"
        title="SHARING WHAT WORKS."
        description="Talks and workshops designed to make technical ideas practical and approachable."
      />
      <ContentList
        items={TALKS.map((talk) => ({
          title: talk.title,
          meta: `Talk · ${talk.event}`,
          year: talk.year,
          href: talk.link,
        }))}
      />
    </SectionShell>
  )
}