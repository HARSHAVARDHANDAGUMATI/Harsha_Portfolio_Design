import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Gallery from '../components/sections/Gallery'
import ProjectsGrid from '../components/sections/ProjectsGrid'
import SectionTag from '../components/ui/SectionTag'
import { projects } from '../data/projects'

function ProjectsPage({ showGallery = false }) {
  return (
    <main className="page-shell">
      <div className="portfolio-frame">
        <Navbar />
        <SectionTag>{showGallery ? 'GALLERY' : 'PROJECTS'}</SectionTag>
        {showGallery ? <Gallery /> : <ProjectsGrid projects={projects} />}
        <Footer />
      </div>
    </main>
  )
}

export default ProjectsPage
