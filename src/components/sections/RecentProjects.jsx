import { Link } from 'react-router-dom'
import ProjectCard from '../ui/ProjectCard'

function RecentProjects({ projects }) {
  return (
    <section className="projects-section">
      <div className="projects-section__top">
        <h2>Recent Projects</h2>
        <Link to="/projects" className="projects-section__link">
          See all -&gt;
        </Link>
      </div>

      <div className="projects-grid projects-grid--compact">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default RecentProjects
