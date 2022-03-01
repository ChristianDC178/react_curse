import './App.css';
import React from 'react';
import Home from './components/router/Home'
import About from './components/router/About'
import Contact from './components/router/Contact'
import Navbar from './components/router/Navbar'
import Post from './components/Post';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from 'reactstrap';

function RouterApp() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts/:post_id" element={<Post />} />
            </Routes>
        </div>
    );
}

export default RouterApp;
