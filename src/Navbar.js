import React from 'react';

const style = {
    display: 'flex',
    backgroundColor: '#333',
}

const hyperlink = {
    color: 'white',
    padding: '14px 20px',
    textDecoration: 'none',
    textAlign: 'center',
}

export const Navbar = () => {
    return(
        <div style={style} className="Navbar">
            <a style={hyperlink} href="#">Link</a>
            <a style={hyperlink} href="#">Link</a>
            <a style={hyperlink} href="#">Link</a>
            <a style={hyperlink} href="#">Link</a>
        </div>
    );
}

export default Navbar;
