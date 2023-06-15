import React from 'react';

const UserDisplay = ({createdUser}) => {
    return (
        <div>
        <h1>Username: {createdUser.username}</h1>
        <h2>Email: {createdUser.email}</h2>
        <h2>Password: {createdUser.password}</h2>
        </div>
    )
}

export default UserDisplay;