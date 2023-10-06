import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 250px auto;
grid-template-rows: 105px 128px auto 64px;
grid-template-areas: 
"brand header"
"menu search"
"menu content"
"newnote content";

background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    

@media screen and (max-width: 550px){
  grid-template-columns: auto;
 
grid-template-areas: 
"header"
"menu"
"search"
"content"
"content"
"newnote";


justify-items: center;
}
`
export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    @media screen and (max-width: 550px){
display: none;
}
    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;
  >li{
    margin-bottom: 24px;
  }
  
  @media screen and (max-width: 550px){
   padding-top: 20px ;
   width: 70%;
   margin-top: 30px;
   height: 110px;

   align-items: center;
   justify-content: center;
   overflow-y: scroll ;
   border-radius: 15px;
   >li{
    list-style: none;
  
   }
  
  }
`
export const Search = styled.div`
 grid-area: search;
 padding: 64px 64px 0; 
 @media screen and (max-width: 550px){ 
  padding: 0;
 width: 70%;
  
  margin-top: 40px;
 }
 
    
`
export const Content = styled.div`
 grid-area: content;
 padding: 0 64px; 
 overflow-y: scroll;

 &::-webkit-scrollbar {
    width: 7px;
}
&::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 6px;
}

@media screen and (max-width: 550px) {
 width: 100%;
}
    
`
export const NewNote = styled(Link)`
 grid-area: newnote;
 background: ${({theme}) => theme.COLORS.ORANGE};
 color: ${({theme}) => theme.COLORS.BACKGROUND_900};;
 border: none;
 display: flex;
 align-items: center;
 justify-content: center;

 > svg{
  margin-right:  8px;
 }
 @media screen and (max-width: 500px){
width: 100%;
padding-block: 20px;

}

    
`