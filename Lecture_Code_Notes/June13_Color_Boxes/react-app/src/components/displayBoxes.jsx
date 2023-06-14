import React, { useEffect, useState } from 'react';

const DisplayBoxes = ({boxes}) => {
    const [boxArray, setBoxArray] = useState([])
    useEffect(
        () => {
            setBoxArray([...boxes])
        }
    )
    return(
        <div>
            {boxes.map( (box,idx) => {
                return(
                    <div style={{backgroundColor: box.color, height:box.height, width:box.width}} key={idx}></div>
                )
            })}
        </div>
    )
}

export default DisplayBoxes;

