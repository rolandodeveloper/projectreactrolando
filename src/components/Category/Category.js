import React, { useEffect, useState,useContext } from "react";
import './category.css'
import { useParams } from "react-router-dom";
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { getFirestore,doc,getDoc, snapshotEqual, collection,getDocs,query,where} from 'firebase/firestore'
import PrecioContext from "../../contexts/PrecioContext";

const Category =()=>{
  
  const { tipoCambio } = useContext(PrecioContext);

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
        <p>Todos los precios están expresados en Nuevos soles, al finalizar la compra puede ver su equivalente en dólares (Tipo de cambio: {tipoCambio}) </p>
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