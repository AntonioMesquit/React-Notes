import {Container , Form, Background} from './style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import {FiMail, FiLock} from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  export function SignIn() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleSignIn() {
      if (!isValidEmail(email)) {
        alert('Endereço de e-mail inválido');
        return;
      }
  
      signIn({ email, password });
    }
  


    return(

     <Container>
     <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

        <h2>Faca seu login</h2>
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
        <Button title="Entrar" onClick={handleSignIn}/>
         <Link to="/register">Criar conta</Link>

     </Form>
     <Background/>
  
     </Container>


    )
}