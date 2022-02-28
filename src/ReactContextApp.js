import './App.css';
import React, { useState, useEffect } from 'react';
import ComponentA from './components/ComponentA'

export const NameContext = React.createContext()
export const UserContext = React.createContext()
export const ColorContext = React.createContext()

function ReactContextApp() {
    return (
        <div className="App">
            <UserContext.Provider value={'ChristianDC'}>
                <NameContext.Provider value={'Smith'}>
                    <ColorContext.Provider value={'red'}>
                        <ComponentA />
                    </ColorContext.Provider>
                </NameContext.Provider>
            </UserContext.Provider>
        </div >
    );
}

export default ReactContextApp;
