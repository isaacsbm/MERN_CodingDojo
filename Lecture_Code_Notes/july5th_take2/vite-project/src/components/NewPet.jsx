import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const NewPet = ({allPets, setAllPets}) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petLegs, setPetLegs] = useState(0);
    const [petIsSick, setPetIsSick] = useState(false);
    const navigate = useNavigate();

    const newPetHandler = (event) => {
        event.preventDefault();
        // build new Pet
        const newPet = {
            name: petName,
            animalType: petType,
            numOfLegs: petLegs,
            isSick: petIsSick
        };
        axios.get("http://127.0.0.1:8000/api/pets", newPet)
            .then(
                res => {
                    setAllPets([...allPets, res.data])
                    navigate("/");
                }
            )

    }
    return(
        <div>
            <p className='text-right'>
                <Link to={"/"}>Home</Link>
            </p>
            <form onSubmit={newPetHandler}>
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
    );
}
export default NewPet;

// import React, {useState} from 'react';
// import {Link, useNavigate} from 'react-router-dom';
// import axios from 'axios';

// const NewPet = ({allPets, setAllPets}) => {
//     const [petName, setPetName] = useState("");
//     const [petType, setPetType] = useState("");
//     const [petLegs, setPetLegs] = useState("");
//     const [petIsSick, setPetIsSick] = useState("");
//     const navigate = useNavigate();

//     const newPetHandler = (event) => {
//         event.preventDefault();
//         const newPet = {
//             name: petName,
//             animalType: petType,
//             numOfLegs: petLegs,
//             isSick: petIsSick
//         };
//         axios.post("http://127.0.0.1:8000/api/pets", newPet)
//         .then(
//             res => {
//                 setAllPets([...allPets, res.data])
//                 navigate(`/`);
//             }
//         )
//     }

//     return (
//         <div>
//             <p className="text-right">
//                 <Link to={`/`}>Home</Link>
//             </p>
//             <form onSubmit={newPetHandler}>
//                 <div>
//                     <label htmlFor="name">Name: </label>
//                     <input type="text" id='name' name='name' value={petName} onChange={event => setPetName(event.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="type">Animal Type: </label>
//                     <input type="text" id='type' name='type' value={petType} onChange={event => setPetType(event.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="numberOfLegs">Number of Legs: </label>
//                     <input type="number" id='numberOfLegs' name='numberOfLegs' value={petLegs} onChange={event => setPetLegs(event.target.value)} />
//                 </div>
//                 <div>
//                     <input type="checkbox" name='isSick' checked={petIsSick} onChange={event => setPetIsSick(event.target.checked)}/>
//                     <label>Is Sick?</label>
//                 </div>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// };

// export default NewPet;