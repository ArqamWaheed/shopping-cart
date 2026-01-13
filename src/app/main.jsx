import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from '../ui/components/Homepage.jsx'
import NavigationBar from '../ui/components/NavigationBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationBar />
    <Homepage />
  </StrictMode>,
)
