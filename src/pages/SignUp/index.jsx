import {Container , Form, Background} from './style'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { api } from "../../services/api"
import {FiUser, FiMail, FiLock} from 'react-icons/fi'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    function handleSignUp() {
      if (!name || !email || !password) {
        return toast.error('Preencha todos os campos', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
      }
  
      if (!isValidEmail(email)) {
        return toast.error('Endereco email/senha invalido', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      
      api.post("/users", { name, email, password })
        .then(async () => {
          toast.success('Usuario cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          await new Promise(resolve => setTimeout(resolve, 5000));
          navigate("/");
        })
        .catch(error => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possível cadastrar");
          }
        });
       
    }

    return(

     <Container>
        <Background/>
     <Form>
     <ToastContainer />
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