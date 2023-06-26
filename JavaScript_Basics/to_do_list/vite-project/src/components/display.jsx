import React, {useState} from 'react';

const Display = ({createdList}) => {
    return (
        <div className="wrapper">
            {createdList ? (
                createdList.length > 0 ? (
                    <ul>
                        {createdList.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                ) : (
                    <p>Nothing to do!</p>
                )
            ) : null
        }
        </div>
    )
}

export default Display;