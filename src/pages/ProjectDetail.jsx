import { FaCss3Alt, FaFigma, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { FiArrowLeft, FiGithub, FiMonitor } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { projects } from '../data/projects'

const stackIcons = {
  React: { icon: FaReact, className: 'skill--blue' },
  JS: { icon: IoLogoJavascript, className: 'skill--yellow' },
  CSS: { icon: FaCss3Alt, className: 'skill--cyan' },
  Figma: { icon: FaFigma, className: 'skill--pink' },
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug) ?? projects[0]

  return (
    <main className="page-shell">
      <div className="portfolio-frame">
        <Navbar />

        <section className="detail-stage">
          <div className="detail-back">
            <Link to="/projects">
              <FiArrowLeft /> Back
            </Link>
          </div>

          <section className="detail-hero">
            <div className={`detail-hero__preview ${project.previewClass}`}>
              <div className="detail-hero__preview-shell">
                <div className="detail-hero__preview-nav">
                  <span>Home</span>
                  <span>About</span>
                  <span>Projects</span>
                  <span>Contact</span>
                </div>
                <div className="project-card__preview-inner">
                  <span className="project-card__preview-label">Hey There I&apos;m</span>
                  <strong>{project.previewLabel}</strong>
                  <small>Currently Studying Computer Science</small>
                </div>
              </div>
            </div>

            <div className="detail-hero__content">
              <h1>{project.title}</h1>
              <p className="detail-hero__category">{project.category}</p>
              <p className="detail-hero__description">{project.description}</p>

              <div className="detail-hero__stack-block">
                <h2>Tech Stack</h2>
                <div className="detail-hero__stack">
                  {project.stack.map((item) => {
                    const IconData = stackIcons[item]
                    if (IconData) {
                      const Icon = IconData.icon
                      return (
                        <div key={item} className="stack-icon" aria-label={item} title={item}>
                          <Icon className={IconData.className} />
                        </div>
                      )
                    }
                    return <Badge key={item}>{item}</Badge>
                  })}
                </div>
              </div>

              <div className="detail-hero__actions">
                <Button as="a" href="#" className="detail-hero__button">
                  <FiMonitor /> Demo
                </Button>
                <Button as="a" href="#" className="detail-hero__button">
                  <FiGithub /> GitHub
                </Button>
              </div>
            </div>
          </section>

          <section className="detail-features">
            <h2>Main Features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}:</strong>
                  <p>{feature.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default ProjectDetail
