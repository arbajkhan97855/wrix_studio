
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from './pages/Home'
import { GalleryPage } from './pages/Gallery'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
  Aos.init()
  })
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<HomePage />} path="/"/>
       <Route element={<GalleryPage />} path="/gallery"/>
       <Route element={<AboutPage />} path="/about"/>
       <Route element={<ContactPage />} path="/contact"/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
