import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white border-b pb-2">
        My <span className="text-primary-500">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}