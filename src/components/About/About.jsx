import { Link } from 'react-router-dom'
import aboutImage from '../../assets/images/about/about.webp'
import './About.css'

function About() {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about__image-container">
        <img
          className="about__image"
          src={aboutImage}
          alt="Retrato de Nicolás Andreis"
        />
      </div>

      <div className="about__content">
        <header className="about__header">
          <p className="about__eyebrow">Sobre mí</p>

          <h2 id="about-title">Más allá del código</h2>
        </header>

        <div className="about__description">
          <p>
            Soy Nicolás, desarrollador frontend especializado en React
            y estudiante de programación en la Universidad Tecnológica
            Nacional.
          </p>

          <p>
            Me interesa crear interfaces que no solo se vean bien, sino
            que también sean rápidas, accesibles y fáciles de utilizar.
            Busco transformar las necesidades de cada proyecto en
            soluciones claras y funcionales.
          </p>

          <p>
            Actualmente continúo mi formación Full Stack y participo
            como ayudante de programación en UTN, una experiencia que
            fortalece tanto mis conocimientos técnicos como mi capacidad
            para comunicar ideas.
          </p>
        </div>

        <ul className="about__facts" aria-label="Información profesional">
          <li>
            <strong>Ubicación</strong>
            <span>Bahía Blanca, Argentina</span>
          </li>

          <li>
            <strong>Especialidad</strong>
            <span>React y desarrollo frontend</span>
          </li>

          <li>
            <strong>Formación</strong>
            <span>Programación y Full Stack en UTN</span>
          </li>
        </ul>

        <Link className="about__button" to="/contact">
          Trabajemos juntos
        </Link>
      </div>
    </section>
  )
}

export { About }