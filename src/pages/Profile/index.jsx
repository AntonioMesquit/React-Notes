    import { Container, Form, Avatar } from "./style";
    import { useState,  } from "react";
    import {FiArrowLeft, FiUser, FiMail,FiLock, FiCamera} from 'react-icons/fi'
    import { Input } from "../../components/input";
    import { Button } from "../../components/button";
    import { Link } from 'react-router-dom';
    import avatarPlaceholder from "../../assets/icon-user.svg"
    import { useNavigate } from "react-router-dom";
    import { useAuth } from "../../hooks/auth";
    import { api } from "../../services/api";
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    export function Profile(){

    const {user, updateProfile} = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    const navigate = useNavigate()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar , setAvatar] = useState(avatarUrl)
    const [avatarFile , setAvatarFile] = useState(null)


    async function handleUpdate(){
            const updated ={
                name,
                email,
                password: passwordNew,
                old_password: passwordOld,
            }

        const userUpdated = Object.assign(user, updated)
            
        await updateProfile({ user: userUpdated, avatarFile });
        await new Promise(resolve => setTimeout(resolve, 4000)); 
        navigate("/");
        
    }
    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }



        return(
       
        <Container>
            <ToastContainer/>
            <header>
                <Link to="/">
                <FiArrowLeft/>
                </Link>
            
            </header>

            <Form>


    <Avatar>
        <img src={avatar}/>
        <label htmlFor="avatar">
    <FiCamera/>
    <input 
    id="avatar"
    type="file"
    onChange = {handleChangeAvatar}
    />
        </label>
    </Avatar>
            
            <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
        value = {name}
        onChange = {e => setName(e.target.value)}
        />
            <Input
        placeholder="Email"
        type="text"
        icon={FiMail}
        value = {email}
        onChange = {e => setEmail(e.target.value)}

        />
    
            <Input
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        onChange = {e => setPasswordOld(e.target.value)}

        />
                <Input
        placeholder="Nova senha"
        type="password"
        icon={FiLock}
        onChange = {e => setPasswordNew(e.target.value)}

        />

        <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>



        )
    }