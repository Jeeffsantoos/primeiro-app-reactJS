import React from 'react';

import Header from './componentes/Header/';
import Footer from './componentes/Footer/';
import HomePage from './componentes/HomePage';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;

