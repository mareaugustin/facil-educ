import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Accueil from './pages/Home'
import NotFound from './pages/NotFound'
import UserStatut from './pages/StatutUser'
import ChoixEleve from './pages/ChoixEleve'
import Login from './pages/authentification/Login'
import Lycee from './pages/Lycee'
import College from './pages/College'
import Primaire from './pages/Primaire'


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/user-statut" element={<UserStatut />} />
      <Route path="/ecole" element={<ChoixEleve />} />
      <Route path="/login" element={<Login />} />
      <Route path="/primaire" element={<Primaire />} />
      <Route path="/lycee" element={<Lycee />} />
      <Route path="/college" element={<College />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  )
}

export default App
