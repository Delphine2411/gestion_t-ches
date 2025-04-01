import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Taches from './components/Taches.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Taches />
  </StrictMode>,
)
