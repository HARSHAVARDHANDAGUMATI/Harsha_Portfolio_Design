import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from 'react-icons/fi'

function Skills({ skills }) {
  return (
    <section className="skills-panel">
      <div className="skills-panel__title">Skills</div>

      <div className="skills-panel__content">
        <div className="skills-panel__list">
          {skills.map(({ name, icon: Icon, className }) => (
            <div key={name} className={`skills-panel__item ${className}`}>
              <Icon />
            </div>
          ))}
        </div>

        <div className="skills-panel__socials">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <FiYoutube />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noreferrer" aria-label="Behance">
            <span className="skills-panel__behance">Be</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills
