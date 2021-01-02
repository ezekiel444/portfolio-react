import styled from 'styled-components'


const FooterStyle = styled.footer`
  background: #0f0029;
  color: #fff;

  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
  }

  section{
      div{
display:grid;
grid-template-columns:repeat(4,7rem)
      }
  }

  h4 {
    opacity: 0.2;
    font-style: italic;
  }
`;

export default FooterStyle