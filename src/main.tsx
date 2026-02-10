import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AgentArenaPage from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgentArenaPage />
  </StrictMode>,
)
