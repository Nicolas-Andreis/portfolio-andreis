import { Link } from 'react-router-dom'
import portfolioLogo from '../../assets/logo/portfolio-logo.png'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__identity">
          <Link
            className="footer__logo"
            to="/"
            aria-label="Ir a la página de inicio"
          >
            <img
              src={portfolioLogo}
              width="48"
              height="48"
              alt=""
            />

            <span>Nicolás Andreis</span>
          </Link>

          <p>
            Desarrollo interfaces web rápidas, accesibles y
            orientadas a resultados.
          </p>
        </div>

        <nav
          className="footer__navigation"
          aria-label="Navegación secundaria"
        >
          <h2>Navegación</h2>

          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <Link to="/#about">Sobre mí</Link>
            </li>

            <li>
              <Link to="/#skills">Habilidades</Link>
            </li>

            <li>
              <Link to="/projects">Proyectos</Link>
            </li>

            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h2>Contacto</h2>

          <a href="mailto:jnandreis@outlook.com">
            jnandreis@outlook.com
          </a>

          <p>Bahía Blanca, Argentina</p>

          <div className="footer__social">
            <a
              href="https://github.com/Nicolas-Andreis"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-andreis/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Nicolás Andreis © {currentYear}. Todos los derechos
          reservados.
        </p>

        <p>Desarrollado con React.</p>
      </div>
    </footer>
  )
}

export { Footer }