import characterCounterImage from '../assets/images/projects/character-counter.png'
import jardinOnlineImage from '../assets/images/projects/jardin-online.png'
import habemusPizzaImage from '../assets/images/projects/habemus-pizza.png'

const projects = [
  {
    id: 1,
    slug: 'character-counter',
    title: 'Character Counter',
    description:
      'Aplicación de análisis de texto en tiempo real con estadísticas, densidad de letras, límite configurable y temas persistentes.',
    image: characterCounterImage,
    technologies: ['React', 'JavaScript', 'CSS3', 'Context API'],
    category: 'react',
    repositoryUrl:
      'https://github.com/Nicolas-Andreis/character-counter-react',
    deploymentUrl:
      'https://character-counter-andreis.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    slug: 'jardin-online',
    title: 'Jardín Online',
    description:
      'E-commerce de jardinería con catálogo, carrito persistente, control de stock, órdenes e historial de compras.',
    image: jardinOnlineImage,
    technologies: ['React', 'Firebase', 'React Router', 'Vite'],
    category: 'react',
    repositoryUrl:
      'https://github.com/Nicolas-Andreis/Jardin-Online',
    deploymentUrl:
      'https://nicolas-andreis.github.io/Jardin-Online/',
    featured: true,
  },
  {
    id: 3,
    slug: 'habemus-pizza',
    title: 'Habemus Pizza',
    description:
      'Landing page responsive para una pizzería, enfocada en presentar productos, promociones e información comercial.',
    image: habemusPizzaImage,
    technologies: ['HTML5', 'CSS3', 'Responsive Design'],
    category: 'html-css',
    repositoryUrl:
      'https://github.com/Nicolas-Andreis/habemus_pizza',
    deploymentUrl:
      'https://nicolas-andreis.github.io/habemus_pizza/',
    featured: true,
  },
]

const projectCategories = [
  {
    value: 'all',
    label: 'Todos',
  },
  {
    value: 'react',
    label: 'React',
  },
  {
    value: 'html-css',
    label: 'HTML y CSS',
  },
]

export { projectCategories, projects }