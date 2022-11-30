import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AdminDash from "./pages/AdminDash"
import Catalog from "./pages/Catalog"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<AdminDash />} />
          <Route path="catalog" element={<Catalog />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
