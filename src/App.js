import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import React from 'react';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import Course from './components/Course/Course';
import Category from './components/Category/Category';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar>

        <CartWidget />
      </NavBar>
      <Routes>
        <Route exact path='/' element={ <ItemListContainer argTexto1={"Bienvenido a mis cursos"} argTexto2={"Haga click en las categorías de la parte superior para ver los cursos disponibles"} /> }></Route>
        <Route exact path='/Category/:id' element={ <Category /> }></Route>
        <Route exact path='/Course/:id' element={ <Course /> }></Route>    
        <Route exact path='/ItemDetailContainer/:id' element={ <ItemDetailContainer /> }></Route>            
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
