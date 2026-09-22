import { Navigation } from '@/components/Navigation'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Certifications } from '@/components/Certifications'
import { Education } from '@/components/Education'
import { Writing } from '@/components/Writing'
import { Speaking } from '@/components/Speaking'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#about"
        className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <GrainOverlay />
      <ScrollProgress />
      <Navigation />
      <BackToTop />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Work />
        <Certifications />
        <Education />
        <Writing />
        <Speaking />
        <Contact />
      </main>
    </div>
  )
}

