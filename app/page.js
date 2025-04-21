'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'

const backgroundImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1493244040629-496f6d136cc3',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
]

export default function HomePage() {

  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
    {/* Background animé */}
    <AnimatePresence>
      <motion.div
        key={backgroundImages[bgIndex]}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </AnimatePresence>

    {/* Contenu par-dessus le background */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 min-h-screen bg-black/30">
      {/* Ton contenu actuel ici */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/images/homepage/photo-profil.jpg"
          alt="Photo de profil"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-500 shadow-lg mb-6"
        />
      </motion.div>

      <motion.div
        className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typewriter
          words={["Portfolio de Lehtinen Samuli"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={0}
          delaySpeed={1500}
        />
      </motion.div>

      <motion.p
        className="text-lg text-gray-300 max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        Je conçois des interfaces propres, modernes et utiles avec un soupçon de magie ✨
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Voir mes projets</a>
        <a href="/contact" className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">Me contacter</a>
        <a href="/cv" className="px-6 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg hover:bg-gray-700 transition">Consulter mon CV</a>
      </motion.div>
    </div>
  </section>
  )
}


