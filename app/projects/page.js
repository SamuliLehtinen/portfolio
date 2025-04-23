'use client'

import { projects } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { useState } from "react";


export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-6 sm:p-12 space-y-24 bg-black text-white">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-12">
        Mes Projets
      </h1>

      {projects.map((project, index) => {
        const [showVideo, setShowVideo] = useState(false);

        return (
          <Reveal key={index} delay={index * 0.2}>
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-semibold text-blue-300 mb-4">
                {project.title}
              </h2>

              {/* Vidéos avec bouton pour afficher */}
              {(index === 1 || index === 2) && (
                <div className="mb-6">
                  {!showVideo ? (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Vidéo démo
                    </button>
                  ) : (
                    <motion.div
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <video width="100%" controls>
                        <source
                          src={
                            index === 1
                              ? "videos/Demo_SimulationMachine.mp4"
                              : "videos/POC_demo_PA.mp4"
                          }
                          type="video/mp4"
                        />
                        Votre navigateur ne supporte pas la vidéo.
                      </video>
                    </motion.div>
                  )}
                </div>
              )}

              <div className="flex items-start gap-6">
                <div className="flex-1">
                <div className="text-gray-300 mb-4">
                  {project.description.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
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
                    {project.link && ![1, 2, 4].includes(index) && (
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
        );
      })}
    </main>
  );
}
