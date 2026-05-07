import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
  /** Trigger once when in viewport (default true) */
  once?: boolean
  as?: 'div' | 'section' | 'span' | 'article' | 'h1' | 'h2' | 'p'
}

/**
 * Fade + slide up when scrolled into view.
 * Replaces `data-reveal` for components hydrated with React.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.8,
  className = '',
  once = true,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo-out
      }}
    >
      {children}
    </MotionTag>
  )
}
