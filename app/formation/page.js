'use client'

import { motion } from "framer-motion";

export default function FormationPage() {
  return (
    <main className="min-h-screen p-6 sm:p-12 space-y-24 bg-black text-white">
      {/* Section Ma Formation */}
      <section className="max-w-4xl mx-auto mb-12">
        <motion.div
          className="text-4xl font-bold text-blue-400 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Ma Formation</h2>
        </motion.div>
      </section>

      {/* Master */}
      <section className="max-w-4xl mx-auto mb-12">
        <motion.div
          className="text-3xl font-semibold text-blue-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Master : 09/2023 - 02/2025</h2>
        </motion.div>
        <motion.p className="text-lg text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          HES-SO Master - Lausanne
        </motion.p>
        <div className="mt-6 space-y-4 text-gray-300">
          <ul className="list-disc list-inside">
            <li><strong>Master of Science en Engineering - Computer Science</strong></li>
            <li><strong>Objectifs :</strong> Les systèmes de communication, les systèmes d’information, la cybersécurité, les systèmes embarqués et les “advanced users interfaces”.</li>
            <li><strong>Compétences clés :</strong> IoT, cloud, systèmes distribués/parallèles et/ou mobiles, collecte, organisation, gestion, analyse, récupération et visualisation d'information, interfaces utilisateur “naturels”, réalité augmentée, réalité virtuelle.</li>
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="https://www.hes-so.ch/master/hes-so-master"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline hover:text-blue-300 transition duration-300 text-sm"
            >
            Site web : HES-SO Master 
          </a>
        </div>
      </section>

      {/* Bachelor */}
      <section className="max-w-4xl mx-auto mb-12">
        <motion.div className="text-3xl font-semibold text-blue-300 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Bachelor : 09/2020 - 08/2023</h2>
        </motion.div>
        <motion.p className="text-lg text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          Haute Ecole d'Ingénierie - Sion
        </motion.p>
        <div className="mt-6 space-y-4 text-gray-300">
          <ul className="list-disc list-inside">
            <li><strong>Bachelor Système Industriel - Infotronics</strong></li>
            <li><strong>Objectifs :</strong> Création des systèmes industriels 4.0 connectés et durables pour développer des technologies innovantes répondant aux défis de demain. Apprentissage de la conception mécanique et numérique grâce à des projets collaboratifs en lien avec l'industrie. </li>
            <li><strong>Compétences clés :</strong> électronique et informatique industrielle.</li>
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="https://www.hevs.ch/fr/hautes-ecoles/haute-ecole-d-ingenierie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline hover:text-blue-300 transition duration-300 text-sm"
            >
            Site web : Haute École d'Ingénierie
          </a>
        </div>
      </section>
    </main>
  );
}
