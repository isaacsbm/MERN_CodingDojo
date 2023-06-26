import React, {useState} from 'react';
import axios from 'axios';
import Display from './display';

const Main = (props) => {
    const [pokemon, setPokemon] = useState([])
    return (
        <div>
            <h1>Pokemon API List</h1>
            <Display pokemon={pokemon} setPokemon={setPokemon} />
        </div>
    )
}

export default Main;