import { useState } from 'react'
import { Header } from './components/header.jsx'
import { Home } from './pages/home.jsx'
import { Cursos } from './pages/cursos.jsx'
import { Categorias } from './pages/categorias.jsx'
import { SobreNosotros } from './pages/sobre-nosotros.jsx'
import { Instructores } from './pages/instructores.jsx'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header page={page} setPage={setPage}/>
      {page === 'home' && <Home />}
      {page === 'cursos' && <Cursos />}
      {page === 'categorias' && <Categorias />}
      {page === 'sobre-nosotros' && <SobreNosotros />}
      {page === 'instructores' && <Instructores />}
    </div>
  )
}

export default App
