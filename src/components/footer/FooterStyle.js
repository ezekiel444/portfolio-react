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
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 60px;
    span{color:green};
   }

   .label{
       display:flex;
   }

   .footer-icon{
    display: flex;
    flex-direction:column;
  align-content: center;
   }
`

export default FooterStyle