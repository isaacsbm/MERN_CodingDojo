import React, {useState} from "react";
import axios from 'axios';

const Form = ({setPokemon, Pokemon}) => {
    const [pokeName, setPokeName] = useState("");
    const submitHandler= (event) => {
        event.preventDefault();
        const pokeName = document.getElementById("name")
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeName)
        .then(res=> {setPokemon(res.data)})
        .catch(err => {
            console.log(err);
            setPokemon({name:""})
        })
        // .then(data=> console.log(data))
        // .then(err => console.log(err))

    }
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <div className="from-outline"></div>
                        <input className="form-control" type="text" name="name" id="name" />
                        <label className="form-label" htmlFor="name" value={pokeName} onChange={(event)=> setPokeName(event.target.value)}>Pokemon Name: </label>
                </div>
                <button className="btn btn-primary">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Form;