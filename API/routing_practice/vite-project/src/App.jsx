import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Page from './components/page';
import './App.css'

function App() {
  const [word, setWord] = useState("")
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path='/home' element={<Dashboard />} />
          <Route path='/:word' element={<Page />}/>
          {/* <Route path='/:num' element={<Page />}/> */}
          <Route path='/:word/:color/:backgroundcolor' element={<Page />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
