import React from "react";
import './itemlistcontainer.css'
import {Link} from 'react-router-dom';

const ItemListContainer =({argTexto1,argTexto2,argTexto3,argTexto4})=>{    
    return  <>
                <p><Link to={`/itemDetailContainer/`+argTexto1}>{argTexto2}</Link></p>
                <p>{argTexto3}</p>
                <p>{argTexto4}</p>
            </>
            
};

export default ItemListContainer;