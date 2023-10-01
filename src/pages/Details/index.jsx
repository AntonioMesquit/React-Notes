import { Container, Links, Content } from './styles'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'
import { ButtonText } from '../../components/buttonText'

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />


          <h1>
            Introducao ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione sint veritatis, delectus quo, asperiores dolor molestias natus distinctio voluptate sit quibusdam consequatur assumenda error iure molestiae alias provident debitis.
          </p>
          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="#">www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">www.rocketseat.com.br</a>
              </li>

            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>

    </Container>


  )
}