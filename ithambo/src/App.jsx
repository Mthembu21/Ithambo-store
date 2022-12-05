import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext"
import './App.css'
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AdminDash from "./pages/AdminDash"
import Catalog from "./pages/Catalog"
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


function App() {

  return (
    <AppContextProvider>
      <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<AdminDash />} />
          <Route path="catalog" element={<Products />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
          <Route path ="About" element ={<About/>}></Route>
          <Route path ="Contact" element ={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
    </AppContextProvider>
  )
}

export default App
