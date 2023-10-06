import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 105px auto;

grid-template-areas: 
"header"
"content";
> main{
    grid-area: content;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    width: 7px;
}
&::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 6px;
}
}
.tags{
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
}
`
export const Form = styled.form`

max-width: 550px;
margin: 38px auto;


> header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;


    a{
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.GRAY_100}
    }
    
}

@media screen and (max-width: 550px){
    padding: 20px;    
    margin: -15px auto;
}



`