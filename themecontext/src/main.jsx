import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemecontextProvider } from './context/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <ThemecontextProvider>
    <App />
  </ThemecontextProvider>,
)
