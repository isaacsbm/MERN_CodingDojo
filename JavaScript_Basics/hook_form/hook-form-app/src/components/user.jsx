import React, { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (event) => {
        event.preventDefault();

        const newUser = { username, email, password };
        console.log("Created:", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={ createUser } action="post">
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={ (event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={ (event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (event) => setPassword(event.target.value)} />
                </div>
                <button type='submit' value="Create User">Create User!</button>
            </form>
            <h1>{ newUser }</h1>
        </div>
    );
}

export default UserForm;
