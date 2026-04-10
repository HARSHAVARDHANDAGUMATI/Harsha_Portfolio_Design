import Button from '../ui/Button'

function About({ compact = false }) {
  return (
    <section className="about-strip">
      <div className="about-strip__header">
        <h2>About</h2>
      </div>

      <div className="about-strip__body">
        <p>
          Hi there! I&apos;m Harsha, a frontend developer focused on crafting clean, user-centric
          digital experiences. I specialize in Front End Development and Graphic Design, with
          expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, Git, and C++. I enjoy
          building modern interfaces, improving usability, and turning ideas into polished web
          experiences. Beyond coding, I also enjoy photography, graphic design, and exploring
          music. Let&apos;s connect and bring your digital visions to life.
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
