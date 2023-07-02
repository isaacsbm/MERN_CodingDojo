import React, {useState} from 'react';

const Form = ({createdList, onCreatedList}) => {
    
        
    const [list, setList] = useState("");
    const [formError, setFormError] = useState("");

    const createList = (event) => {
        event.preventDefault();
        if (list.length < 2) {
            setFormError("list must be longer than 2 characters!")
        } else {
            setFormError("");
            onCreatedList(); //setlist to [...createdlist, list]
            setList('');
        }
    };

    const handleErrorList= (event) => {
        setList(event.target.value);
        // if (list.length < 2){
        //     setFormError("List must be 2 characters or longer!");
        // } else {
        //     setFormError("");
        //     onCreatedList(event.target.value);
        // }
    }
    return (
        <div className="wrapper">
            <form onSubmit={createList} action="post">
                <div>
                    <label>To Do: </label>
                    <input type="text" value={list} onChange={handleErrorList} />
                    {
                        formError ?
                        <p> {formError} </p> :
                        ''
                    }
                </div>
                {
                    formError ?
                    <button type='submit' value="Create List" disabled>Create List!</button> :
                    <button type='submit' value="Create List">Create List!</button>
                }
            </form>
        </div>
    )
}

export default Form;