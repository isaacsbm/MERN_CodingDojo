import { useState } from 'react';
export default function Form({onUserCreate, createdUser}){
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const [formError, setFormError] = useState("");

    const createUser = (event) => {
        event.preventDefault();

        const newUser = { username, email, password };
        console.log("Created:", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setHasBeenSubmitted(true);
    };

    const handleErrorUsername = (event) => {
        setUsername(event.target.value);
        if (username.length < 2){
            setFormError("Username must be 2 characters or longer!");
        } else {
            setFormError("");
        }
    }
    
    const handleErrorEmail = (event) => {
        setEmail(event.target.value);
        if (email.length < 5){
            setFormError("Email must be 5 characters or longer!");
        } else {
            setFormError("");
        }
    }
    const handleErrorPassword = (event) => {
        setPassword(event.target.value);
        if (password.length < 8){
            setFormError("Password must be 8 characters or longer!");
        } else if (event.target.value  !== passwordValdiation) {
            setFormError("Password's must match!");
        } else {
            setFormError("")
        }
    }

    const handleErrorPasswordValidation = (event) => {
        setPasswordValidation(event.target.value);
        if (event.target.value !== password) {
            setFormError("Passwords must match!");
        } else {
            setFormError("");
        }
    };

    return (
        <div className="wrapper">a
            <form onSubmit={createUser} action="post">
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={handleErrorUsername} />
                    {
                        formError ?
                        <p> {formError} </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={handleErrorEmail} />
                    {
                        formError ?
                        <p> {formError} </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={handleErrorPassword} />
                    {
                        formError ?
                        <p> {formError} </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password Validation: </label>
                    <input type="password" value={passwordValidation} onChange={handleErrorPasswordValidation} />
                    {
                        formError ?
                        <p> {formError} </p> :
                        ''
                    }
                </div>
                {
                    formError ?
                    <button type='submit' value="Create User" disabled>Create User!</button> :
                    <button type='submit' value="Create User">Create User!</button>
                }
            </form>
            <div>
                <p><span style={{ fontWeight: 'bold' }}>Username:</span> {username}</p>
                <p><span style={{ fontWeight: 'bold' }}>Email:</span> {email}</p>
                <p><span style={{ fontWeight: 'bold' }}>Password:</span> {password}</p>
            </div>
        </div>
    )
}