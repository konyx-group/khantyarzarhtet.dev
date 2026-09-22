/** Colored tech marks for the hero profile solar system. */

type IconProps = { className?: string; color?: string }

function ReactIcon({ className, color = '#61DAFB' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill={color} />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.25" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke={color}
        strokeWidth="1.25"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke={color}
        strokeWidth="1.25"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}

function LaravelIcon({ className, color = '#FF2D20' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M22.12 6.34 16.7 3.15a.92.92 0 0 0-.9 0L10.36 6.34a.9.9 0 0 0-.45.78v6.38c0 .32.17.62.45.78l5.44 3.19c.28.16.62.16.9 0l5.42-3.19a.9.9 0 0 0 .45-.78V7.12a.9.9 0 0 0-.45-.78ZM7.33 3.15a.92.92 0 0 0-.9 0L.99 6.34a.9.9 0 0 0-.45.78v6.38c0 .32.17.62.45.78l5.44 3.19c.28.16.62.16.9 0l2.2-1.29V8.44L7.33 6.7V3.15Zm.9 14.98-2.2 1.29a.92.92 0 0 1-.9 0L.99 16.23V19.7c0 .32.17.62.45.78l5.44 3.19c.28.16.62.16.9 0l5.42-3.19a.9.9 0 0 0 .45-.78v-3.47l-2.2 1.29a.92.92 0 0 1-.9 0l-3.23-1.9Z" />
    </svg>
  )
}

function PhpIcon({ className, color = '#777BB4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M12 5.5C6.2 5.5 1.5 8.4 1.5 12s4.7 6.5 10.5 6.5S22.5 15.6 22.5 12 17.8 5.5 12 5.5Zm-4.1 8.8H6.6l.4-2.2H5.5l-.3 2.2H3.9l1.1-6.1h1.6l-.3 1.9h1.4l.3-1.9h1.6l-1.2 6.1Zm6.1-4.6h-1.5l-.5 2.7h1.1c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.5-1.2 0-.4-.2-.7-.5-.9-.3-.1-.7-.2-1.1-.2Zm1.9 3.3c-.6.5-1.4.7-2.5.7h-2.4l-.7 3.2H8.9l1.1-6.1h2.7c1 0 1.8.2 2.3.7.5.4.8 1.1.8 1.9 0 .8-.3 1.5-.9 1.9Zm5.4-3.3h-1.5l-.5 2.7h1.1c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.5-1.2 0-.4-.2-.7-.5-.9-.3-.1-.7-.2-1.1-.2Zm1.9 3.3c-.6.5-1.4.7-2.5.7h-2.4l-.7 3.2h-1.4l1.1-6.1h2.7c1 0 1.8.2 2.3.7.5.4.8 1.1.8 1.9 0 .8-.3 1.5-.9 1.9Z" />
    </svg>
  )
}

function JsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        fill="#111"
        d="M11.2 17.2c0 1.4-.8 2.1-2 2.1-1 0-1.6-.5-2-1.2l1.1-.6c.2.3.4.6.8.6.4 0 .7-.2.7-.9V12h1.4v5.2zm4.4 2.1c-1.2 0-2.1-.6-2.5-1.4l1.1-.6c.2.4.6.7 1.3.7.6 0 .9-.3.9-.7 0-.5-.3-.6-1-.9l-.3-.1c-1.1-.5-1.8-1.1-1.8-2.3 0-1.1.8-2 2.1-2 .9 0 1.5.3 2 1.1l-1.1.7c-.2-.3-.5-.5-1-.5-.4 0-.7.2-.7.5 0 .4.2.5.8.8l.3.1c1.2.5 1.9 1.1 1.9 2.4 0 1.3-1 2-2.1 2z"
      />
    </svg>
  )
}

function TsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        fill="#fff"
        d="M10.5 10.2h3.1v1.1h-1.1v5.5h-1.2v-5.5h-1.1v-1.1zm2.9 4.2c.1-.5.4-.8.9-1.1.3-.2.5-.3.5-.5 0-.2-.2-.4-.5-.4-.3 0-.5.1-.7.4l-.9-.6c.4-.5.9-.8 1.7-.8 1 0 1.7.5 1.7 1.4 0 .6-.4 1-.9 1.3l-.5.3c-.2.1-.3.2-.3.4h1.7v1h-3.1c0-.7.2-1.2.6-1.5.2-.1.5-.3.7-.4.3-.2.4-.3.4-.5s-.2-.3-.5-.3c-.3 0-.5.1-.7.4l-.8-.6c.3-.5.9-.8 1.6-.8.9 0 1.6.5 1.6 1.3 0 .6-.3 1-.8 1.3l-.5.3c-.3.2-.4.3-.4.5h1.8v.9h-3.2v-.9c0-.6.2-1.1.6-1.4z"
      />
    </svg>
  )
}

