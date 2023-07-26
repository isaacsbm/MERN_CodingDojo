import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1 className='site-header'>Favorite Authors</h1>
            <p><Link to={'/authors/new'}>Add a Author!</Link></p>
            <p><Link to={'/'}>Homepage!</Link></p>
        </div>
    )
}

export default Header;