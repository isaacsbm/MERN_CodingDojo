import React from 'react';

const DisplayBoxes = ({ boxes, boxesExist }) => {
    // const renderBoxes = () => {
        // if (boxesExist) {
        return boxes.map((box, idx) => (
            <div
            style={{
                backgroundColor: box.color,
                height: box.height,
                width: box.width,
                display: box.display,
            }}
            key={idx}
            ></div>
            ));
        // } else {
        // console.log(boxesExist)
        // return <h3>You haven't created a box yet!</h3>;
        }
    // };

    // return <div>{renderBoxes()}</div>;
    // };
export default DisplayBoxes;