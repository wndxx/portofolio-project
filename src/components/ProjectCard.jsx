export default function ProjectCard({ project }) {
  return (
    <a 
      href={project.externalLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-3xl overflow-hidden shadow-lg transition transform hover:scale-105 bg-white dark:bg-gray-800 hover:shadow-xl"
    >
      {/* Bagian gambar/thumbnail */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <img 
          src={project.localImage} 
          alt={project.title}
          className="w-full h-full object-contain p-4"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Project+Image';
            e.target.className = 'w-full h-full object-contain p-4 bg-gray-100';
          }}
        />
      </div>
      
      {/* Konten card */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}