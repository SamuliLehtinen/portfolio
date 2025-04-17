// app/projects/page.js

import { projects } from "./data";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-6 sm:p-12 space-y-24">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">
        Mes Projets
      </h1>

      {projects.map((project, index) => (
        <section
          key={index}  // Utilisation de l'index comme clé pour chaque projet
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            {project.title}
          </h2>

          {/* Vidéo ajoutée uniquement pour le 2ème projet */}
          {index === 1 && (
            <div className="mb-6">
              <video width="100%" controls>
                <source src="videos/Demo_SimulationMachine.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          )}

          {/* Section avec Flexbox pour aligner la description et l'image côte à côte */}
          <div className="flex items-start gap-6">
            <div className="flex-1">
              {/* Description du projet */}
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="mb-4">
                <h3 className="font-medium text-blue-600">Technologies :</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {project.technologies && project.technologies.length > 0 ? (
                    project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>  // Utilisation de l'index comme clé unique ici aussi
                    ))
                  ) : (
                    <li>Aucune technologie spécifiée.</li>
                  )}
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 text-blue-700 rounded-xl hover:bg-gray-300"
                  >
                    Code source
                  </a>
                )}
              </div>
            </div>

            {/* Image ajoutée uniquement pour le 3ème projet */}
            {index === 2 && (
              <div className="flex-shrink-0">
                <Image
                  src="/images/projects/travail_bachelor.png"  // Emplacement de l'image
                  alt="Travail Bachelor"
                  width={250}  // Largeur personnalisée pour l'image
                  height={100}  // Hauteur personnalisée pour l'image
                  className="rounded-xl shadow"
                />
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}