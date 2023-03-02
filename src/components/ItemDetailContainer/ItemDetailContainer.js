import React, { useEffect, useState } from "react";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer =()=>{    
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
                <div> {people.results.map(character => {                    
                      return <div>Nombre: {character.nombre}</div>;                    
                })}</div>
            )}
        </div>
      );            
};

export default ItemDetailContainer;