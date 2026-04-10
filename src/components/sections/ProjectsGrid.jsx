import ProjectCard from '../ui/ProjectCard'

function ProjectsGrid({ projects }) {
  return (
    <section className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  )
}

export default ProjectsGrid
