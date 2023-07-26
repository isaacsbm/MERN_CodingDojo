import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateAuthor = ({allAuthors, setAllAuthors}) => {
    const [authorName, setAuthorName] = useState("")
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/authors/" + id)
            .then(res => {
                setAuthorName(res.data.name);
            })
            .catch(err => console.log(err))
    })

    const updateAuthorHandler = (event) => {
        event.preventDefault();
        const editAuthor = {
            name: authorName
        };
        axios.patch(`http://127.0.0.1:8000/api/authors/${id}`, editAuthor)
            .then(
                res => {
                    const updatedAuthor = res.data;
                    const updatedAllAuthors = allAuthors.map( authors => {
                        return authors._id === updatedAuthor._id ? updatedAuthor : authors;
                    })
                    setAllAuthors(updatedAllAuthors);
                    navigate("/")
                })
                .catch(err => console.log(err))
    }
    return (
        <div>
            <h3>Update Author!</h3>
            <form onSubmit={updateAuthorHandler}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' value={authorName} onChange={event => setAuthorName(event.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateAuthor;