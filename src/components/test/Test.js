import React from 'react'
import NavStyle from './TestStyle'

export default function Test() {
    return (
        <NavStyle test>
           <div className="test test1"></div>
           <div className="test test2"></div>
           <div className="test test3"></div> 
        </NavStyle>
    )
}

// {navButton ? (
//     <div className="nav-mobile">{links}</div>
//   ) : (
//     <div className="nav-computer">{links}</div>
//   )}

{/* <span className="toggleNavBar" onClick={open}>
        {navButton ? <FiX /> : <FiAlignLeft />}
      </span> */}

      
// display: block;
//         position: absolute;
//         top: 120px;
//         right: 0;
//         left: 50vw;
//         text-align: center;
//         background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
//             linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
//             linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
//             linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
//             linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
//             linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
//         background-color: #131313;
//         background-size: 20px 20px;


// .toggleNavBar {
//     display: block;
//     font-size: 5em;
//     position: relative;
//     top: 30px;
// }

// .nav-mobile {
//     background-color:red
// }

// const NavBar = () => {
//     const [navButton, setNavButton] = useState(false);
  
//     const open = () => {
//       setNavButton((prevState) => (!prevState ? true : false));
//     };




/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (max-width: 900px) {
//     background-color:black;
//     height:15vh;
//     width: 15vw;
//     display:block;
//     > div{
//         display:block;
//         height:15vh;
//         width: 15vw;
//         cursor:pointer
//     };
//    div:nth-child(1){
//        background-color:yellow;
//        height:20px;
//        transform:rotate(45deg) translate(30px, 25px)
//    }
//    div:nth-child(2){
//        background-color:green;
//        height:20px;
//        display:none
//    }
//    div:nth-child(3){
//        background-color:lightcyan;
//        height:20px;
//        transform:rotate(-45deg) translate(-9px, 15px)
//    }
// };
