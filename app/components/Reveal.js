'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function Reveal({ children, delay = 0.2 }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {children}
    </motion.div>
  )
}
