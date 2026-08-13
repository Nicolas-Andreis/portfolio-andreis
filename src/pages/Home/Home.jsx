import { Hero } from '../../components/Hero/Hero'
import { WorkProcess } from '../../components/WorkProcess/WorkProcess'
import { About } from '../../components/About/About'
import { Skills } from '../../components/Skills/Skills'
import { ProjectsPreview } from '../../components/ProjectsPreview/ProjectsPreview'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <WorkProcess />
      <About />
      <Skills />
      <ProjectsPreview />
    </>
  )
}

export { Home }