import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import {socialLogo} from '../footer/Footer'

export default function Test() {
    const [logo, setLogos] = useState('')
    console.log(socialLogo)
    const {id} = useParams()
   useEffect(() => {
     setLogos(socialLogo.find(logo =>logo.id == id))
       
   }, [id])
    return (
        <div>
          {logo.medialAccount}
        </div>
    )
}
