import React from "react";
import {useParams} from "react-router-dom";

const Page = (props) => {
    const {word, color, backgroundcolor} = useParams();
    const renderContent = () => {
        if (isNaN(word)) {
            const style = color ? {color, backgroundColor: backgroundcolor} : null;
            return <h1 style={style}>This is a word: {word}</h1>;
        } else {
            return <h1>Here is a number: {word}</h1>
        }
    }
    return (
        <div>
            {renderContent()}
        </div>
    )
}

export default Page;