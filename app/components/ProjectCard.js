// app/components/ProjectCard.js

export default function ProjectCard({ title, description, link }) {
    return (
      <div className="bg-blue-100 border-l-4 border-blue-500 shadow-md rounded-2xl p-4 hover:shadow-lg transition-all">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          Voir le projet →
        </a>
      </div>
    );
  }
  