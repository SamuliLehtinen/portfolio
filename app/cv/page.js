export default function CVPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-cover bg-center bg-black"
    >
      <div className="max-w-4xl mx-auto p-6 bg-black bg-opacity-50 rounded-lg">
        {/* Titre */}
        <h1 className="text-3xl font-bold mb-4 text-blue-400">Mon CV</h1>

        {/* Introduction */}
        <p className="mb-6 text-lg text-white">
          Bienvenue sur ma page de CV. Choisis la langue dans laquelle tu veux télécharger mon CV :
        </p>

        {/* Sélection des langues */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="/cv-lehtinen-samuli-fr.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            📄 Télécharger en Français
          </a>

          <a
            href="/cv-lehtinen-samuli-en.pdf"
            download
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition"
          >
            📄 Download in English
          </a>
        </div>

        {/* Section de présentation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">À propos de moi</h2>
          <p className="text-gray-300 mb-4">
          Depuis l’obtention de mon master en Computer Science à la HES-SO en Suisse, j’ai exploré une large palette de domaines allant du machine learning 
          au software engineering, en passant par le deep learning, les systèmes embarqués ou encore le reverse engineering ainsi que la réalité virtuelle. 
          Cette diversité m’a forgé une vision globale et polyvalente du monde numérique, et a nourri ma curiosité naturelle.
          Je compare l’informatique à un vaste puzzle et chaque problème peut être découpée en pièce unique. Ce que je cherche, c’est assembler ces pièces une par une pour faire émerger des solutions cohérentes, élégantes, et fonctionnelles. 
          J’aborde chaque nouveau projet comme un défi à relever, un problème à décortiquer, un espace à explorer.
          Créatif, rigoureux et adaptable, j’aime sortir des sentiers battus pour concevoir des solutions sur mesure.
          Je ne me limite pas à un rôle spécifique : j’apprends, je m’adapte vite, et surtout, j'apprécie résoudre ce qui semble complexe. 
          C’est cette quête permanente qui me pousse à progresser, projet après projet.
          </p>
          <p className="text-gray-300">
            N'hésitez pas à consulter mon CV pour plus de détails sur mes compétences et expériences professionnelles.
          </p>
        </section>

        {/* Section compétences */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Compétences</h2>
          <ul className="list-inside list-disc text-gray-300 space-y-2">
            <li><strong>Langages :</strong> C, C++, C#, Java, Python, Assembleur</li>
            <li><strong>Développement Frontend :</strong> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Framer Motion</li>
            <li><strong>Développement Backend :</strong> Node.js, MongoDB</li>
            <li><strong>DevOps :</strong> CI/CD, Docker, Kubernetes</li>
            <li><strong>Cloud & Automatisation :</strong> Renkulab, API REST, Renku pipelines</li>
            <li><strong>Réalité Virtuelle :</strong> Unity, Simulation VR avec MetaQuest 3 / Pro, intégration de gilet haptique (bHaptics)</li>
            <li><strong>Outils & plateformes :</strong> GitHub, Moodle, Renkulab, MetaQuest, Unity Hub</li>
          </ul>
        </section>


        {/* Section Liens externes */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Mes profils professionnels</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/samuli-lehtinen-30915b239"
              target="_blank"
              className="text-white hover:text-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SamuliLehtinen"
              target="_blank"
              className="text-white hover:text-blue-700 transition"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
