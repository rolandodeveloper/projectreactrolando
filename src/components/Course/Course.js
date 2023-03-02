import React, { useEffect, useState } from "react";
import './course.css'
import { useParams } from "react-router-dom";


const Course =()=>{    
  const { id } = useParams();
  const [people,setPeople]=useState({});

  useEffect(()=>{
    fetch(`https://swapi.dev/api/people/${id}`)
    .then((res)=>res.json())
    .then(setPeople)
  },[id]);

    return  <div>
              <p>Name:{people.name} </p>
              <p>Height:{people.height}</p>              
            </div>
            
};

export default Course;