import styled from 'styled-components'


const FooterStyle = styled.footer` 
    height: 80vh;
    background: #0F0029;
    color: #fff;

.footer-address {
    height: 40vh;
    text-align: center;
    padding-top: 50px;
    line-height: 1.5;
}

h4 {
    opacity: 0.2;
    font-style: italic;
}

.footer-right {
    height:40vh;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end
    
   }


   .footer-icon{  
    display:flex;
    
    justify-content:space-around;
    span{color:rgb(58,122,222)}
   }
`

export default FooterStyle