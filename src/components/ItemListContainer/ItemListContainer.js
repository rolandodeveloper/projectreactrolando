import React from "react";
import './itemlistcontainer.css'
import {Link} from 'react-router-dom';

const ItemListContainer =({argTexto1,argTexto2,argTexto3,argTexto4,argTexto5})=>{    
    return  <>                
                <img src={argTexto5} width="150" height="150"></img>
                <p><Link to={`/itemDetailContainerById/`+argTexto1}>{argTexto2}</Link></p>
                <p>{argTexto3}</p>
                <p>{argTexto4}</p>
                <p>------------------------------------</p>
            </>
            
};

export default ItemListContainer;