import React from 'react'
import App from './App'

import { createRoot } from 'react-dom/client'
import { TitleProvider } from './contexts/TitleContext'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/global.css'

const root = document.getElementById('root')

if (root !== null) {
  const appRoot = createRoot(root)

  appRoot.render(
    <React.StrictMode>
      <Router>
        <TitleProvider>
          <Header />
          <App />
          <Footer />
        </TitleProvider>
      </Router>
    </React.StrictMode>,
  )
}
