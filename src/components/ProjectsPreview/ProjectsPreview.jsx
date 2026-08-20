import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import './ProjectsPreview.css'

function ProjectsPreview() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3)

  return (
    <section
      className="projects-preview"
      aria-labelledby="featured-projects-title"
    >
      <header className="projects-preview__header">
        <div>
          <p className="projects-preview__eyebrow">Proyectos destacados</p>
          <h2 id="featured-projects-title">Trabajo que demuestra cómo construyo</h2>
          <p>
            Proyectos desarrollados durante mi formación y práctica profesional,
            con foco en interfaces claras, responsive y funcionales.
          </p>
        </div>

        <Link className="projects-preview__all-link" to="/projects">
          Ver todos los proyectos
          <span aria-hidden="true">→</span>
        </Link>
      </header>

      <div className="projects-preview__grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export { ProjectsPreview }
