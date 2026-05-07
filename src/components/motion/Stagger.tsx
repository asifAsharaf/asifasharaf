import { motion, useReducedMotion } from 'framer-motion'
import { Children, type ReactNode } from 'react'

interface StaggerProps {
  children: ReactNode
  /** Delay between children (s) */
  step?: number
  /** Initial delay before first child (s) */
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

/**
 * Animates direct children in sequence as the container enters the viewport.
 * Each child gets fade + slide-up.
 */
export default function Stagger({
  children,
  step = 0.08,
  delay = 0,
  y = 24,
  className = '',
  once = true,
}: StaggerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
