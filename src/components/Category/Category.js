import React, { useEffect, useState } from "react";
import './category.css'
import { useParams } from "react-router-dom";
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { getFirestore,doc,getDoc, snapshotEqual, collection,getDocs,query,where} from 'firebase/firestore'

// const Category =()=>{
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
//                 <div> 
//                   {                   
//                     people.results.filter(p=>p.codigoCategoria===id).map(character => {                      

//                       return  <div>
//                               <ItemListContainer argTexto1={character.numero} argTexto2={character.nombre} argTexto3={character.precio} argTexto4={character.descripcion}>

//                               </ItemListContainer>
//                               </div>;                      
//                     })
//                   }
//                 </div>
//             )}
//         </div>
//       );            
// };

const Category =()=>{
  const { id } = useParams();     
    const [items,setItems]=useState([]);
  
    useEffect(()=>{    
        const db=getFirestore();
        const itemsCollection = collection(db,'courses');
        // const q = query(itemsCollection);
        const q = query(itemsCollection, where('codigoCategoria', '==', id));
        getDocs(q).then((snapshotList)=>{
            const docs = snapshotList.docs.map((snapshot) => ({
                id:snapshot.id,
                ...snapshot.data(),
            }));
            setItems(docs);
        });
    },[id]);

    return  (
      <div>      
        <h2>Items de la categoría</h2>
        
        {items.map((item)=>(
          
          <div>
            
            <ItemListContainer argTexto1={item.id} argTexto2={item.nombre} argTexto3={item.precio} argTexto4={item.descripcion} argTexto5={item.imagen}>
            
            </ItemListContainer>
            
          </div>
          
        ))}

    </div>
    );            
};



export default Category;