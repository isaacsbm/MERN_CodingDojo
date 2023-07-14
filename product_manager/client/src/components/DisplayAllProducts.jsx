import React from 'react';
import {Link} from 'react-router-dom';

const DisplayAllProducts = ({allProducts}) => {

    return (
        <div>
            <table className='table table-stripped'>
                <thead>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Actions</td>
                </thead>
                <tbody>
                    {allProducts.map( product => {
                        return(
                            <tr key={product._id}>
                                <td> <Link to={`/products/${product._id}`}>{product.title}</Link></td> 
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to={`/products/edit/${product._id}`}>Edit</Link>|<Link to={`/products/delete/${product._id}`}>Delete</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p><Link to={"/newproduct"}>Create a new product!</Link></p>
        </div>
    )
}

export default DisplayAllProducts;