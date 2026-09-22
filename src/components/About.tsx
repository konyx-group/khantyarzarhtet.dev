import { motion } from 'framer-motion'
import {
  ABOUT_DEV_IMAGE_URL,
  ABOUT_CODE_IMAGE_URL,
  ABOUT_TEAM_IMAGE_URL,
} from '@/lib/constants'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16 flex items-center gap-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            About Khant
          </span>
          <div className="flex-1 h-px bg-gray-600" />
        </motion.div>

        {/* First Block - Personal Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src={ABOUT_DEV_IMAGE_URL}
              alt="Developer at a laptop in a modern workspace"
              loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              FULL STACK DEVELOPER / MYANMAR
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Hi, I'm Khant — a software developer driven by a deep passion for clean code and thoughtful design. <br />
              My journey began in mobile development, which gave me a strong foundation in user-centric experiences. <br />
              Today, as a full-stack developer, I bridge the gap between engaging front-end interfaces and robust, scalable back-end systems. <br />
              I don't just write code; I focus on building reliable software solutions that genuinely solve real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Quote Block - Philosophy */}
        {/* <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-300">
            "BUILDING FAST,<br />
            <span className="text-white underline underline-offset-8">ACCESSIBLE</span>, AND<br />
            HUMAN-CENTERED<br />
            SOFTWARE."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            MY DEVELOPMENT PHILOSOPHY
          </p>
        </motion.div> */}

        {/* Second Block - Learning by Building */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I believe the best way to master the craft is to build. <br/>
              Every project is an opportunity to push my boundaries and solve real-world challenges. <br/>
              Whether I'm developing a cross-platform mobile app or architecting a scalable web platform, my focus remains constant: delivering software that is clean, accessible, and meaningful.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src={ABOUT_CODE_IMAGE_URL}
              alt="Lines of code on a monitor"
              loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              MY DEVELOPMENT PHILOSOPHY
            </p>
          </motion.div>
        </div>

        {/* Third Block - Current Career */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src={ABOUT_TEAM_IMAGE_URL}
              alt="Team collaborating around a laptop"
              loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PROFESSIONAL JOURNEY<br />
              (2024 - PRESENT)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              My career started in the fast-paced mobile development space, teaching me the critical importance of user experience and interface design. <br/>
              Building on that foundation, I transitioned into a full-time PHP Laravel Developer role. <br/>
              Today, I leverage my diverse front-end intuition to architect powerful, scalable back-end solutions—ensuring the products I build are robust from the inside out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}