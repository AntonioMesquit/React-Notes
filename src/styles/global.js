import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;
transition: all .5s;
}

body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
}
body,input,textarea,button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
}
a{
    text-decoration: none;

}
button,a{

cursor: pointer;
transition: filter 0.2s;

}
button:hover,a:hover{

filter: brightness(0.9);

}
`