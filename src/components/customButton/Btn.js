import React from 'react'
// import { NavLink } from 'react-router-dom';

function Btn({text, link}) {
    return ( <a href={link && `/${link}`}>{text}</a>

    );
      
        
}

export default Btn
