import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Home'
import Polar from './Polar'

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/polar" element={<Polar />} />
    </Routes>
  </HashRouter>
)

createRoot(document.getElementById('root')!).render(
  <App />
)
