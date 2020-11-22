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

.footer-address h4 {
    opacity: 0.2
}

.footer-right {
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 60px;
    opacity: 0.3;
}

.logoContainer{height: 50px;
border-radius: 20px;
box-shadow:  inset 0 -3em 3em rgba(248, 248, 255, 0.1), 
0 0  0 2px rgb(255, 255, 255),
0.3em 0.3em 1em rgba(252, 252, 252, 0.3);;
background-color: #0F0029;
color: rgb(255, 255, 255);
opacity: 0.5;
}

.logoContainer:hover{
    opacity: 1;
    transition: color 0.8s;
}


.eachLogo{height: 40px;
width: 20%;
}

.labelAttribute{
    font-size: 22px;
    margin: 10px;
}
`

export default FooterStyle