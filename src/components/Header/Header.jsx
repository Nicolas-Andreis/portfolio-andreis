import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navegación principal">
        <NavLink className="header__logo" to="/">
          NA
        </NavLink>

        <ul className="header__links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>

          <li>
            <a href="/#about">Sobre mí</a>
          </li>

          <li>
            <a href="/#skills">Habilidades</a>
          </li>

          <li>
            <NavLink to="/projects">Proyectos</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export {Header}