import React, { useEffect, useState } from "react";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc, snapshotEqual, collection,getDocs,query,where} from 'firebase/firestore'

// const ItemDetailContainer =()=>{   
//     const { id } = useParams();     
//     const [people,setPeople]=useState({});
  
//     useEffect(()=>{    
//     fetch(`/data/courses.json`)
//       .then((res)=>res.json())
//       .then((res)=>setPeople(res));
//     },[]);
  
//       return  (
//         <div>
//             {typeof people.results==='undefined' ? (
//                 <div>Cargando</div>
//             ) : (
//                 <div> {people.results.filter(p=>p.numero===id).map(character => {                    
//                       return <div>                        
//                         <h2>Detalles del curso:</h2>
//                         <p>Nombre: {character.nombre}</p>
//                         <p>Precio: {character.precio}</p>
//                         <p>Descripcion: {character.descripcion}</p>                        
//                         </div>;                    
//                 })}</div>
//             )}
//         </div>
//       );            
// };

const ItemDetailContainer =()=>{   
  const { id } = useParams();     
  const [items,setItems]=useState({});

  useEffect(()=>{    
    const db= getFirestore();
    const itemsCollection = collection(db,'courses');
    const q = query(itemsCollection,where('codigoCategoria','==','id'));

    getDocs(q).then((snapshotList)=>{
      const docs= snapshotList.docs.map((snapshot)=>({
      id: snapshot.id,
      ...snapshot.data(),
    }));
    setItems(docs);
  });
  },[id]);

    return  (
      <div>
          <h2>Detalles del curso:</h2>
          {items.map((item)=>(
            <div>
                <h2>Detalles del curso:</h2>
                <p>Nombre: {item.nombre}</p>
                <p>Precio: {item.precio}</p>
                <p>Descripcion: {item.descripcion}</p>                        
            </div>
          ))}
      </div>
    );            
};

export default ItemDetailContainer;