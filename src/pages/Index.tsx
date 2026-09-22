import { Navigation } from '@/components/Navigation'
import { BackToTop } from '@/components/BackToTop'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Play } from '@/components/Play'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />
      <BackToTop />
      <main>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Work />
        <Play />
        <Contact />
      </main>
    </div>
  )
}

