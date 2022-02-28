import './App.css';
import React from 'react';
import Home from './components/router/Home'
import About from './components/router/About'
import Contact from './components/router/Contact'
import Navbar from './components/router/Navbar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RouterApp() {
    return (
        <Router>
            <div className="App">
                <Navbar>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Navbar>
            </div>
        </Router>
    );
}

export default RouterApp;
