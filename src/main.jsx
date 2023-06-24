import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      {/* Moving navigation here caused an issue now when routing to new pages in mobile the navigation menu will not reset instead it will stay open and users need to click out of it (test this in mobile and cosider going back to each page having their own navigation component) */}
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
