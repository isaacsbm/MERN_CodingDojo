import './App.css'
import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path='/albums/*' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
