import './WorkProcess.css'

const processSteps = [
  {
    id: 1,
    icon: '⌕',
    title: 'Análisis',
    description: 'Entiendo el negocio, sus necesidades y objetivos.',
  },
  {
    id: 2,
    icon: '</>',
    title: 'Desarrollo',
    description: 'Construyo una interfaz rápida, moderna y responsive.',
  },
  {
    id: 3,
    icon: '↗',
    title: 'Lanzamiento',
    description: 'Publicamos el proyecto para comenzar a obtener resultados.',
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
          <p className="work-process__eyebrow">Mi metodología</p>

          <h2 id="work-process-title">
            Cómo trabajo en 3 pasos
          </h2>
        </header>

        <ol className="work-process__list">
          {processSteps.map((step) => (
            <li className="work-process__card" key={step.id}>
              <span
                className="work-process__number"
                aria-hidden="true"
              >
                {step.id}
              </span>

              <span
                className="work-process__icon"
                aria-hidden="true"
              >
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