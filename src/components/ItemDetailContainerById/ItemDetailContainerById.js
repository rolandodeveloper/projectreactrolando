import React, { useEffect, useState } from "react";
import './itemdetailcontainerbyid.css'
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc, snapshotEqual} from 'firebase/firestore'


// const ItemDetailContainerById =(props)=>{   
function ItemDetailContainerById (props){   
    const { id } = useParams();     
    const [item,setItem]=useState({});
  
    function handleAddToCart() {
        const product = { id: item.id, name: item.nombre, price:item.precio};
        props.addToCart(product);
      }

  useEffect(()=>{    
        const db=getFirestore();
        const itemRef = doc(db,'courses',id);
        getDoc(itemRef).then((snapshot)=>{
            const obj = {
                id:snapshot.id,
                ...snapshot.data(),
            };
            setItem(obj);
        });
    },[id]);

      return  (
        <div>
            <h2>Detalles del curso:</h2>
            <img src={item.imagen} width="350" height="350"></img>            

            <p>Nombre: {item.nombre}</p>
            <p>Precio: {item.precio}</p>
            <p>Descripcion: {item.descripcion}</p>                                                            
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      );            
};

export default ItemDetailContainerById;

//Guardado 1
// const ItemDetailContainerById =({id})=>{   
//     const [item,setItem]=useState({});
  
//     useEffect(()=>{    
//         const db=getFirestore();
//         const itemRef = doc(db,'courses',id);
//         getDoc(itemRef).then((snapshot)=>{
//             const obj = {
//                 id:snapshot.id,
//                 ...snapshot.data(),
//             };
//             setItem(obj);
//         });
//     },[id]);
  
//       return  (
//         <div>
//             <h2>Detalles del curso:</h2>
//             <p>Nombre: {item.nombre}</p>
//             <p>Precio: {item.precio}</p>
//             <p>Descripcion: {item.descripcion}</p>                                                            
//         </div>
//       );            
// };

// export default ItemDetailContainerById;

//Guardado 2
// const ItemDetailContainerById =()=>{   
//     const { id } = useParams();     
//     const [item,setItem]=useState({});
  
//     useEffect(()=>{    
//         const db=getFirestore();
//         const itemRef = doc(db,'courses',id);
//         getDoc(itemRef).then((snapshot)=>{
//             const obj = {
//                 id:snapshot.id,
//                 ...snapshot.data(),
//             };
//             setItem(obj);
//         });
//     },[id]);
  
//       return  (
//         <div>
//             <h2>Detalles del curso:</h2>
//             <p>Nombre: {item.nombre}</p>
//             <p>Precio: {item.precio}</p>
//             <p>Descripcion: {item.descripcion}</p>                                                            
//         </div>
//       );            
// };