import { Link } from 'react-router-dom'
import profileImage from '../../assets/images/profile/profile.webp'
import './Hero.css'

function Hero() {
  const technologies = ['HTML5', 'CSS3', 'JavaScript', 'React']

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__introduction">
          <p className="hero__greeting">Hola, soy</p>

          <h1 className="hero__title" id="hero-title">
            Nicolás <span>Andreis</span>
          </h1>

          <p className="hero__role">
            Frontend Developer <span aria-hidden="true">|</span> React
          </p>

          <p className="hero__availability">
            <span
              className="hero__availability-indicator"
              aria-hidden="true"
            />
            Disponible para nuevos proyectos
          </p>
        </div>

        <div className="hero__proposal">
          <h2>
            Ayudo a negocios a convertir más clientes con interfaces
            rápidas en React
          </h2>

          <ul className="hero__highlights">
            <li>
              <span aria-hidden="true">✓</span>
              Proyectos reales desarrollados
            </li>

            <li>
              <span aria-hidden="true">✓</span>
              Ayudante de programación en UTN
            </li>

            <li>
              <span aria-hidden="true">✓</span>
              Formación Full Stack en curso
            </li>
          </ul>
        </div>

        <div className="hero__actions">
          <Link className="hero__primary-button" to="/contact">
            Agendá una llamada gratis
          </Link>

          <Link className="hero__secondary-button" to="/projects">
            Ver proyectos
          </Link>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__image-container">
          <img
            className="hero__image"
            src={profileImage}
            alt="Nicolás Andreis, desarrollador frontend"
          />
        </div>

        <ul
          className="hero__technologies"
          aria-label="Tecnologías principales"
        >
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Hero }