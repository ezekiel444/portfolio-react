import styled from 'styled-components'


const NavHome = styled.div`
    width: max(100px, 100%);
    font-family: 'El Messiri', sans-serif;
    background-color: ${(props=>props.theme.white)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: calc(0.75em + 1vmin);

    .nav-li {
    padding: 0.5em;
    margin:0.6em;
    display:inline-block;
    &:hover{
   border-radius:50px;
   background-color:black;
   text-align:center;
   color:white;
}
}
`

const NavLogo = styled.div`
 width: 90px;
`

const NavSearch = styled.div`
input{
     border-radius: 25%;
     width: 5em;
     height: 2em;
     text-align: center;
     font-size: 1em;
     font-weight: bolder;
     margin-top: .5em;
}
`

const MobileLayout = styled.div`
color:red;
display:none;


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 900px) {
    background-color:black;
    height:15vh;
    width: 15vw;
    display:block;
    > div{
        display:block;
        height:15vh;
        width: 15vw;
        cursor:pointer
    };
   div:nth-child(1){
       background-color:yellow;
       height:20px;
       transform:rotate(45deg) translate(30px, 25px)
   }
   div:nth-child(2){
       background-color:green;
       height:20px;
       display:none
   }
   div:nth-child(3){
       background-color:lightcyan;
       height:20px;
       transform:rotate(-45deg) translate(-9px, 15px)
   }

}

`


export{NavHome, NavLogo, NavSearch, MobileLayout}