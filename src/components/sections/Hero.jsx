import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Hero() {
  return (
    <section className="hero-panel">
      <div className="hero-panel__noise" aria-hidden="true">
        DESIGNER UI DESIGNER UI DESIGNER UI
        <br />
        FRONTEND DEVELOPER FRONTEND DEVELOPER
      </div>
      <div className="hero-panel__content">
        <p className="hero-panel__eyebrow">Hey There I&apos;m</p>
        <h1>HARSHA</h1>
        <p className="hero-panel__subcopy">
          Working as a Frontend Developer
        </p>
        <div className="hero-panel__socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
