import styled from "styled-components"


const HomePage = styled.div`
 display: flex;
    flex-direction: row-reverse;
    justify-content:space-between;
    background-color: #E5E4DF;

    .profile-img-container{width:50%}

 @media only screen and (max-width: 900px) {
     display:flex;
     flex-direction:column
 }

.about-my-profile {
    width:50%;
    display: flex;
    flex-direction: column;
    padding: 8em 0 0 2em;
    line-height: 5em;
}

h3 {
    font-family: system-ui;
    color: rgb(224, 102, 102)
}

.learn-hire-button {
    display: flex;
}
`;

const AboutButton = styled.button` 
    border-radius: 30%;
    padding: 10px 10px;
    margin: 30px 10px;
    font-weight: bold;
    text-align:center;
    background-color:${(props)=>props.aboutcolor ? `${props.theme.black}` : `${props.theme.teal}`};
    color: ${(props)=>props.theme.white};
`
   



export{HomePage, AboutButton}