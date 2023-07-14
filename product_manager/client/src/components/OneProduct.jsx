import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {
    const {id }= useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/products/" + id)
        .then(res => {
            setProduct(res.data)
            console.log(res.data)
            console.log(id)
        })
    }, [id]);

    return (
        <div>
            <div>
                <h1>Title: {product.title}</h1>
                <h2>Price: {product.price}</h2>
                <h2>Description: {product.description}</h2>
            </div>
            <Link to={"/"}>Display Products</Link>
        </div>
    )
}

export default OneProduct;