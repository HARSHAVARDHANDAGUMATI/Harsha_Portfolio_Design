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
              I&apos;m a Computer Science student at <span>SRM Institute of Science and Technology</span>. My passion
              lies in building user-friendly solutions that enhance overall user experiences. I am currently
              focused on <span>React Native, Expo, Firebase, and React</span>, leveraging these technologies to create
              responsive and functional applications. One of my ongoing projects is Rescue Paws, a
              mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app
              will soon be published on the <span>Play Store and App Store</span>, and it incorporates AI-driven
              features to guide users through the adoption process. In addition to app development, I&apos;ve
              led the design and development of platforms like the GitHub Community SRM website,
              which serves as an all-in-one platform for the community. I&apos;ve also organized and managed
              events such as hackathons and workshops, mentoring others in UI/UX and graphic design. I
              thrive in <span>Agile Scrum environments</span> and believe collaboration and teamwork are essential to
              delivering successful projects. I&apos;m always eager to work on impactful projects that
              challenge me to grow while also contributing to meaningful outcomes. So, whether
              you&apos;re <span>looking for a dedicated developer, a creative designer, or a collaborative team
              member,</span> I&apos;m here to help bring ideas to life. Let&apos;s connect and create innovative solutions
              together!
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
