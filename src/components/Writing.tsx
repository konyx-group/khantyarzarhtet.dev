import { ARTICLES } from '@/lib/data'
import { ContentList, SectionHeader, SectionShell } from '@/components/shared/PortfolioUI'

export function Writing() {
  return (
    <SectionShell id="writing">
      <SectionHeader
        eyebrow="Writing"
        title="NOTES FROM THE BUILD."
        description="Practical lessons on architecture, mobile development, and growing as an engineer."
      />
      <ContentList
        items={ARTICLES.map((article) => ({
          title: article.title,
          meta: `Essay · ${article.publication}`,
          year: article.year,
          href: article.link,
        }))}
      />
    </SectionShell>
  )
}