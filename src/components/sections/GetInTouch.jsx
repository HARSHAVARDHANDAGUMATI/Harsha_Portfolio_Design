import { FiGithub, FiInstagram, FiLinkedin, FiSend, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

function GetInTouch() {
  return (
    <section className="contact-cta">
      <div>
        <h2>Get in Touch</h2>
        <p>
          If you are interested in my work or want
          <br />
          to provide feedback about this website, I
          <br />
          am open to exchanging ideas .
        </p>
      </div>

      <div className="contact-cta__actions">
        <div className="contact-cta__socials">
          <span>Follow me on</span>
          <div>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FiYoutube />
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noreferrer" aria-label="Behance">
              <span style={{ fontWeight: 800 }}>Bē</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>

        <Button as={Link} to="/contact" variant="outline" className="contact-cta__button">
          Contact Me <FiSend />
        </Button>
      </div>
    </section>
  )
}

export default GetInTouch
