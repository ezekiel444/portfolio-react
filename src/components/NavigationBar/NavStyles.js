import styled from 'styled-components'

const NavLogo = styled.div`
 width: 90px;
`

const NavSearch = styled.div`
position: relative;
.searchIcon{
   position:absolute;
   top:20px;
   bottom: 0px;
};

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




const NavHome = styled.div`
    width: max(100px, 100%);
    font-family: 'El Messiri', sans-serif;
    background-color: ${(props=>props.theme.white)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: calc(0.75em + 1vmin);
    position: relative;

    .nav-links {
    color: #3A7ADE;
    position:relative;
    padding: 0.5em;
    margin:0.6em;
    display:inline-block;
    &:hover{
   border-radius:5px;
   text-align:center;
   color:palegoldenrod;
}
span{
    position:absolute;
    display:flex;
    font-size:1.2rem;
    font-weight:#DCDCDC;
}

};



.mobilelayout{display:none}

@media only screen and (max-width: 900px) {
.windowlayout{display:none}

.mobilelayout{
    display:block;
    .navPlaceHolder{position:relative};
        .formatDropDownView{
        background-color:${(props=>props.theme.white)};
        overflow-x:hidden;
        display:flex;
        flex-direction:column;
        position:absolute;
        right:10px;
}
}

}

`



export{NavHome, NavLogo, NavSearch}