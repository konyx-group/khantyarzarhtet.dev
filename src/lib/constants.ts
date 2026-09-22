/**
 * Centralized links & constants.
 */

// ---- Website ----
export const SITE_URL = 'https://konyx-developer-portfolio.vercel.app/'
export const SITE_IMAGE_URL = `${SITE_URL}hero-image.jpg`

// Home (router root)
export const HOME_URL = `${import.meta.env.BASE_URL}`

// ---- Personal / Social ----
export const FULL_NAME = 'Khant Yar Zar Htet'
export const EMAIL = 'kyzhtet@gmail.com'
export const EMAIL_LINK = `mailto:${EMAIL}`

export const GITHUB_USERNAME = 'konyx-group'
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`
export const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`

export const LINKEDIN_URL = 'https://linkedin.com/in/khantyarzarhtet'
export const TELEGRAM_URL = 'https://t.me/kony_x'

// ---- Location ----
export const LOCATION = 'Yangon, Myanmar'

// ---- Placeholder ----
export const PLACEHOLDER_LINK = '#'

// ---- Section meta (navigation + section anchors) ----
export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'writing', label: 'Writing' },
  { id: 'speaking', label: 'Speaking' },
] as const

// ---- Resume ----
export const RESUME_URL = `${import.meta.env.BASE_URL}resume.html`

// ---- Images (Hero / Education / Work) ----
export const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920'
export const UCSY_IMAGE_URL =
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const MST_IMAGE_URL =
  'https://images.pexels.com/photos/159866/books-education-school-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const OJT_IMAGE_URL =
  'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const WORK_IMAGE_URL =
  'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
export const MOBILE_APP_IMAGE_URL =
  'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
export const INDEPENDENT_IMAGE_URL =
  'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
export const EMS_IMAGE_URL =
  'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800'
export const POS_IMAGE_URL =
  'https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=800'

// About section images
export const ABOUT_DEV_IMAGE_URL =
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const ABOUT_CODE_IMAGE_URL =
  'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const ABOUT_TEAM_IMAGE_URL =
  'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200'

// ---- Shared social-link objects (labels ကတော့ နေရာနဲ့ကိုက် ခေါ်သုံးနိုင်) ----
export const EMAIL_INFO = { label: 'Mail', href: EMAIL_LINK }
export const GITHUB_INFO = { label: 'GitHub', href: GITHUB_URL }
export const LINKEDIN_INFO = { label: 'LinkedIn', href: LINKEDIN_URL }
export const TELEGRAM_INFO = { label: 'Telegram', href: TELEGRAM_URL }