import React from 'react';
import { useParams } from 'react-router-dom';

const Number = (props)  => {
    const {num} = useParams();
    return (
        <div>
            <h1>{num}</h1>
        </div>
    )
}

export default Number;