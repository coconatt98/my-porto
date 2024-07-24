import './styles/index.css'

import Layout from './components/layout.tsx'
// import LandingPage from './features/landing-page/index.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
