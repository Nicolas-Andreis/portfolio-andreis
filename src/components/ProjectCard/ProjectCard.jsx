import './ProjectCard.css'

function ProjectCard({ project }) {
  const {
    title,
    description,
    image,
    technologies,
    repositoryUrl,
    deploymentUrl,
  } = project

  return (
    <article className="project-card">
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
      </a>

      <div className="project-card__content">
        <ul
          className="project-card__technologies"
          aria-label={`Tecnologías utilizadas en ${title}`}
        >
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <h2 className="project-card__title">{title}</h2>

        <p className="project-card__description">{description}</p>

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
            Ver código
          </a>
        </div>
      </div>
    </article>
  )
}

export { ProjectCard }