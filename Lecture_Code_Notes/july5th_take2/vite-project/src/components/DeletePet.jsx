import axios from 'axios';
import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeletePet = ({allPets, setAllPets}) => {
    const navigate = useNavigate();
    const {petId} = useParams();
    useEffect(() => {
        axios.delete(`http://127.0.0.1:8000/api/pets/${petId}`)
        .then(res => {
            const updatedPet = allPets.filter(pet => pet._id !== petId)
            setAllPets(updatedPet);
            navigate("/");
        })
    }, [petId, navigate])
    return(
        <div></div>
    )
};

export default DeletePet;