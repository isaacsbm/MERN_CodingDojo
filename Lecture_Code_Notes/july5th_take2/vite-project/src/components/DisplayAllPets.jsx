import React from 'react';
import {Link} from "react-router-dom";
// import "../static/style.css";

const DisplayAllPets = ({allPets}) => {
    // Display a list of all pets

    return(
        <div>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Animal is sick?</td>
                        <td>Number of legs</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    { allPets.map(  pet => {
                        return (
                            <tr key={pet._id}>
                                <td><Link to={`/pets/${pet._id}`}>{pet.name}</Link></td>
                                
                                <td>{pet.animalType}</td>
                                <td>{pet.isSick ? "Yes" : "No"}</td>
                                <td>{pet.numOfLegs}</td>
                                <td><Link to={`/pets/edit/${pet._id}`}>Edit</Link>  | <Link to={`/pets/delete/${pet._id}`}>Delete</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p><Link to={"/newPet"}>Submit another pet</Link></p>
        </div>
    );
}
export default DisplayAllPets;