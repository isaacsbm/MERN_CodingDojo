import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const CreateProduct = ({allProducts, setAllProducts}) => {
    const [productName, setProductName] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    const [descriptionName, setDescriptionName] = useState("");
    const navigate = useNavigate();

    const newProductHandler = (event) => {
        event.preventDefault();
        const newProduct = {
            title: productName,
            price: priceValue,
            description: descriptionName
        };
        axios.post("http://127.0.0.1:8000/api/products/", newProduct)
            .then(
                res => {
                    setAllProducts([...allProducts, res.data])
                    navigate("/");
                }
            )
    }
    return (
        <div>
            <h1>Create pet!</h1>
            <Link to={"/"}>Display Products</Link>
            <form onSubmit={newProductHandler}>
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

export default CreateProduct;
