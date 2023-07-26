import React from 'react';
import { Link } from 'react-router-dom';

const AuthorsList = ({allAuthors}) => {

    return (
        <div>
            <table className='table table-stripped'>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
                {allAuthors.map( authors => {
                    return(
                        <tr key={authors._id}>
                            <td>{authors.name}</td>
                            <td><Link to={`/authors/edit/${authors._id}`}>Edit</Link> | <Link to={`authors/delete/${authors._id}`}>Delete</Link></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default AuthorsList;