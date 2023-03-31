import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Admin from './Admin';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';




const App = () => {

    return (
        <>
            <NavBar />
            <h1>Personal Site (under construction)</h1>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/admin' element={ <Admin /> }/>
                <Route path='/about' element={ <About /> }/>
                <Route path='/skills' element={ <Skills /> }/>
                <Route path='/projects' element={ <Projects /> }/>
                <Route path='/contact' element={ <Contact /> }/>
            </Routes>
            <Footer />
        </>
    );
};

export default App;