import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
