import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import Homepage from '../ui/pages/Homepage.jsx'
import NavigationBar from '../ui/layouts/components/NavigationBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationBar />
    <Homepage />
  </StrictMode>,
)
