import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './ThemeButton.css'

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const isDarkTheme = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-button"
      onClick={toggleTheme}
      aria-label={
        isDarkTheme
          ? 'Cambiar a tema claro'
          : 'Cambiar a tema oscuro'
      }
      title={
        isDarkTheme
          ? 'Cambiar a tema claro'
          : 'Cambiar a tema oscuro'
      }
    >
      <span aria-hidden="true">
        {isDarkTheme ? '☀' : '☾'}
      </span>
    </button>
  )
}

export { ThemeButton }