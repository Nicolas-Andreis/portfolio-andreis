import './ProjectCard.css'

function ProjectCard({ project, index = 0 }) {
  const {
    title,
    description,
    image,
    technologies,
    repositoryUrl,
    deploymentUrl,
    category,
  } = project

  const projectType = category === 'react' ? 'Aplicación React' : 'Landing responsive'

  return (
    <article className={`project-card project-card--${index + 1}`}>
      <a
        className="project-card__image-link"
        href={deploymentUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver el proyecto ${title}`}
      >
        <img
          className="project-card__image"
          src={image}
          alt={`Vista previa del proyecto ${title}`}
        />
        <span className="project-card__image-label">Caso {String(index + 1).padStart(2, '0')}</span>
      </a>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{projectType}</span>
          <span aria-hidden="true">↗</span>
        </div>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__footer">
          <ul
            className="project-card__technologies"
            aria-label={`Tecnologías utilizadas en ${title}`}
          >
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className="project-card__actions">
            <a
              className="project-card__primary-link"
              href={deploymentUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver proyecto
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="project-card__secondary-link"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Código
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export { ProjectCard }
