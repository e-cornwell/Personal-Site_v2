import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else setScrolled(false);
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <div className='navBar'>
            <nav className={scrolled ? 'scrolled' : ''}>
                <Link to='/'><img className='logo' src={"https://s.yimg.com/wm/mbr/images/default-profile_192_v0.0.1.png"}/></Link>
                <Link to='/admin' className={activeLink === 'admin' ? 'activeNavBarLink' : 'navBarLink'} onClick={()=> onUpdateActiveLink('admin')}>Admin</Link>
                <Link to='/about' className={activeLink === 'about' ? 'activeNavBarLink' : 'navBarLink'} onClick={()=> onUpdateActiveLink('about')}>About Me</Link>
                <Link to='/skills' className={activeLink === 'skills' ? 'activeNavBarLink' : 'navBarLink'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Link>
                <Link to='/projects' className={activeLink === 'projects' ? 'activeNavBarLink' : 'navBarLink'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Link>
                <Link to='/contact' className={activeLink === 'contact' ? 'activeNavBarLink' : 'navBarLink'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Link>
            </nav>
            <span className='navBar-text'>
                <>
                    <a href='#'><img src={''} alt='' /></a>
                    <a href='#'><img src={''} alt='' /></a>
                    <a href='#'><img src={''} alt='' /></a>  
                </>
                <button className='social' onClick={()=> console.log("connect")}><span>Let's Connect</span></button>
            </span>
        </div>
    )
};

export default NavBar;