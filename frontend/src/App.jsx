import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Accueil from './pages/Home'
import NotFound from './pages/NotFound'


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  )
}

export default App
