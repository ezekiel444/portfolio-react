import styled from 'styled-components'

const ServiceOffer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    padding: 10px;
    gap: 10px;
    height: 50vh;


.serviceDesignControl {
    box-shadow: 12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
        -8px -8px 12px 0 rgba(0, 0, 0, .25) inset;
    height: 100%;
}


.extra-service-box {
    text-align: center;
    font-size: 2rem;
}

@media(max-width:900px) {
    .serviceDesignControl {
     height: 50%;
 }

    .extra-service-box {
        text-align: center;
        font-size: 1em;
    }

}
`

export default ServiceOffer