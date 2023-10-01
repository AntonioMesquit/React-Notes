import { Container } from "./style";
export function TextArea({value, ...rest}){
    return(
     <Container {...rest}>
        {value}
     </Container>
    )
}