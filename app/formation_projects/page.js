'use client'

import { projects } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal"; // ajuste le chemin si besoin

export default function ProjectsPage() {
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

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          HES-SO Master - Lausanne
        </motion.p>

        <div className="mt-6">
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Master of Science en Engineering - Computer Science</strong>
            </li>
          </ul>
        </div>
        {/* Lien vers le site du Master */}
        <div className="mt-6">
          <a
            href="https://www.hes-so.ch/master/hes-so-master"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
          >
            HES-SO Master - Site web
          </a>
        </div>
      </section>

      {/* Bachelor */}
      <section className="max-w-4xl mx-auto mb-12">
        <motion.div
          className="text-3xl font-semibold text-blue-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Bachelor : 09/2020- 08/2023</h2>
        </motion.div>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Haute Ecole d'Ingénierie - Sion
        </motion.p>

        <div className="mt-6">
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Bachelor Système Industriel - Infotronics</strong>
            </li>
          </ul>
        </div>
        {/* Lien vers le site de la Haute École d'Ingénierie */}
        <div className="mt-6">
          <a
            href="https://www.hevs.ch/fr/hautes-ecoles/haute-ecole-d-ingenierie/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Haute École d'Ingénierie - Site web
          </a>
        </div>
      </section>

      {/* Baccalauréat */}
      <section className="max-w-4xl mx-auto mb-12">
        <motion.div
          className="text-3xl font-semibold text-blue-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Baccalauréat : 2018</h2>
        </motion.div>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Lycée International Ferney Voltaire
        </motion.p>

        <div className="mt-6">
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>Baccalauréat général Scientifique, Option International section Anglais</strong>
            </li>
          </ul>
        </div>
        {/* Lien vers le site */}
        <div className="mt-6">
          <a
            href="https://csi-ferneyvoltaire.etab.ac-lyon.fr/spip/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Lycée International - Site web
          </a>
        </div>
      </section>

      {/* Section Mes Projets */}
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-12">
        Mes Projets
      </h1>

      {projects.map((project, index) => (
        <Reveal key={index} delay={index * 0.2}>
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-blue-300 mb-4">
              {project.title}
            </h2>

            {index === 1 && (
              <div className="mb-6">
                <video width="100%" controls>
                  <source src="videos/Demo_SimulationMachine.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}

            {index === 2 && (
              <div className="mb-6">
                <video width="100%" controls>
                  <source src="videos/POC_demo_PA.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}

            <div className="flex items-start gap-6">
              <div className="flex-1">
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h3 className="font-medium text-blue-400">Technologies :</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {project.technologies?.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 mt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                    >
                      Voir la démo
                    </a>
                  )}
                  {project.link && ![1, 2, 3].includes(index) && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-600"
                    >
                      Code source
                    </a>
                  )}
                </div>
              </div>

              {index === 4 && (
                <div className="flex-shrink-0">
                  <Image
                    src="/images/projects/travail_bachelor.png"
                    alt="Travail Bachelor"
                    width={250}
                    height={100}
                    className="rounded-xl shadow"
                  />
                </div>
              )}
            </div>
          </section>
        </Reveal>
      ))}
    </main>
  );
}
