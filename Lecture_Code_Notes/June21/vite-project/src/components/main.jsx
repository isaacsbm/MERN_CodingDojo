import React, {useState} from 'react';
import Display from "./display";
import Form from "./form";

const Main = (props) => {
    const [pokemon, setPokemon] = useState({name:"None", "front-default": "none", types: [{
        name: "none"
    }]})
    return (
        <div>
            <Form pokemon={pokemon} setPokemon={setPokemon} />
            <Display pokemon={pokemon} setPokemon={setPokemon} />
        </div>
    )
}

export default Main;