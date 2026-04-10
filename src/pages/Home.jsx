import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import About from '../components/sections/About'
import GetInTouch from '../components/sections/GetInTouch'
import Hero from '../components/sections/Hero'
import RecentProjects from '../components/sections/RecentProjects'
import { projects } from '../data/projects'

function Home() {
  return (
    <main className="page-shell">
      <div className="portfolio-frame">
        <Navbar />
        <Hero />
        <About />
        <RecentProjects projects={projects} />
        <GetInTouch />
        <Footer />
      </div>
    </main>
  )
}

export default Home
