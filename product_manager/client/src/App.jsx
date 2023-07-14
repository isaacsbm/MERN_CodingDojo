import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAllProducts from './components/DisplayAllProducts'
import Header from './components/Header'
import CreateProduct from './components/CreateProduct';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

function App() {

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
    .then(res => setAllProducts(res.data))
    .catch(err => console.log(err));
  }, [])


  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DisplayAllProducts allProducts={allProducts} />} />
        <Route path='/newproduct' element={<CreateProduct allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path='/products/:id' element={<OneProduct />} />
        <Route path='/products/edit/:id' element={<UpdateProduct allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path='/products/delete/:id' element={<DeleteProduct allProducts={allProducts} setAllProducts={setAllProducts} />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
