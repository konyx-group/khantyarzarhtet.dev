import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { BackToTop } from '@/components/BackToTop'
import { GrainOverlay } from '@/components/GrainOverlay'
import { LoadingScreen } from '@/components/LoadingScreen'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Play } from '@/components/Play'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'

export default function Index() {
  const [isLoading, setIsLoading] = useState(true)
  const [playIntro, setPlayIntro] = useState(false)

  // Fade the loader and start Hero entrance in the same tick — no black gap in between.
  const handleLoadingComplete = useCallback(() => {
    setPlayIntro(true)
    setIsLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-black text-foreground">
      <GrainOverlay />
      <Navigation />
      <BackToTop />
      <main>
        <Hero animateEntrance={playIntro} />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Work />
        <Play />
        <Contact />
      </main>

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading-screen" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
    </div>
  )
}
