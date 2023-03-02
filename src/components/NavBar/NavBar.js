import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

const NavBar =({children})=>{
    return  <header className="header">
                <div className="logo">
                    <img src={require('./img/Tux.png')} alt="Logo empresarial" />                    
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/Category/101">Python</Link>                            
                        </li>
                        <li>
                            <Link to="/Category/100">Excel</Link>                            
                        </li>
                        <li>                            
                            <Link to="/Category/102">Power BI</Link>                            
                        </li>
                    </ul>
                </nav>
                {children}                
            </header>
};

export default NavBar;