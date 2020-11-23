import styled from 'styled-components'
//import {css} from 'styled-components'


const NavStyle = styled.div`
margin-left:50vw;
background-color:red;
height:80px;
width:90px;
display:flex;
flex-direction:column;
justify-content:center;

.test{
    border:3px solid green;
margin:5px;
}

.test1{
    transform:translate(5px, 10px) rotate(50deg)
}



.test3{
    transform:translate(-2px, -4px) rotate(-50deg)
}

.test2{display:none}



`

export default NavStyle