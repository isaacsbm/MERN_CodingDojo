import React, { useState } from 'react';

const UserForm = ({ onUserCreate, createdUser }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (event) => {
        event.preventDefault();

        const newUser = { username, email, password };
        console.log("Created:", newUser);
        onUserCreate(newUser);
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form onSubmit={createUser} action="post">
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type='submit' value="Create User">Create User!</button>
            </form>
            {createdUser && (
                <div>
                    <p><span style={{ fontWeight: 'bold' }}>Username:</span> {createdUser.username}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Email:</span> {createdUser.email}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Password:</span> {createdUser.password}</p>
                </div>
            )}
        </div>
    );
}

export default UserForm;
