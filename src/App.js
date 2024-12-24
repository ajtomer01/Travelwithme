import React from 'react'
import'./app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const App = () => {
  return (
    <>
     <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App