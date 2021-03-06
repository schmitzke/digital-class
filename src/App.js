import React from 'react';

import { Header } from './Header';
import { Navbar } from './Navbar';
import { Content } from './Content';
import { Footer } from './Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Content />

            <Footer>
                <Navbar />
                <Navbar />
            </Footer>
        </div>
    );
}

export default App;
