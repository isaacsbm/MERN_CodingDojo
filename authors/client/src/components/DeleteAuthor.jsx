import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteAuthors = ({allAuthors, setAllAuthors}) => {
    const navigate = useNavigate()
    const {id} = useParams();
    useEffect(() => {
        const destroyAuthor = allAuthors.filter(authors => authors._id !== id)
        setAllAuthors(destroyAuthor)
        // navigate("/")
    }, [id])
    return (
        <div>
        </div>
    )
}

export default DeleteAuthors;