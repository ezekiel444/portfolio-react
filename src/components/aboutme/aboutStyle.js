import styled from "styled-components"


const HomePage = styled.div`
 display: flex;
    flex-direction: row-reverse;
    height: 100vh;
    background-color: #E5E4DF;
    overflow: hidden;


    .profile-img-container {
    width: 90rem;
    margin: 20px 0px 0px 0px
}

.about-my-profile {
    display: flex;
    flex-direction: column;
    padding: 8em 0 0 2em;
    line-height: 5em;
}

h3 {
    font-size: 17px;
    font-family: system-ui;
    color: rgb(224, 102, 102)
}

h1 {
    font-size: 50px;
}

.about-my-profile p {
    line-height: 2;
}


.learn-hire-button {
    display: flex;
}
`

const AboutButton = styled.button` 
    border-radius: 30%;
    padding: 20px 40px;
    margin: 30px 10px;
    font-weight: bold;
    font-size: 1em;
    text-align:center;
    background-color:${(props)=>props.aboutcolor ? `${props.theme.black}` : `${props.theme.teal}`};
    color: ${(props)=>props.theme.white};
`
   



export{HomePage, AboutButton}