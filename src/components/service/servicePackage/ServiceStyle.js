import styled from 'styled-components'

const ServiceHome = styled.div`
    height: 50vh;
    display: flex;
    width: 100%;


.serviceDesign {
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
}


.serviceContact {
    height: 25vh;
    width: 50vw;
}

.serviceContact span {
    font-size: 1.5em;
}



.serviceContact section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}

@media (max-width:900px) {
    .serviceContact span {
        font-size: .7em;
    }

    .serviceDesign {
        display: flex;
        flex-direction: column;
        font-size: .9em;
    }


}

`

export default ServiceHome