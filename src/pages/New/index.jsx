import {Header} from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/TextArea'
import {NoteItem} from '../../components/noteItem'
import {Section} from '../../components/section'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Container, Form } from './style'

export function New(){


const [links, setLinks] = useState([]);
const [newLink, setNewLink] = useState("")


const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState("")
function handleAddLink(){
    
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
}
function handleRemoveLink(deleted){
setLinks(prevState => prevState.filter(link => link !== deleted))
}

function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")

}
function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))

}




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
            {
                links.map((link, index) => (
                    <NoteItem
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                    />
                ))
            }
            <NoteItem
             $isNew 
             placeholder="Novo link"
             value={newLink}
             onChange={ e => setNewLink(e.target.value)}
             onClick={handleAddLink}
             />

        </Section>
        <Section title="Marcadores">
        <div className='tags'>
        {
            tags.map((tag,index) => (
                <NoteItem 
                key={String(index)} 
                value={tag}
                onClick={() => handleRemoveTag(tag)}
                />
            ))
            
        }
        <NoteItem
         $isNew
          placeholder="Nova tag"
          onChange={ e=> setNewTag(e.target.value)}
          value={newTag}
          onClick={handleAddTag}
          />
        </div>
        <Button title="Salvar"/>

        </Section>
    </Form>
   </main>
    </Container>

 )
}