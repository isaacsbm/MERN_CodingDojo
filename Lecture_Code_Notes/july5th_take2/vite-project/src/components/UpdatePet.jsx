import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatePet = ({allPets, setAllPets}) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petLegs, setPetLegs] = useState(0);
    const [petIsSick, setPetIsSick] = useState(false);
    const navigate = useNavigate();
    const {petId} =  useParams();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/pets" + petId)
        .then(res => {
            setPetName(res.data.name)
            setPetType(res.data.animalType);
            setPetIsSick(res.data.isSick);
            setPetLegs(res.data.numOfLegs);
        })
        .catch(err => console.log(err));
    }, [])
        
    const updatePetHandler = event => {
        event.preventDefault();
        const updatedPet = {
            name: petName,
            animalType: petType,
            numOfLegs: petLegs,
            isSick: petIsSick
        }
        axios.patch(`http://127.0.0.1:8000/api/pets/${petId}`, updatedPet)
        .then(res => {
            const updatedPet = allPets.filter(pet => pet._id != res.data._id)
            setAllPets([...updatedPet, res.data]);
            // navigate("/");
        })
    }


    return(
        <div>
            <p className='text-right'>
                <Link to={"/"}>Home</Link>
            </p>
            <form onSubmit={updatePetHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={petName} onChange={event => setPetName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="type">Animal Type</label>
                    <input type="text" id="type" name="type" value={petType} onChange={event => setPetType(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="numberOfLegs">Number of Legs</label>
                    <input type="number" id="numberOfLegs" name="numberOfLegs" value={petLegs} onChange={event => setPetLegs(event.target.value)}/>
                </div>
                <div>
                    <input type="checkbox" name="isSick" checked={petIsSick} onChange={ event => setPetIsSick(event.target.checked) }/>
                    <label>Is Sick?</label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdatePet;