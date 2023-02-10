import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar>

        <CartWidget />
      </NavBar>
      <ItemListContainer argGreeting={"Hola"} />
      
    </div>
  );
}

export default App;
