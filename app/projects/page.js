'use client'

import React, { useState } from "react";
import Reveal from "../components/Reveal";
import Modal from "../components/Modal"; // N'oublie pas d'importer le composant
import { projects } from "./data";
import Image from "next/image";


export default function ProjectsPage() {
  const [modalVideoSrc, setModalVideoSrc] = useState(null); // Pas besoin de type explicite ici

  return (
    <main className="min-h-screen p-6 sm:p-12 space-y-24 bg-black text-white">
      <h1 className="text-4xl font-bold text-blue-400 text-center mb-12">
        Mes Projets
      </h1>

      {projects.map((project, index) => {
        return (
          <Reveal key={index} delay={index * 0.2}>
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-semibold text-blue-300 mb-4">
                {project.title}
              </h2>

              {/* Miniature pour ouvrir la vidéo */}
              {(index === 1 || index === 2) && (
                <div className="mb-6 flex justify-center w-full relative group cursor-pointer max-w-fit mx-auto">
                <Image
                  src={`/images/thumbnails/video_thumb_${index}.jpg`}
                  alt="Aperçu vidéo"
                  width={320}
                  height={180}
                  className="rounded-lg shadow group-hover:opacity-80 transition"
                  onClick={() =>
                    setModalVideoSrc(
                      index === 1
                        ? "videos/Demo_SimulationMachine.mp4"
                        : "videos/POC_demo_PA.mp4"
                    )
                  }
                />
              
                {/* Overlay content */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 rounded-lg"
                  onClick={() =>
                    setModalVideoSrc(
                      index === 1
                        ? "videos/Demo_SimulationMachine.mp4"
                        : "videos/POC_demo_PA.mp4"
                    )
                  }
                >
                  {/* Play icon (can be a real icon or emoji for simplicity) */}
                  <div className="text-4xl mb-2">▶️</div>
                </div>
              </div>
              
              )}

              {/* Description, etc. */}
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

      {/* Modal video */}
      <Modal isOpen={!!modalVideoSrc} onClose={() => setModalVideoSrc(null)}>
        <div className="flex justify-center">
          <video
            className="max-w-2xl w-full h-auto rounded-lg"
            controls
            autoPlay
          >
            <source src={modalVideoSrc || ""} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </Modal>
    </main>
  );
}
