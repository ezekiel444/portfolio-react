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
    }

    .main-links-container {
        height:0;
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










// const NavSearch = styled.div`
// position: relative;
// .searchIcon{
//    position:absolute;
//    top:20px;
//    bottom: 0px;
// };

// input{
//      border-radius: 25%;
//      width: 5em;
//      height: 2em;
//      text-align: center;
//      font-size: 1em;
//      font-weight: bolder;
//      margin-top: .5em;
// }
// `




// const NavHome = styled.div`
//   width: max(100px, 100%);
//   font-family: "El Messiri", sans-serif;
//   background-color: ${(props) => props.theme.white};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: calc(0.75em + 1vmin);
//   position: relative;

//   .nav-links {
//     color: #3a7ade;
//     position: relative;
//     padding: 0.5em;
//     margin: 0.6em;
//     display: inline-block;
//     &:hover {
//       border-radius: 5px;
//       text-align: center;
//       color: palegoldenrod;
//     }
//     span {
//       position: absolute;
//       display: flex;
//       font-size: 1.2rem;
//       font-weight: #dcdcdc;
//     }
//   }

//   .mobilelayout {
//     display: none;
//   }

//   @media only screen and (max-width: 900px) {
//     /* .windowlayout{display:none} */

//     .navControl-icons {
//         display:flex;
//         flex-direction:column;
//       /* height:0px;
//       visibility: hidden; */
//       transition: all 1s ease-in-out
//     }

//     .mobilelayout {
//       display: block;
//       .navPlaceHolder {
//         position: relative;
//       }
//       .formatDropDownView {
//         background-color: ${(props) => props.theme.white};
//         overflow-x: hidden;
//         display: flex;
//         flex-direction: column;
//         position: absolute;
//         right: 10px;
//       }
//     }
//   }
 
// `;





 export { NavContainer };