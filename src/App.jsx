import { Route, Routes } from 'react-router-dom'
import {Header} from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Projects } from './pages/Projects/Projects'
import { Contact } from './pages/Contact/Contact'


function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App