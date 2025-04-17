'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
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
          words={[
            "Portfolio de Lehtinen Samuli", 
          ]}
          loop={1}
          cursor={true}  // Supprime le curseur
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={0}
          delaySpeed={1500}  // Le délai entre chaque phrase
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
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Voir mes projets
        </a>

        <a
          href="/contact"
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          Me contacter
        </a>

        <a
          href="/cv"
          className="px-6 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg hover:bg-gray-700 transition"
        >
          Consulter mon CV
        </a>
      </motion.div>
    </section>
  )
}
