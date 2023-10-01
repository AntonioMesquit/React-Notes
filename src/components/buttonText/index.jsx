import { Container } from "./style";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      $isactive={isActive} 
      {...rest}
    >
      {title}
    </Container>
  );
}
