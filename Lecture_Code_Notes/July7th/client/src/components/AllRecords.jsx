import React from 'react';
import { Link } from 'react-router-dom';

const AllRecords = ({allRecords}) => {
    return (
        <div>
            <Link to={'/albums/new'}>Add a New Record!</Link>
            <h3>My Vinyl Wishlist and Collection!</h3>
            <div>
                <table className='table table-hover'>
                    <thead>
                        <tr className='table-info'>
                            <th scope='col'>Album Title</th>
                            <th scope='col'>Artist</th>
                            <th scope='col'>Owned</th>
                            <th scope='col'>Actions</th>
                        </tr>
                            {allRecords.map( record => {
                                return (
                                    <tr key={record._id}>
                                        <td scope="row">
                                            <Link to={`${record._id}`}>{record.title}</Link></td>
                                        <td>{record.artist}</td>
                                        <td>{record.isOwned ? "Yes" : "No"}</td>
                                        <td>Edit | Delete</td>
                                    </tr>
                                )
                            })}
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default AllRecords;