import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteProduct = ({allProducts, setAllProducts}) => {
    const navigate = useNavigate()
    const {id} = useParams();
    useEffect(() => {
        const destroyProduct = allProducts.filter(product => product._id !== id )
        setAllProducts(destroyProduct)
        navigate("/")
    }, [id, navigate])
    return (
        <div>
        </div>
    )
}

export default DeleteProduct;