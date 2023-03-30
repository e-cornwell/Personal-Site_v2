import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';




const App = () => {

    return (
        <div className='main'>
            <nav className='navBar'>
                <Link to='/'><img className='logo' src={"https://s.yimg.com/wm/mbr/images/default-profile_192_v0.0.1.png"}/></Link>
                <Link to='/admin'>Admin</Link>
                <Link to='/about'>About Me</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
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
        </div>
    );
};

export default App;