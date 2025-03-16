import React from 'react'
import Navbar from './components/Navbar'
import Home from './routingComponents/Home'
import About from './routingComponents/About'
import Contact from './routingComponents/Contact'
import ParishPriest from './routingComponents/ParishPriest'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/parishpriest' element={<ParishPriest />} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App