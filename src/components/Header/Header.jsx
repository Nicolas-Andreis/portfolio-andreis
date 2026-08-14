import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import portfolioLogo from '../../assets/logo/portfolio-logo.webp'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function navigateToSection(sectionId) {
    closeMenu()

    if (location.pathname === '/') {
      const section = document.getElementById(sectionId)

      section?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
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
          <img
            src={portfolioLogo}
            alt=""
            width="48"
            height="48"
          />

          <span>Nicolás Andreis</span>
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
              <Link
                className="header__link"
                to="/#about"
                onClick={() => navigateToSection('about')}
              >
                Sobre mí
              </Link>
            </li>

            <li>
              <Link
                className="header__link"
                to="/#skills"
                onClick={() => navigateToSection('skills')}
              >
                Habilidades
              </Link>
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