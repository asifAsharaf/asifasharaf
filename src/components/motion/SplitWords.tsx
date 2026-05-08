import { motion, useReducedMotion } from 'framer-motion'

interface SplitWordsProps {
  text: string
  className?: string
  /** Delay between words (s) */
  step?: number
  /** Initial delay (s) */
  delay?: number
  /** Words (lowercased, no punctuation) that get the highlight class */
  highlight?: string[]
  /** Class applied to highlighted word spans */
  highlightClass?: string
}

/**
 * Splits text into words and animates each one upward in sequence on mount.
 * Used for hero headlines.
 */
export default function SplitWords({
  text,
  className = '',
  step = 0.05,
  delay = 0.1,
  highlight = [],
  highlightClass = '',
}: SplitWordsProps) {
  const reduceMotion = useReducedMotion()
  const words = text.split(/(\s+)/) // keep whitespace tokens
  const isHighlight = (w: string) =>
    highlight.includes(w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, ''))

  if (reduceMotion) {
    return (
      <span className={className}>
        {words.map((w, i) =>
          isHighlight(w) ? (
            <span key={i} className={highlightClass}>
              {w}
            </span>
          ) : (
            <span key={i}>{w}</span>
          ),
        )}
      </span>
    )
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => {
        if (/^\s+$/.test(word)) {
          return <span key={i}>{word}</span>
        }
        return (
          <span
            key={i}
            style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'baseline' }}
          >
            <motion.span
              className={isHighlight(word) ? highlightClass : undefined}
              style={{ display: 'inline-block', willChange: 'transform' }}
              variants={{
                hidden: { y: '110%' },
                visible: {
                  y: '0%',
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </motion.span>
  )
}
