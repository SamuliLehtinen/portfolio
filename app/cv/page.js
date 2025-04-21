export default function CVPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="max-w-4xl mx-auto p-6 bg-black bg-opacity-50 rounded-lg">
        {/* Titre */}
        <h1 className="text-3xl font-bold mb-4 text-white">Mon CV</h1>

        {/* Introduction */}
        <p className="mb-6 text-lg text-gray-300">
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
            Je suis un développeur passionné avec une expérience dans la création d'applications web modernes et
            interactives. Je travaille principalement avec JavaScript, React et Node.js. Mon but est de concevoir des
            solutions logicielles qui aident à résoudre des problèmes réels tout en restant axé sur l'expérience utilisateur.
          </p>
          <p className="text-gray-300">
            N'hésitez pas à consulter mon CV pour plus de détails sur mes compétences et expériences professionnelles.
          </p>
        </section>

        {/* Section compétences */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Compétences</h2>
          <ul className="list-inside list-disc text-gray-300">
            <li>Développement Frontend (HTML, CSS, JavaScript, React)</li>
            <li>Développement Backend (Node.js, Express, MongoDB)</li>
            <li>Gestion de version avec Git et GitHub</li>
            <li>Conception d'interface utilisateur (UI/UX Design)</li>
            <li>Tests unitaires et intégration (Jest, Mocha)</li>
            <li>Outils de déploiement (Docker, CI/CD)</li>
          </ul>
        </section>

        {/* Section Liens externes */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Mes profils professionnels</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/samuli-lehtinen-30915b239"
              target="_blank"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SamuliLehtinen"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