function JavaIcon({ className, color = '#EA2D2E' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M8.8 17.8s-.9.5.6.7c1.8.2 2.8.1 4.8-.2 0 0 .5.3 1.2.6-4.4 1.9-10-.4-6.6-1.1zm-.5-2.2s-1 .7.5.9c2 .2 3.5.2 5.8-.3 0 0 .4.4 1 .6-5.7 1.7-12 .1-7.3-1.2zm5-3.9c1.1 1.3-.3 2.4-.3 2.4s2.7 1.3 1.5 2.7c-2.3 2.6-5.4-.6-5.4-.6s3.1 2.6 6.1.4c1.6-1.1.7-2.4.7-2.4s-1.5-1.1-2.6-3.1c-.5-.8.1-1.9.1-1.9s-1.5 1.2-.1 2.5zM13.1 3s2.3 2.3-2.2 5.9c-3.7 2.9-.8 4.5-.1 6.4-2-1.8-3.5-3.4-2.5-4.8C10 7.9 13.6 7.1 13.1 3zm.3 14.1c1.9-.1 3.2-.9 3.2-.9s-.3.6-1.5 1.1c-1.5.5-3.4.6-4.5.1 0 0 .5.4 2.8-.3z" />
      <path d="M12.4 21.3c-3.5 0-6.5-1.2-7.2-2.7 0 0 .7 1.8 7.1 1.8 4.4 0 7-1.5 7-1.5s-1.2 2.4-6.9 2.4z" />
    </svg>
  )
}

function MysqlIcon({ className, color = '#F29111' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M16.4 4.2c-1.7 0-3 .4-3.9 1.2-.3-.1-.7-.2-1.2-.2-2.3 0-3.8 1.5-4.2 3.8-.9.6-1.5 1.5-1.5 2.7 0 1.4.8 2.5 2.2 3.1l.3 4.4c0 .4.3.7.7.7h5.2c.4 0 .7-.3.7-.7l.2-2.1h.2c2.4 0 4.4-1.9 4.4-4.4 0-1.6-.9-3-2.2-3.8.1-.3.1-.6.1-.9 0-2.1-1.5-3.8-3.8-3.8zm0 1.5c1.3 0 2.3 1 2.3 2.3 0 .2 0 .4-.1.6l-.2.5.5.3c1 .5 1.6 1.5 1.6 2.6 0 1.6-1.3 2.9-2.9 2.9h-.8l-.1 3.1H9.9l-.2-3.6-.4-.1c-1-.3-1.6-1.2-1.6-2.2 0-.8.4-1.5 1.1-1.9l.5-.3-.1-.6c.3-1.7 1.3-2.6 2.8-2.6.3 0 .6 0 .9.1l.5.2.3-.4c.6-.6 1.6-1 2.8-1z" />
    </svg>
  )
}

export type OrbitLogo = {
  name: string
  Icon: (props: IconProps) => JSX.Element
  color: string
  /** Starting angle on the shared ring (degrees) */
  start: number
}

export type OrbitRing = {
  /** Path diameter as % of the solar-system container */
  orbit: number
  duration: number
  reverse: boolean
  logos: OrbitLogo[]
}

/**
 * 3 rings: inner 2 · middle 2 · outer 3
 * Rings spaced further apart so paths read clearly.
 */
export const HERO_ORBIT_RINGS: OrbitRing[] = [
  {
    orbit: 60,
    duration: 16,
    reverse: false,
    logos: [
      { name: 'React', Icon: ReactIcon, color: '#61DAFB', start: 20 },
      { name: 'Laravel', Icon: LaravelIcon, color: '#FF2D20', start: 200 },
    ],
  },
  {
    orbit: 75,
    duration: 24,
    reverse: true,
    logos: [
      { name: 'PHP', Icon: PhpIcon, color: '#777BB4', start: 70 },
      { name: 'JavaScript', Icon: JsIcon, color: '#F7DF1E', start: 250 },
    ],
  },
  {
    orbit: 90,
    duration: 32,
    reverse: false,
    logos: [
      { name: 'Java', Icon: JavaIcon, color: '#EA2D2E', start: 10 },
      { name: 'TypeScript', Icon: TsIcon, color: '#3178C6', start: 130 },
      { name: 'MySQL', Icon: MysqlIcon, color: '#F29111', start: 250 },
    ],
  },
]
