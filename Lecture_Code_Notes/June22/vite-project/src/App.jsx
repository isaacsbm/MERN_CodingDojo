import { useState } from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Number from './components/number';


function App() {
  const [welcome, setWelcome] = useState("")
  const [word, setWord] = useState("")

  return (
    <div className="app">
      <Header welcome={welcome} />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <Home 
        message="Hello World!" 
        setWelcome={setWelcome} 
        word={word} 
        setWord={setWord}/>} />
        <Route path="/dashboard" element={<Dashboard word={word}/>} />
        <Route path="/number/:num" element={<Number />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
