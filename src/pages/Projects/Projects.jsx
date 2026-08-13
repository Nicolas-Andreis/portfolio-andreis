import { useSearchParams } from 'react-router-dom'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import {
  projectCategories,
  projects,
} from '../../data/projects'
import './Projects.css'

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()

  const requestedCategory = searchParams.get('category') ?? 'all'

  const isValidCategory = projectCategories.some(
    (category) => category.value === requestedCategory,
  )

  const selectedCategory = isValidCategory
    ? requestedCategory
    : 'all'

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory,
        )

  function handleCategoryChange(category) {
    if (category === 'all') {
      setSearchParams({})
      return
    }

    setSearchParams({ category })
  }

  return (
    <section
      className="projects-page"
      aria-labelledby="projects-title"
    >
      <header className="projects-page__header">
        <p className="projects-page__eyebrow">Portfolio</p>
        <h1 id="projects-title">Mis proyectos</h1>
        <p>
          Una selección de aplicaciones e interfaces desarrolladas
          durante mi formación y práctica profesional.
        </p>
      </header>

      <div
        className="projects-page__filters"
        aria-label="Filtrar proyectos"
      >
        {projectCategories.map((category) => {
          const isSelected =
            selectedCategory === category.value

          return (
            <button
              key={category.value}
              type="button"
              className={
                isSelected
                  ? 'projects-page__filter projects-page__filter--active'
                  : 'projects-page__filter'
              }
              aria-pressed={isSelected}
              onClick={() =>
                handleCategoryChange(category.value)
              }
            >
              {category.label}
            </button>
          )
        })}
      </div>

      <p
        className="projects-page__results"
        aria-live="polite"
      >
        {filteredProjects.length}{' '}
        {filteredProjects.length === 1
          ? 'proyecto encontrado'
          : 'proyectos encontrados'}
      </p>

      <div className="projects-page__grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export { Projects }