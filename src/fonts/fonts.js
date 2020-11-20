import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @font-face{
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${'Kel'}) format('woff'),
        url(${'El Messiri'}) format('woff');
        font-weight: 300;
        font-style: normal;
}
`