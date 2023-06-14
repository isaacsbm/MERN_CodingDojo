import React from 'react';
import {useState} from 'react';

const NewBox = ({boxes, setBoxes}) => {
    // e can also mean element, so it is better to type out the element or event, to know it is either.
    const [color, setColor] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const formHandler = (event) => {
        event.preventDefault();
        const newBox = {color, height, width};
        setBoxes([...boxes, newBox])
    
    }
    return(
        <form onSubmit={formHandler}>
            <div>
                <label htmlFor="color">Color:</label>
                <input type="text" name='color' id='color' value={color} onChange={ event => setColor(event.target.value)} />
            </div>
            <div>
                <label htmlFor="height">height:</label>
                <input type="number" name='height' id='height' value={height} onChange={ event => setHeight(event.target.value)} />
            </div>
            <div>
                <label htmlFor="width">Width:</label>
                <input type="number" name='width' id='width' value={width} onChange={ event => setWidth(event.target.value)} />
            </div>
            <button>Create Box!</button>
        </form>
    );
};

export default NewBox;