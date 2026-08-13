import './WorkProcess.css'

function AnalysisIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
      <path d="M8.5 11h5" />
      <path d="M11 8.5v5" />
    </svg>
  )
}

function DevelopmentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="m14 3-4 18" />
    </svg>
  )
}

function LaunchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5c2.5-2.5 5.5-2.8 7-2.8-.1 1.6-.4 4.5-2.8 7l-5.1 5.1-3.4-3.4Z" />
      <path d="m13.1 14.3-1 4.1-3.1 3.1-.8-5.7" />
      <path d="m9.7 10.9-4.1 1-3.1 3.1 5.7.8" />
      <circle cx="16.5" cy="6.5" r="1.5" />
      <path d="M6.5 18.5c-1 0-2 .5-2.5 1.5 1 .5 2.8.7 4-.5" />
    </svg>
  )
}

const processSteps = [
  {
    id: 1,
    icon: <AnalysisIcon />,
    title: 'Análisis',
    description:
      'Entiendo el negocio, sus necesidades y objetivos.',
  },
  {
    id: 2,
    icon: <DevelopmentIcon />,
    title: 'Desarrollo',
    description:
      'Construyo una interfaz rápida, moderna y responsive.',
  },
  {
    id: 3,
    icon: <LaunchIcon />,
    title: 'Lanzamiento',
    description:
      'Publicamos el proyecto para comenzar a obtener resultados.',
  },
]

function WorkProcess() {
  return (
    <section
      className="work-process"
      aria-labelledby="work-process-title"
    >
      <div className="work-process__container">
        <header className="work-process__header">
          <p className="work-process__eyebrow">
            Mi metodología
          </p>

          <h2 id="work-process-title">
            Cómo trabajo en 3 pasos
          </h2>
        </header>

        <ol className="work-process__list">
          {processSteps.map((step) => (
            <li
              className="work-process__card"
              key={step.id}
            >
              <span
                className="work-process__number"
                aria-hidden="true"
              >
                {step.id}
              </span>

              <span className="work-process__icon">
                {step.icon}
              </span>

              <h3>
                {step.id}. {step.title}
              </h3>

              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export { WorkProcess }