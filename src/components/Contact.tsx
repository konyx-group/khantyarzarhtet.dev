import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import {
  EMAIL,
  EMAIL_LINK,
  FULL_NAME,
  GITHUB_URL,
  GITHUB_USERNAME,
  LINKEDIN_URL,
  LOCATION,
  TELEGRAM_URL,
} from '@/lib/constants'

const CHANNELS = [
  {
    num: '01',
    label: 'Email',
    value: EMAIL,
    href: EMAIL_LINK,
    copy: true,
    external: false,
  },
  {
    num: '02',
    label: 'GitHub',
    value: GITHUB_USERNAME,
    href: GITHUB_URL,
    copy: false,
    external: true,
  },
  {
    num: '03',
    label: 'LinkedIn',
    value: 'khantyarzarhtet',
    href: LINKEDIN_URL,
    copy: false,
    external: true,
  },
  {
    num: '04',
    label: 'Telegram',
    value: '@kony_x',
    href: TELEGRAM_URL,
    copy: false,
    external: true,
  },
] as const

const fieldClass =
  'w-full bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/50 transition-colors duration-300'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Contact() {
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
      toast({
        title: 'Email copied',
        description: `${EMAIL} is on your clipboard.`,
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
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            Contact
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            {...fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-white"
          >
            GET IN TOUCH
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-xs tracking-widest uppercase text-white/40"
          >
            Open to projects & roles
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div {...fadeInUp}>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl leading-[0.9] tracking-tight text-white mb-8 max-w-md">
              Have an idea?
              <br />
              <span className="text-white/35">Let&apos;s build it.</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <label className="block">
                  <span className="block text-[10px] tracking-widest uppercase text-gray-500 mb-2">
                    Name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="block text-[10px] tracking-widest uppercase text-gray-500 mb-2">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-[10px] tracking-widest uppercase text-gray-500 mb-2">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What should we work on?"
                  required
                  rows={4}
                  className={`${fieldClass} resize-none`}
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-widest uppercase text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Send Message
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
          >
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
              Direct channels
            </p>
            <div className="border-t border-white/10">
              {CHANNELS.map((channel, index) => (
                <motion.div
                  key={channel.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group border-b border-white/10 py-5 flex items-baseline gap-4"
                >
                  <span className="font-display text-xl text-white/25 w-8 shrink-0">
                    {channel.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
                      {channel.label}
                    </p>
                    {channel.copy ? (
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="text-sm md:text-base text-white/80 hover:text-white transition-colors text-left"
                      >
                        {channel.value}
                      </button>
                    ) : (
                      <a
                        href={channel.href}
                        target={channel.external ? '_blank' : undefined}
                        rel={channel.external ? 'noopener noreferrer' : undefined}
                        className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
                      >
                        {channel.value}
                      </a>
                    )}
                  </div>
                  {channel.copy ? (
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="shrink-0 text-[10px] tracking-widest uppercase text-gray-500 hover:text-white transition-colors"
                    >
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  ) : (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-gray-600 group-hover:text-white transition-colors"
                      aria-label={`Open ${channel.label}`}
                    >
                      ↗
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-24 lg:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {FULL_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 tracking-widest uppercase">
            {LOCATION}
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
