import {Header} from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/TextArea'
import {NoteItem} from '../../components/noteItem'
import {Section} from '../../components/section'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

import { Container, Form } from './style'

export function New(){
 return(
    <Container>

   <Header/>

   <main>
    <Form>
        <header>
            <h1>Criar nota</h1>
           <Link to="/">
            voltar
           </Link>
           
        </header>
        <Input 
            placeholder="Titulo"
        />
        <TextArea
        placeholder="Observacoes"
        />
        <Section title="Links Uteis">
            <NoteItem value="https::/rocketseat.com.br"/>
            <NoteItem $isNew placeholder="Novo link"/>

        </Section>
        <Section title="Marcadores">
        <div className='tags'>
        <NoteItem value="React"/>
        <NoteItem $isNew placeholder="Nova tag"/>
        </div>
        <Button title="Salvar"/>

        </Section>
    </Form>
   </main>
    </Container>

 )
}