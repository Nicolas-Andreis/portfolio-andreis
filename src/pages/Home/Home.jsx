import { Hero } from '../../components/Hero/Hero'
import { WorkProcess } from '../../components/WorkProcess/WorkProcess'
import { About } from '../../components/About/About'
import { Skills } from '../../components/Skills/Skills'
import { ProjectsPreview } from '../../components/ProjectsPreview/ProjectsPreview'
import { Reveal } from '../../components/Reveal/Reveal'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <WorkProcess />
      </Reveal>

      <Reveal direction="left">
        <About />
      </Reveal>

      <Reveal direction="right">
        <Skills />
      </Reveal>

      <Reveal direction="up">
        <ProjectsPreview />
      </Reveal>
    </>
  )
}

export { Home }