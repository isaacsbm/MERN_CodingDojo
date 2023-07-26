import './App.css'
import { useState, useEffect } from 'react'
import axios, { all } from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AuthorsList from './components/AuthorsList';
import DeleteAuthors from './components/DeleteAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import CreateAuthor from './components/CreateAuthor';

function App() {

  const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/authors")
    .then(res => setAllAuthors(res.data))
    .catch(err => console.log(err));
  }, [])
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AuthorsList allAuthors={allAuthors} />} />
          <Route path="/authors/new" element={<CreateAuthor allAuthors={allAuthors} setAllAuthors={setAllAuthors} />} />
          <Route path="/authors/edit/:id" element={<UpdateAuthor allAuthors={allAuthors} setAllAuthors={setAllAuthors} />} />
          <Route path='/authors/delete/:id' element={<DeleteAuthors allAuthors={allAuthors} setAllAuthors={setAllAuthors} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
