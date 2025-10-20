import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import BookPage from './pages/BookPage'
import NotFound from './pages/NotFound'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="*" element={<NotFound />} /> {/* 👈 Rota coringa */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
