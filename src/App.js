import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import React, { useEffect, useState,useContext } from "react";
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import Course from './components/Course/Course';
import Category from './components/Category/Category';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetailContainerById from './components/ItemDetailContainerById/ItemDetailContainerById';
import Cart from './components/Cart/Cart';
import PrecioContext from './contexts/PrecioContext';

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  const [ tipoCambio, setTipoCambio ] = useState();
  const [ codigoPedido, setCodigoPedido ] = useState();

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  

  return (
    <PrecioContext.Provider value={{ tipoCambio: 3.91,codigoPedido:1200 }}>
      <BrowserRouter>
      <NavBar>

        <CartWidget />
      </NavBar>
      <Routes>
        <Route exact path='/' element={ <ItemListContainer  /> }></Route>
        <Route exact path='/Category/:id' element={ <Category /> }></Route>
        <Route exact path='/Course/:id' element={ <Course /> }></Route>    
        <Route exact path='/ItemDetailContainer/:id' element={ <ItemDetailContainer /> }></Route>            
        <Route exact path='/ItemDetailContainerById/:id' element={<ItemDetailContainerById addToCart={addToCart} />} />

        <Route exact path='/Cart/' element={ <Cart items={cartItems} /> }></Route>
        
      </Routes>      
    </BrowserRouter>    
    </PrecioContext.Provider>
    
      

    
  );
}

export default App;
