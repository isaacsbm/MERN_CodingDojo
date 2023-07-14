import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = ({allProducts, setAllProducts}) => {
    const [productName, setProductName] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    const [descriptionName, setDescriptionName] = useState("");
    const {id }= useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/products/" + id)
            .then(res => {
                setProductName(res.data.title);
                setPriceValue(res.data.price);
                setDescriptionName(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProductHandler = event => {
        event.preventDefault();
        const updatedProduct = {
            title: productName,
            price: priceValue,
            description: descriptionName
        }
        axios.patch(`http://127.0.0.1:8000/api/products/${id}`, updatedProduct)
        .then(
            // res => {
            //     const updatedProduct = res.data;
            //     setAllProducts = preProductList.map((product) => product._id === updatedProduct._id ? updatedProduct: product);
            //     return updatedProduct;
            //     navigate("/")
            // } //! To be worked on later, how is preProductList defined? 
            res => {
                const updatedProduct = allProducts.filter(product => product._id != res.data._id)
                setAllProducts([...updatedProduct, res.data])
                navigate("/");
            }
        )
    }
    return (
        <div>
            <h1>Update Product!</h1>
            <form onSubmit={updateProductHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id='title' value={productName} onChange={event => setProductName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id='price' value={priceValue} onChange={event => setPriceValue(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id='description' value={descriptionName} onChange={event => setDescriptionName(event.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateProduct;