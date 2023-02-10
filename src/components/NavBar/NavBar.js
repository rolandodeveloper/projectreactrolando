import React from "react";
import './navbar.css'

const NavBar =({children})=>{
    return  <header className="header">
                <div className="logo">
                    <img src={require('./img/Tux.png')} alt="Logo de la marca2" />
                    Falta el nombre de la empresa
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                {children}
                {/* <a href="#" className="btn"><button>Contact</button></a> */}
            </header>
};

export default NavBar;