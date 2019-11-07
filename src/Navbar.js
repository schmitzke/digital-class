import React from 'react';

const style = {
    display: 'flex',
    // flexDirection: 'row', -> das hier ist der standard-wert
    // flexDirection: 'column',
    // flexDirection: 'row',
    backgroundColor: '#333',
}

const hyperlinkStyle = {
    color: 'white',
    padding: '14px 20px',
    textDecoration: 'none',
    textAlign: 'center',
}

const googleUrl = 'https://www.google.de';
const facebookUrl = 'https://www.facebook.de';
const redditUrl = 'https://www.reddit.de';
const interoneUrl = 'https://www.interone.de';

export const Navbar = () => {
    return (
        <div style={style} className="Navbar">
            <a target="_blank" style={hyperlinkStyle} href={googleUrl}>Google</a>
            <a target="_blank" style={hyperlinkStyle} href={facebookUrl}>Facebok</a>
            <a target="_blank" style={hyperlinkStyle} href={redditUrl}>Reddit</a>
            <a target="_blank" style={hyperlinkStyle} href={interoneUrl}>interone.de</a>
        </div>
    );
}