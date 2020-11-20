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
    padding: 1.4em;
    display:inline-block
    };

    .toggleNavBar {
    display: none
}

.nav-mobile {
    display: none;
    };

.hoverEffect :hover {
    color:white;
    border-radius:50px;
   background-color:black;
   text-align:center
}



/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 900px) {
    /* a,
    link {
        color: #fff;
        font-size: xx-large;
    } */

    .toggleNavBar {
        display: block;
        font-size: 5em;
        position: relative;
        top: 30px;
    }

    .nav-mobile {
        display: block;
        position: absolute;
        top: 120px;
        right: 0;
        left: 50vw;
        text-align: center;
        background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
            linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
            linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
            linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
            linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
            linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
        background-color: #131313;
        background-size: 20px 20px;
    }

}
`

const NavLogo = styled.div`
 width: 90px;
`

const NavSearch = styled.div`
input{
     border-radius: 300px;
     width: 5em;
     height: 2em;
     text-align: center;
     font-size: 1em;
     font-weight: bolder;
     margin-top: .5em;
}
`


export{NavHome, NavLogo, NavSearch}