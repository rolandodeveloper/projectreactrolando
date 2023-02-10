import React from "react";
import './cartwidget.css'

const CartWidget =()=>{
    // Colocar un icono de carrito
    return  <a href="#" className="btn">
                <button>
                    <img src={require('./img/cart.png')} alt="Logo empresarial" width={25} />
                    <span className="elColor">7</span>
                </button>
            </a>
            
};

export default CartWidget;