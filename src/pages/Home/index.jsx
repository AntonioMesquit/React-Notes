import {Container, Brand, Menu, Search, Content, NewNote} from './style';
import { FiPlus, FiSearch} from 'react-icons/fi';
import {Header} from '../../components/header';
import {ButtonText} from '../../components/buttonText';
import { Input } from '../../components/input';
import { Note } from '../../components/note';
import { Section } from '../../components/section';
import { Link } from 'react-router-dom'

export function Home(){
    return(
    <Container>
   <Brand>
   <h1>Rocket Notes</h1>
   </Brand>
   <Header/>
    <Menu>
    <li>
        <ButtonText title="Todos" $isactive/>
    </li>
    <li>
        <ButtonText title="React"/>
    </li>
    <li>
        <ButtonText title="Node"/>
    </li>
  
    </Menu>
    <Search>
    <Input placeholder ="Pesquisar pelo titulo" icon={FiSearch}/>

    </Search>
    <Content>
     <Section title="Minhas notas">
        <Note data={{title: "React" , tags: [
            {id: '1' , name: 'react'},
            {id: '2' , name: 'rocketesat'},
            ]}}/>


     </Section>
    </Content>
    <NewNote to="/new">
   <FiPlus/>
   Criar Nota
    </NewNote>




 
    </Container>
 


    )
}