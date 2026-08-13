import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const elementId = hash.slice(1)
      const element = document.getElementById(elementId)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname, hash])

  return null
}

export { ScrollToHash }