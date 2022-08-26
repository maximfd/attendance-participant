import React from 'react';
import './Navbar.css';
import logoutImg from './logout.svg';

function Navbar(props) {
    return(
        <nav className='navbar'>
            <div className='logo'>
                <span className="logo-text-yellow">я</span>
                <span className="logo-text">здесь</span>
            </div>
            {/* <div className='profile'>Профиль</div> */}
            <button 
                className="btnLogout" 
                onClick={props.logout}
            >
                <img className='logoutImg' src={logoutImg} alt='' />
            </button>
        </nav>
    );
}

export default Navbar;