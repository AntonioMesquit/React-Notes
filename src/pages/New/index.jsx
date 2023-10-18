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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        return toast.error("Digite o titulo da nota!" , {
            theme: "dark"
        })
    }
    if(newLink){
        return toast.error("Voce deixou algum Link no campo de adicionar, porem nao clicou pra adicionar!", {
            theme: "dark"
        });
    }
    if(newTag){
        return toast.error("Voce deixou alguma Tag no campo de adicionar, porem nao clicou pra adicionar!", {
            theme: "dark"
        });
    }
    if(tags.length === 0){
        return toast.error("Adicione pelo menos uma tag", {
            theme: "dark"
        });
    }
   
api.post("/notes" , {
    title,
    description,
    tags,
    links
})
toast.success("Nota criada com sucesso!"); 
await new Promise(resolve => setTimeout(resolve, 4000));
navigate("/")
}



 return(
    <Container>
        <ToastContainer/>

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