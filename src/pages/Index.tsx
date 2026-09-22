import { Navigation } from '@/components/Navigation'
import { BackToTop } from '@/components/BackToTop'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { GitHub } from '@/components/GitHub'
import { Testimonials } from '@/components/Testimonials'
import { Certifications } from '@/components/Certifications'
import { Education } from '@/components/Education'
import { Writing } from '@/components/Writing'
import { Speaking } from '@/components/Speaking'
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
        <Skills />
        <Work />
        {/* <GitHub />
        <Testimonials /> */}
        <Certifications />
        <Education />
        <Writing />
        <Speaking />
        <Contact />
      </main>
    </div>
  )
}

