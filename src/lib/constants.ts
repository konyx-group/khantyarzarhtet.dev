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

export const KONYX_NAME = 'KONYX'
export const KONYX_TAGLINE = 'A solo coding collective & personal brand'

export const LINKEDIN_URL = 'https://linkedin.com/in/khantyarzarhtet'
export const TELEGRAM_URL = 'https://t.me/kony_x'

// ---- Location ----
export const LOCATION = 'Yangon, Myanmar'

// ---- Placeholder ----
export const PLACEHOLDER_LINK = '#'

// ---- Section meta (navigation + section anchors) ----
export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'konyx', label: 'KONYX' },
  // { id: 'writing', label: 'Writing' },
  // { id: 'speaking', label: 'Speaking' },
  { id: 'contact', label: 'Contact'}
] as const

// ---- Resume ----
export const RESUME_URL = `${import.meta.env.BASE_URL}resume.html`

// ---- Images (Hero / Education / Work) ----
export const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920'
export const HERO_PROFILE_URL = `${import.meta.env.BASE_URL}hero-image.jpg`
export const UCSY_IMAGE_URL =
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const MST_IMAGE_URL =
  'https://images.pexels.com/photos/159866/books-education-school-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const OJT_IMAGE_URL =
  'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200'
export const WORK_IMAGE_URL =
  'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800'
export const MUSIC_APP_IMAGE_URL =
  'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=800'
export const VOTING_APP_IMAGE_URL =
  'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800'
export const MOBILE_APP_IMAGE_URL =
  'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800'
export const TRIP_APP_IMAGE_URL =
  'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800'
export const SHOP_APP_IMAGE_URL =
  'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800'
export const INDEPENDENT_IMAGE_URL =
  'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
export const EMS_IMAGE_URL =
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
export const POS_IMAGE_URL =
  'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'

// Play / side experiments
export const PLAY_CLAW_IMAGE_URL = `${import.meta.env.BASE_URL}claw_machine.png`
export const PLAY_RANDOM_NUMBER_IMAGE_URL = `${import.meta.env.BASE_URL}random_number.png`
export const PLAY_SECRET_BOX_IMAGE_URL = `${import.meta.env.BASE_URL}secret_box.png`
export const PLAY_FUNNY_GAME_IMAGE_URL = `${import.meta.env.BASE_URL}funny_game.png`

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