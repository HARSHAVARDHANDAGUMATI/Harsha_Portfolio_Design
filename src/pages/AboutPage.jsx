import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Skills from '../components/sections/Skills'
import SectionTag from '../components/ui/SectionTag'
import Button from '../components/ui/Button'
import { skills } from '../data/skills'
import heroImg from '../assets/hero.png'
import { FaFileAlt } from 'react-icons/fa'

function AboutPage() {
  return (
    <main className="page-shell">
      <div className="portfolio-frame">
        <Navbar />
        <SectionTag>ABOUT</SectionTag>

        <section className="about-page__panel">
          <div className="about-page__portrait">
            <img src={heroImg} alt="Portrait" />
          </div>

          <div className="about-page__copy">
            <p>
              I&apos;m a <span>frontend developer</span> passionate about building clean, responsive, and
              user-focused digital products. My work centers around creating modern interfaces with
              strong visual hierarchy, intuitive interactions, and reliable performance across
              devices.
            </p>
            <p>
              I mainly work with <span>React, JavaScript, CSS, Tailwind CSS, Firebase, and modern UI workflows</span>
              to turn ideas into polished web experiences. I enjoy translating design concepts into
              production-ready components, building reusable systems, and refining the small details
              that make products feel professional.
            </p>
            <p>
              Alongside development, I also bring experience in <span>UI/UX thinking, visual design, and collaborative project execution</span>.
              I value clarity, consistency, and teamwork, and I enjoy working on products that solve
              real problems while still feeling engaging and memorable to use.
            </p>
            <p>
              Whether you&apos;re looking for a developer to build interfaces, improve product quality,
              or contribute to a collaborative team, I&apos;m always excited to work on meaningful
              digital experiences and bring ideas to life.
            </p>

            <Button as="a" href="#" variant="resume" className="about-page__resume-button">
              <FaFileAlt style={{ color: 'var(--accent)', fontSize: '13px' }} /> Download Resume
            </Button>
          </div>
        </section>

        <Skills skills={skills} />
        <Footer />
      </div>
    </main>
  )
}

export default AboutPage
