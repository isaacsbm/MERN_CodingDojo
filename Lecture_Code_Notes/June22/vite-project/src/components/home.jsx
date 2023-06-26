import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = ({message, setWelcome, word, setWord}) => {
    useEffect(()=> setWelcome("Welcome!"), [])
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        navigate("/dashboard")
    }
    return (
        <div>
            <h1>{message}</h1>
            <form onSubmit={submitHandler}>
                <label>Word: </label>
                <input type="text" value={word} onChange={event => setWord(event.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Home;