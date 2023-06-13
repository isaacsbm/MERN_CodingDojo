import React, { useState } from 'react';

const PersonCard = (props) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age + count}</p>
            <p>Hair Color: {props.hairColor} </p>
            <button onClick={handleClick}>Birthday Button!</button>
        </div>
    )
}

export default PersonCard;