import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const OnePet = (props) => {
    const {petId} = useParams();
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/pets/" + petId)
        .then(res => {
            setPet(res.data)
            console.log(res.data);
            console.log(id);
        })
    }, []);
    return(
        <div>
            <h1>{pet.name}</h1>
        </div>
    )
}

export default OnePet;