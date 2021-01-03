import styled from 'styled-components'


const NavContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;

  .main-links-container {
    width: 60%;
    text-align: center;
  }

  .links-container {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    align-items: center;
    text-align: center;
  }

  .toggleNav {
    display: none;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .toggleNav {
      display: inline-block;
      width: 5rem;
      height: 5rem;
      text-align: center;
      margin-right: 0.5rem;

      .bounce {
        animation: bounce 2s ease-in-out infinite;
      }
    }

    @keyframes bounce {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }

    .main-links-container {
      height: 0;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
    }

    .links-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;

      li {
        margin: 10px;
      }
    }
  }
`;


 export { NavContainer };