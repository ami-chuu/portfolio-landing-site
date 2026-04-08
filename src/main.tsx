import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Polar from './Polar';
import App from './App';

const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/polar" element={<Polar />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </HashRouter>
);

createRoot(document.getElementById('root')!).render(<Root />);
