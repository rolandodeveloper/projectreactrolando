import React, { useEffect, useState } from "react";
import './cart.css'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getFirestore,doc,getDoc, snapshotEqual} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";

// const Cart =(props)=>{
function Cart (props){    
    let contador=0;
    const [cartItems, setCartItems] = useState([]);

    const storage = getStorage();

    function saveToFirebase(item) {
        const itemRef = ref(storage, 'ventas/' + item.id);
        uploadBytes(itemRef, item.file)
          .then((snapshot) => {
            console.log('Archivo guardado exitosamente');
          })
          .catch((error) => {
            console.error('Error al guardar archivo', error);
          });
      }

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>        
        {props.items.map((item) => (          
          <li key={item.id}>            
            Precio: $ {item.price} - Curso: {item.name}
            {contador=contador+parseFloat(item.price)}       
          </li>             
        ))}
      </ul>
      <p>Total a pagar: $ {contador}</p>
      <table>
        <tr>
          <td>Nombre</td>
          <td><input type="text" id="txtNombre"></input></td>
        </tr>
        <tr>
          <td>Apellido</td>
          <td><input type="text" id="txtApellido"></input></td>
        </tr>
        <tr>
          <td>Teléfono</td>
          <td><input type="text" id="txtTelefono"></input></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="text" id="txtEmail"></input></td>
        </tr>
        <tr>
          <td>Confirmar Email</td>
          <td><input type="text" id="txtEmailConfirmacion"></input></td>
        </tr>
      </table>

      <button onClick={saveToFirebase}>Realizar compra</button>
      
    </div>
  );
            
};

export default Cart;