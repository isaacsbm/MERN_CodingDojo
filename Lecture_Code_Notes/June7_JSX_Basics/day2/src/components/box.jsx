import React from 'react';

const Box = (props) => {
    const {color, number} = props;
    const boxes = []
    for (let i=0;i<number;i++){
        boxes.push(i);
    }
    return (
        boxes.map( num => <div className="box" style={{backgroundColor: color}}></div>)
    )
}

export default Box;