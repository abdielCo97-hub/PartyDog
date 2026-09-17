import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CategoriasPage from './pages/CategoriasPage'
import CatalogoPage from './pages/CatalogoPage'
import FaqPage from './pages/FaqPage'
import ContactoPage from './pages/ContactoPage'
import PawCursor from './components/effects/PawCursor'

function App() {
  return (
    <BrowserRouter>
      <PawCursor />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/productos" element={<CatalogoPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App