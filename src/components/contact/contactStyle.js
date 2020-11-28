import styled from 'styled-components'

const ContactStyle = styled.section`
    display: flex;
    height: 70vh;

.contact-now {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact-now h1 {
    color: rgb(39, 37, 37);
    padding: 15px;
}

.signature {
    width: 16em;
}

.contact-message {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;
    height: 70vh;
}

form{
    display:flex;
    flex-direction:column;
    justify-content:center}


.contact-message input,
textarea,
button {
    margin-top: auto;
    height: 50px;
    border-radius: 30px;
    text-align: center;
    font-size: 1.5em;
    resize:none
}


@media (max-width:900px) {
    .signature {
        width: 5em;
    }
}

`

export default ContactStyle;