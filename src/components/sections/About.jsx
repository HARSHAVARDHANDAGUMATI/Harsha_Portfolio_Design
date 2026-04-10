import Button from '../ui/Button'

function About({ compact = false }) {
  return (
    <section className="about-strip">
      <div className="about-strip__header">
        <h2>About</h2>
      </div>

      <div className="about-strip__body">
        <p>
          Hi there! I&apos;m Rahul, a third-year Computer Science student at SRM Institute with a
          passion for crafting user-centric experiences. I specialize in Front End Development and
          Graphic Design, with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS,
          Git, and C++. I thrive on collaboration and bring experience in quiz system
          methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music.
          Let&apos;s connect and bring your digital visions to life.
        </p>

        {!compact && (
          <Button as="a" href="/about" variant="ghost" className="about-strip__button">
            More...
          </Button>
        )}
      </div>
    </section>
  )
}

export default About
