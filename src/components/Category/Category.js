import React, { useEffect, useState } from "react";
import './category.css'
import { useParams } from "react-router-dom";
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Category =()=>{
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
                <div> 
                  {
                    //Versión 1
                    // people.results.map(character => {
                    // if (character.codigoCategoria===`100`)
                    // {
                    //   return <div>Nombre: {character.nombre} {character.codigoCategoria}</div>;
                    // }
                    // })

                    //Versión 2 - Por parámetro retornar HTML
                    // people.results.filter(p=>p.codigoCategoria===id).map(character => {                      
                    //     return <div>Nombre: {character.nombre} {character.codigoCategoria}</div>;                      
                    //   })

                    //Versión 3 - Por parámetro retornar componente
                    people.results.filter(p=>p.codigoCategoria===id).map(character => {                      

                      return  <div>
                              <ItemListContainer argTexto1={character.numero} argTexto2={character.nombre} argTexto3={character.precio} argTexto4={character.descripcion}>

                              </ItemListContainer>
                              </div>;                      
                    })
                  }
                </div>
            )}
        </div>
      );            
};

export default Category;