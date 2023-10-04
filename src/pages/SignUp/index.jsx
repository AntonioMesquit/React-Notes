import {Container , Form, Background} from './style'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { api } from "../../services/api"
import {FiUser, FiMail, FiLock} from 'react-icons/fi'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'


export function SignUp(){
    const [ name,setName] = useState("");
    const [ email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
const navigate = useNavigate();
   function handleSignUp(){
   if(!name || !email || !password){
    return alert("Preencha todos os campos")
   }
   api.post("/users" , {name,email,password}).then(() => {
    alert("Usuario cadastrado com sucesso!")
    navigate("/");
   }).catch(error => {
    if(error.response){
        alert(error.response.data.message);
    }
    else{
        alert("Nao foi possivel cadastrar");
    }
   })
   }


    return(

     <Container>
        <Background/>
     <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder = "Nome"
        type = "text"
        icon={FiUser}
        onChange={e => setName(e.target.value)}
        />
        
        <Input placeholder = "E-mail"
        type = "text"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}

        />
        <Input placeholder = "Senha"
        type = "password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}

        /> 
        <Button title="Entrar" onClick={handleSignUp} />
         <Link to="/">Voltar para o login</Link>

     </Form>
       
     </Container>


    )
}