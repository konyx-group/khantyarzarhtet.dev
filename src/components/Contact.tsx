import { useState, type FormEvent } from 'react'
import { useToast } from '@/hooks/use-toast'
import {
  EMAIL,
  EMAIL_LINK,
  FULL_NAME,
  GITHUB_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
} from '@/lib/constants'
import { Reveal, SectionHeader, SectionShell } from '@/components/shared/PortfolioUI'

const contacts = [
  { label: 'OPEN SOURCE', link: GITHUB_URL },
  { label: 'PROFESSIONAL', link: LINKEDIN_URL },
  { label: 'TELEGRAM', link: TELEGRAM_URL },
]

export function Contact() {
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      toast({
        title: 'Email copied!',
        description: `${EMAIL} has been copied to your clipboard.`,
      })
    } catch {
      toast({
        title: 'Could not copy',
        description: 'Please copy the email manually.',
      })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `${EMAIL_LINK}?subject=${subject}&body=${body}`
    toast({
      title: 'Opening your email client…',
      description: 'Your message has been prepared in a draft email.',
    })
  }

  return (
    <SectionShell id="contact">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title="LET'S BUILD SOMETHING USEFUL."
          description="Have a product idea, an engineering challenge, or a role that looks like a strong fit? I’d like to hear about it."
        />

        {/* Contact Grid: Left form, Right info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <Reveal>
            <h3 className="text-xl md:text-2xl text-white font-light leading-tight mb-6">
              I'M CURRENTLY OPEN TO<br />
              PROJECTS & ROLES
            </h3>
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-8">
              IN A HURRY? PLEASE REACH OUT DIRECTLY
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="sr-only" htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white placeholder:text-white/25 transition focus:border-cyan-300/40 focus:bg-white/[0.06] focus:outline-none"
                />
                <label className="sr-only" htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white placeholder:text-white/25 transition focus:border-cyan-300/40 focus:bg-white/[0.06] focus:outline-none"
                />
              </div>
              <label className="sr-only" htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message…"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white placeholder:text-white/25 transition focus:border-cyan-300/40 focus:bg-white/[0.06] focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-12 rounded-full bg-cyan-300 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-200"
              >
                Send Message
              </button>
            </form>
          </Reveal>

          {/* Right Column - Direct Links */}
          <Reveal delay={0.12}>
            <div className="space-y-0">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-4 flex items-center justify-between border-t border-white/10 px-4 py-5 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="text-sm text-gray-400 tracking-widest group-hover:text-white transition-colors">
                    {contact.label}
                  </span>
                  <span className="text-gray-500 group-hover:text-white transition-colors">
                    ↗
                  </span>
                </a>
              ))}
              <div className="border-t border-gray-800" />
            </div>

            {/* Copy Email */}
            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-4 tracking-widest uppercase">
                Or reach me directly
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={EMAIL_LINK}
                  className="text-lg text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  {EMAIL}
                </a>
                <button
                  onClick={copyEmail}
                  className="px-4 py-2 text-xs font-medium tracking-widest uppercase text-gray-300 border border-gray-800 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Copy
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  GitHub
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white transition-colors underline underline-offset-4"
                >
                  Telegram
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <Reveal className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row lg:mt-32">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {FULL_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Myanmar
          </p>
        </Reveal>
    </SectionShell>
  )
}