import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function getNavLinkClass({ isActive }) {
    return isActive
      ? 'header__link header__link--active'
      : 'header__link'
  }

  return (
    <header className="header">
      <nav
        className="header__nav"
        aria-label="Navegación principal"
      >
        <NavLink
          className="header__logo"
          to="/"
          aria-label="Ir a la página de inicio"
          onClick={closeMenu}
        >
          NA
        </NavLink>

        <button
          type="button"
          className="header__menu-button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="main-menu"
          className={
            isMenuOpen
              ? 'header__menu header__menu--open'
              : 'header__menu'
          }
        >
          <ul className="header__links">
            <li>
              <NavLink
                className={getNavLinkClass}
                to="/"
                end
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                className="header__link"
                to="/#about"
                onClick={closeMenu}
              >
                Sobre mí
              </NavLink>
            </li>

            <li>
              <NavLink
                className="header__link"
                to="/#skills"
                onClick={closeMenu}
              >
                Habilidades
              </NavLink>
            </li>

            <li>
              <NavLink
                className={getNavLinkClass}
                to="/projects"
                onClick={closeMenu}
              >
                Proyectos
              </NavLink>
            </li>

            <li>
              <NavLink
                className={getNavLinkClass}
                to="/contact"
                onClick={closeMenu}
              >
                Contacto
              </NavLink>
            </li>
          </ul>

          <div className="header__actions">
            <NavLink
              className="header__cta"
              to="/contact"
              onClick={closeMenu}
            >
              Agendar llamada
            </NavLink>

            <ThemeButton />
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Header }