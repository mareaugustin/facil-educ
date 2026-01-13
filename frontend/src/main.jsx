import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter  } from 'react-router-dom'
import { StatutProvider } from './contexts/useChoixContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StatutProvider>
        <App />
      </StatutProvider>
    </BrowserRouter>
  </StrictMode>,
)
