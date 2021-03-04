import React from 'react';
import img from './images/Netflix_logo.png';
import './Nav.css';
import {useState, useEffect} from 'react';

const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? handleShow(true): handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav__logo"
                src={img}
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Avatar"
            />    
        </div>
        
    )
}

export default Nav
