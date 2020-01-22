import React, { PureComponent } from 'react';
import { Routes } from './routes';
import { GlobalStyle } from './components';

class App extends PureComponent {
    render() {
        return (
            <>
                <GlobalStyle />
                <Routes />
            </>
        );
    }
}

export default App;
