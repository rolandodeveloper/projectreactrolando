import React, { useEffect, useState } from "react";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer =()=>{   
    const { id } = useParams();     
    const [people,setPeople]=useState({});
  
    useEffect(()=>{    
    fetch(`/data/courses.json`)
      .then((res)=>res.json())
      .then((res)=>setPeople(res));
    },[]);
  
      return  (
        <div>
            {typeof people.results==='undefined' ? (
                <div>Cargando</div>
            ) : (
                <div> {people.results.filter(p=>p.numero===id).map(character => {                    
                      return <div>                        
                        <h2>Detalles del curso:</h2>
                        <p>Nombre: {character.nombre}</p>
                        <p>Precio: {character.precio}</p>
                        <p>Descripcion: {character.descripcion}</p>                        
                        </div>;                    
                })}</div>
            )}
        </div>
      );            
};

export default ItemDetailContainer;