import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAuthor = ({allAuthors, setAllAuthors}) => {
    const [authorName, setAuthorName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const newAuthorHandler = (event) => {
        event.preventDefault();
        const newAuthor = {
            name: authorName
        };
        axios.post("http://127.0.0.1:8000/api/authors/", newAuthor)
            .then(
                res => {
                    setAllAuthors([...allAuthors, res.data])
                    navigate("/")
                })
            .catch( err => {
                const errArray = [];
                for (const key of Object.keys(err.response.data.errors)){
                    errArray.push(err.response.data.errors[key].message)
                }
                setErrors(errArray)
            })
    }
    return (
        <div>
            <h3>Add a New Author!</h3>
            <form onSubmit={newAuthorHandler}>
                <div>
                    {
                        errors.map((err, idx) => {
                            return(
                                <p key={idx}>{err}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' value={authorName} onChange={event => setAuthorName(event.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateAuthor;