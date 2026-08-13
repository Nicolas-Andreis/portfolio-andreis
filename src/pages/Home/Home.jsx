import { Hero } from '../../components/Hero/Hero'
import { WorkProcess } from '../../components/WorkProcess/WorkProcess'
import { About } from '../../components/About/About'
import { Skills } from '../../components/Skills/Skills'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <WorkProcess />
      <About />
      <Skills />
    </>
  )
}

export { Home }