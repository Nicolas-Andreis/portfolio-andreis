import { useEffect, useRef, useState } from 'react'
import './Reveal.css'

function getInitialVisibility() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
}

function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(getInitialVisibility)

  useEffect(() => {
    const element = elementRef.current

    if (!element || isVisible) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [isVisible])

  const revealClasses = [
    'reveal',
    `reveal--${direction}`,
    isVisible ? 'reveal--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={elementRef}
      className={revealClasses}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export { Reveal }