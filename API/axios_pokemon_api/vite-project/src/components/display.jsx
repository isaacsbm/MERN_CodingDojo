import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Display = ({pokemon, setPokemon}) => {
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
            setPokemon(response.data.results)
            console.log(response.data.results)
        })
        .catch((error) => 
        console.log(error))
    }, [])
    const displayOutput = () => {
        return (
            <div>
                <ol>
                    {pokemon.map((item, idx)=> {
                        return (
                            <li key={idx}>{item.name}</li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    return (
        <div>
            <h1>{displayOutput()}</h1>
        </div>
    )
}

export default Display;