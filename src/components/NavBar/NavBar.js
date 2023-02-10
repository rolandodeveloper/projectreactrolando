import React from "react";
import './navbar.css'

const NavBar =({children})=>{
    return  <header className="header">
                <div className="logo">
                    <img src={require('./img/Tux.png')} alt="Logo empresarial" />                    
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Python</a></li>
                        <li><a href="#">Excel</a></li>
                        <li><a href="#">Power BI</a></li>
                    </ul>
                </nav>
                {children}                
            </header>
};

export default NavBar;