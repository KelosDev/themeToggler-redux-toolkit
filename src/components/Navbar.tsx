import React from 'react';
import ToggleTheme from './ToggleTheme';


const Navbar = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', background: '#f1eed5' }}>
                <ul style={{ display: 'flex', gap: '40px', textDecoration: 'none', listStyle: 'none' }}>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACTS</li>
                </ul>
                <div style={{ paddingTop: '15px' }}>
                    <ToggleTheme />
                </div>
            </div>
        </>
    );
};

export default Navbar;