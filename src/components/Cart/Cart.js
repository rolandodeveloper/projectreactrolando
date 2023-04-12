import React, { useEffect, useState,useContext } from "react";
import './cart.css'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getFirestore,doc,getDoc, snapshotEqual,addDoc,collection,writeBatch } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";
import PrecioContext from "../../contexts/PrecioContext";

const formBase = {
  nombre: '',
  apellido: '',
  telefono: '',
  correo: '',
  codigopedido:''
};

// const Cart =(props)=>{
function Cart (props){    

    const { tipoCambio } = useContext(PrecioContext);
    const { codigoPedido,setCodigoPedido } = useContext(PrecioContext);

    const actualizarCodigoPedido = () => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      setCodigoPedido(randomNumber);
      {codigoPedido=randomNumber};
    };


    const [esPrecioSoles, setPrecioDolares] = useState(1);
    const [simboloMoneda, setSimboloMoneda] = useState("S/. ");
    
    const CambiarADolares = () => {
      esPrecioSoles==1 ? setPrecioDolares(3.89) : setPrecioDolares(1)
      esPrecioSoles==1 ? setSimboloMoneda("$ ") : setSimboloMoneda("S/. ")
      
    };

    let contador=0;
    const [cartItems, setCartItems] = useState([]);
    const [form, setForm] = useState(formBase);
    const [id, setId] = useState();

    const submitHandler = (ev) => {
      ev.preventDefault();
  
      const db = getFirestore();
      const contactFormCollection = collection(db, 'clientes');
  
      addDoc(contactFormCollection, form).then((snapshot) => {
        setForm(formBase);
        setId(snapshot.id);
      });

      {props.items.map((item) => (            
        addDoc(collection(db, 'ventas'), item)
      ))}
      
      actualizarCodigoPedido();

    };

    const inputChangeHandler = (ev) => {
      const { name, value } = ev.target;      
      setForm({ ...form, [name]: value });
    };

    
  return (
    <PrecioContext.Provider>
      
      <div>
      <h2>Carrito de compras</h2>
      <p>Pedido Nº: {codigoPedido}</p>
      <p>{esPrecioSoles==1 ? 'Precio expresado en Nuevos Soles' : 'Precio expresado en Dólares americanos'}</p>
      <p>Tipo de cambio: {tipoCambio}</p>
      <button onClick={CambiarADolares}>Intercambiar precio entre nuevos soles o dólares</button>

      <ul>        
        {props.items.map((item) => (          
          <li key={item.id}>            
            Precio: {simboloMoneda} {Math.round(item.price/esPrecioSoles,2)} - Curso: {item.name}
            {contador=contador+parseFloat(item.price)}       
          </li>             
        ))}
      </ul>
      <p>Total a pagar: {simboloMoneda} {Math.round(contador/esPrecioSoles,2)}</p>
      

      <form onSubmit={submitHandler}>
        <table>
          <tr>
            <td>Nombre</td>
            <td><input type="text" id="nombre" name="nombre" placeholder="Nombre" value={form.nombre} onChange={inputChangeHandler} ></input></td>
          </tr>
          <tr>
            <td>Apellido</td>
            <td><input type="text" id="apellido" name="apellido" placeholder="Apellido" value={form.apellido} onChange={inputChangeHandler}></input></td>
          </tr>
          <tr>
            <td>Teléfono</td>
            <td><input type="text" id="telefono" name="telefono" placeholder="Telefono" value={form.telefono} onChange={inputChangeHandler}></input></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="text" id="correo" name="correo" placeholder="E-mail" value={form.correo} onChange={inputChangeHandler}></input></td>
          </tr>
          <tr>
            <td>Confirmar Email</td>
            <td><input type="text" id="txtEmailConfirmacion" placeholder="Confirmar E-mail"></input></td>
          </tr>
        </table>
        <button>Realizar compra</button>
      </form>
      

      
      
    </div>


    </PrecioContext.Provider>
  );
            
};

export default Cart;