import React from 'react';

const style = {
    padding: '60px',
    textAlign: 'center',
    background: '#1abc9c',
    color: 'white',
}

export const Header = () => {
    return (
        <div style={style} className="Header">
            <h1>the cat empire</h1>
        </div>
    );
}
