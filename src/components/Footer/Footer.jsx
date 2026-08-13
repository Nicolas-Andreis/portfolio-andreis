
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p>
        Nicolás Andreis © {currentYear}. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export {Footer}