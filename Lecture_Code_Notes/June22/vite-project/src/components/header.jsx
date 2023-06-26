import React from 'react';

const Header = ({welcome, setWelcome}) => {
    return (
        <div>
            <h1>{welcome}</h1>
        </div>
    )
}

export default Header;