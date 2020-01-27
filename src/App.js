import React from 'react';
import ApiContextProvider from './contexts/ApiContext'
import Navbar from './components/Navbar/Navbar'
import List from './components/List/List'
import './App.scss'

function App() {
    return (
        <div className="app">
            <ApiContextProvider>
                <Navbar />
                <List />
            </ApiContextProvider>
        </div>
    );
}

export default App;
