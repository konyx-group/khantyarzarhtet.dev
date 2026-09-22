import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12', className)} {...props}>
      {children}
    </div>
  )
}

type SectionShellProps = PropsWithChildren<{
  id: string
  className?: string
  surface?: boolean
}>

export function SectionShell({ id, className, surface = false, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden py-24 sm:py-28 lg:py-36',
        surface && 'border-y border-white/[0.07] bg-white/[0.025]',
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function Reveal({ className, delay = 0, children }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  index?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  index,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn('mb-14 sm:mb-20', className)}>
      <div className="mb-7 flex items-center gap-4">
        {index && <span className="font-mono text-[11px] text-cyan-300">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
        <h2 className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.8] tracking-[-0.035em]">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-sm leading-7 text-white/50 sm:text-base">{description}</p>
        )}
      </div>
    </Reveal>
  )
}

type ActionLinkProps = {
  href: string
  children: ReactNode
  external?: boolean
  variant?: 'primary' | 'secondary'
  className?: string
}

export function ActionLink({
  href,
  children,
  external = false,
  variant = 'primary',
  className,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-xs font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300',
        variant === 'primary'
          ? 'bg-cyan-300 text-slate-950 hover:bg-cyan-200'
          : 'border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]',
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

export function Tag({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55',
        className
      )}
    >
      {children}
    </span>
  )
}

type ContentListItem = {
  title: string
  meta: string
  year: string
  href: string
}

export function ContentList({ items }: { items: ContentListItem[] }) {
  return (
    <div className="border-b border-white/10">
      {items.map((item, index) => {
        const isPlaceholder = item.href === '#'

        return (
          <Reveal key={item.title} delay={index * 0.06}>
            <a
              href={item.href}
              onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
              aria-disabled={isPlaceholder}
              className={cn(
                'group grid gap-4 border-t border-white/10 py-7 transition-colors sm:grid-cols-[1fr_auto] sm:items-center sm:py-9',
                isPlaceholder ? 'cursor-default' : 'hover:border-cyan-300/30'
              )}
            >
              <div>
                <h3 className="text-lg font-medium text-white/80 transition-colors group-hover:text-white sm:text-xl lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.13em] text-white/30">
                  {item.meta}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-cyan-300/60">{item.year}</span>
                {!isPlaceholder && <ArrowUpRight className="h-4 w-4 text-white/35" />}
              </div>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}
