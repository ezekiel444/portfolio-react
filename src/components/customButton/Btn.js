import React from 'react'
import { NavLink } from 'react-router-dom';

function Btn({text, link}) {
    return ( <NavLink to={link ? `/${link}` : "/errorpage"}>{text}</NavLink>

    );
      
        
}

export default Btn
