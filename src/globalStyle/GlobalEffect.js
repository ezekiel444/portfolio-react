import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

*, link {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-decoration: none;
    list-style: none;
}

body {
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    max-width: 100vw;
}

input, textarea{
   background-color: black; 
   color: blanchedalmond;
}

input:focus, textarea:focus{
    background-color: rgb(255, 255, 255); 
    color: black;
    outline: none;
 }



.header-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 900px) {
    .header-sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
}

h1,
h2 {
    font-family: 'Libre Baskerville', serif;
}

img {
    width: 100%;
}

.scrollTop {
    position: absolute;
    top: -1;
    right: 0;
    font-size: 6em;
}

.scrollTop :hover {
    color: rgb(99, 56, 64);
    transition: all 0.4s ease-out;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
`

export default GlobalStyle