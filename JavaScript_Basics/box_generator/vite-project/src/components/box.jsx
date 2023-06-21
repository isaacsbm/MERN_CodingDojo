import React, {useState} from 'react';

const Box = ({setBoxes, boxes}) => {
    // const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState("")
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [error, setError] = useState(false);

    const handleForm = (event) => {
        event.preventDefault();
        const allColors = ["red", "black", "blue", "black"]
        if (allColors.includes(color)){
            const newBox = {color: color, height: height + "px", width: width + "px", display: "inline-block"};
            setBoxes([...boxes, newBox]);
            // setBoxesExist(true);
            setColor("")
            setHeight("")
            setWidth(0)
            setError(false)
            console.log("You created a box", newBox.color, newBox.height, newBox.width)
        } else {
            setColor({error: true})
            console.log("There was an error!")
        }
    }
    const errorCheck = () => {
        if (error){
            return (<span style={{color: color}}>That is not a valid color!</span>)
        }
        return null;
    }
    return (
        <form onSubmit={handleForm} action="post">
            <div>
                <label htmlFor="color">Color: </label>
                <input type="text" id='color' name='color' value={color} onChange={(event) => setColor(event.target.value)} />
                {errorCheck}
            </div>
            <div>
                <label htmlFor="width">Width: </label>
                <input type="text" id='width' name='width' value={width} onChange={(event) => setWidth(event.target.value)} />
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <input type="text" id='height' name='height' value={height} onChange={(event) => setHeight(event.target.value)} />
            </div>
            <button type='submit'>Create a Box!</button>
        </form>
        
    )
}

export default Box;