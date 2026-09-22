import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { CERTIFICATIONS, type Certification } from '@/lib/data'
import { Reveal, SectionHeader, SectionShell } from '@/components/shared/PortfolioUI'

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  return (
    <SectionShell id="certifications">
        <SectionHeader
          eyebrow="Credentials"
          title="CERTIFIED. ALWAYS LEARNING."
          description="Formal milestones that complement hands-on engineering experience."
        />

        {/* Certification Cards - 2 columns, full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal
              key={cert.title}
              delay={index * 0.06}
            >
              <button
                onClick={() => setSelectedCert(cert)}
                className="group flex min-h-36 w-full items-end gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-left transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.05]"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium text-white/80 group-hover:text-white">
                    {cert.title}
                  </span>
                  <span className="mt-2 block text-xs text-white/35">{cert.issuer}</span>
                </span>
                <span className="font-mono text-xs text-cyan-300/60">{cert.year}</span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Certification Detail Modal */}
        <Dialog
          open={selectedCert !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedCert(null)
          }}
        >
          <DialogContent className="max-w-lg bg-brand-panel border-gray-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-lg md:text-xl font-light text-white pr-6">
                {selectedCert?.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                {selectedCert?.issuer} ·{' '}
                <span className="uppercase tracking-widest">{selectedCert?.year}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-2">
              {/* Badge */}
              <div className="flex-none w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {selectedCert?.description}
              </p>
            </div>
          </DialogContent>
        </Dialog>
    </SectionShell>
  )
}