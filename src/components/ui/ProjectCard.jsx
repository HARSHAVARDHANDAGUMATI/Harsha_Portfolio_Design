import { Link } from 'react-router-dom'
import { FaCss3Alt, FaFigma, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import Badge from './Badge'

const stackIcons = {
  React: { icon: FaReact, className: 'skill--blue' },
  JS: { icon: IoLogoJavascript, className: 'skill--yellow' },
  CSS: { icon: FaCss3Alt, className: 'skill--cyan' },
  Figma: { icon: FaFigma, className: 'skill--pink' },
}

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card project-card--link">
      <div className={`project-card__preview ${project.previewClass}`}>
        <div className="project-card__preview-inner">
          <span className="project-card__preview-label">{project.previewLabel}</span>
          <strong>{project.previewTitle}</strong>
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__category">{project.category}</p>
        <p className="project-card__description">{project.shortDescription}</p>
        <div className="project-card__stack">
          {project.stack.map((item) => {
            const IconData = stackIcons[item]
            if (IconData) {
              const Icon = IconData.icon
              return (
                <div key={item} className="stack-icon">
                  <Icon className={IconData.className} />
                </div>
              )
            }
            return <Badge key={item}>{item}</Badge>
          })}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
