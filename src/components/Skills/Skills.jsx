import { softSkills, technicalSkills } from '../../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section
      className="skills"
      id="skills"
      aria-labelledby="skills-title"
    >
      <header className="skills__header">
        <p className="skills__eyebrow">Habilidades</p>
        <h2 id="skills-title">Mi kit de herramientas</h2>
        <p>
          Tecnologías y capacidades que utilizo para desarrollar
          soluciones web.
        </p>
      </header>

      <div className="skills__layout">
        <div className="skills__technical">
          <h3>Habilidades técnicas</h3>

          <div className="skills__categories">
            {technicalSkills.map((group) => (
              <article
                className="skills__category"
                key={group.category}
              >
                <h4>{group.category}</h4>

                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <aside className="skills__soft">
          <h3>Habilidades blandas</h3>

          <ul>
            {softSkills.map((skill, index) => (
              <li key={skill}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export { Skills }