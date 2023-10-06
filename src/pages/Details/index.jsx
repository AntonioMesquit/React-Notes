import { Container, Links, Content } from './styles'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'
import { useParams } from 'react-router-dom'
import { ButtonText } from '../../components/buttonText'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
export function Details() {

const [data, setData] = useState(null);

const params = useParams();
const navigate = useNavigate()

function handleBack(){
navigate(-1)
}
async function handleRemove(){
  const confirm = window.confirm("Deseja remover a nota?")

  if(confirm){
    await api.delete(`/notes/${params.id}`)
    alert("Nota deletada com sucesso!");
    navigate("/")
  }
}


useEffect(( ) => {
async function fetchNotes(){
const response = await api.get(`/notes/${params.id}`);
setData(response.data)

}

fetchNotes()
} , [])



  return (
    <Container>
      <Header />
{
  data && 
      <main>
        <Content>

          <ButtonText
           title="Excluir nota"
           onClick = {handleRemove}
           />


          <h1>
            {data.title}
          </h1>
          <p>
            {data.description}
          </p>
        { 
        data.links && 
         <Section title="Links Uteis">
            <Links>
            {
              data.links.map(link => (
               <li key={String(link.id)}>
                <a href={link.url} >{link.url}</a>
              </li>
              ))
              
          }
            </Links>
          </Section>
          }
          {
            data.tags && 

          <Section title="Marcadores">
            {
              data.tags.map(tag => (

                <Tag 
                key={String(tag.id)}
                title={tag.name}
                />
              ))
              
              
            }
          
          </Section>
}
          <Button 
          title="Voltar"
          onClick ={handleBack}
          />
        </Content>
      </main>
}
    </Container>


  )
}