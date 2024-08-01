import React from "react";
import './styles/NavBar.scss';

const NavBar = () => {
    return(
        <div className="NavBar">
            <a href="/"><h1>Restaurant</h1></a>
            <ul>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Hours</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </div>
    );
}

export default NavBar;