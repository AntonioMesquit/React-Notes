import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Note } from '../../components/note';
import { Section } from '../../components/section';
import { Link } from 'react-router-dom'
import { api } from '../../services/api';

export function Home() {

 const [tags, setTags] = useState([])
 const [tagsSelected, setTagsSelected] = useState([])
 const [search, setSearch] = useState([])

 function handleTagSelected(tagName){
  const alreadySelected = tagsSelected.includes(tagName)
  if(alreadySelected){
   const filteredTags = tagsSelected.filter(tag => tag !== tagName);
   setTagsSelected(filteredTags)

  }else{
   setTagsSelected(prevState => [...prevState, tagName]);
  }
  

 }



 useEffect(() => {

  async function fetchTags() {
   const response = await api.get('/tags')
   setTags(response.data)
  }

  fetchTags()
 }, [])
 
 useEffect(() => {




 }, [tagsSelected, search])



 return (
  <Container>
   <Brand>
    <h1>Rocket Notes</h1>
   </Brand>
   <Header />
   <Menu>
   <li> 
       <ButtonText 
       title="Todos"
       onClick={() => handleTagSelected("all")}

        $isactive={tagsSelected.length === 0}
         />
    </li>
    {

     tags && tags.map(tag => (
      <li key={String(tag.id)}>
       <ButtonText 
       title={tag.name}
       onClick={() => handleTagSelected(tag.name)}
       $isactive={tagsSelected.includes(tag.name)}

       />
      </li>
     ))

    }


   </Menu>
   <Search>
    <Input
     placeholder="Pesquisar pelo titulo"
      icon={FiSearch} 
      onChange={() => setSearch(e.target.value)}
      />

   </Search>
   <Content>
    <Section title="Minhas notas">
     <Note data={{
      title: "React", tags: [
       { id: '1', name: 'react' },
       { id: '2', name: 'rocketesat' },
      ]
     }} />


    </Section>
   </Content>
   <NewNote to="/new">
    <FiPlus />
    Criar Nota
   </NewNote>





  </Container>



 )
}