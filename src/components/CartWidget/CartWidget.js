import React from "react";
import './cartwidget.css'
import {Link} from 'react-router-dom';

const CartWidget =()=>{
    // Colocar un icono de carrito
    return  <a href="#" className="btn">
                <button>
                    <img src={require('./img/cart.png')} alt="Logo empresarial" width={25} />
                    <span className="elColor">7</span>
                </button>
                <p><Link to="/Cart/">Ver</Link>                            </p>
            </a>
            
};

export default CartWidget;