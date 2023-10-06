import {Header} from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/TextArea'
import {NoteItem} from '../../components/noteItem'
import {Section} from '../../components/section'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { Container, Form } from './style'
import { useNavigate } from 'react-router-dom'

export function New(){

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [links, setLinks] = useState([]);
const [newLink, setNewLink] = useState("")
const [tags, setTags] = useState([]);
const [newTag, setNewTag] = useState("")
const navigate = useNavigate()
function handleAddLink(){

    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
}
function handleRemoveLink(deleted){
setLinks(prevState => prevState.filter(link => link.id !== deleted))
}

function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")

}
function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))

}
async function handleNewNote(){
    if(!title){
        return alert("Digite o titulo da nota!")
    }
    if(newLink){
        return alert("Voce deixou algum Link no campo de adicionar, porem nao clicou pra adicionar!");
    }
    if(newTag){
        return alert("Voce deixou alguma tag no campo de adicionar, porem nao clicou pra adicionar!");
    }
    if(tags.length === 0){
        return alert("Adicione pelo menos uma tag!");
    }
   
api.post("/notes" , {
    title,
    description,
    tags,
    links
})
alert("Nota criada com sucesso!");
navigate("/")
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
            onChange={ e=> setTitle(e.target.value)}
        />
        <TextArea
        placeholder="Observacoes"
        onChange={ e=> setDescription(e.target.value)}

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
        <Button title="Salvar" onClick={handleNewNote}/>

        </Section>
    </Form>
   </main>
    </Container>

 )
}