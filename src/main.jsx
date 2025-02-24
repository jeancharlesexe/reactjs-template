import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './styles/Global';
import AppRoutes from './routes/AppRoutes'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <AppRoutes /> 
  </StrictMode>,
)
