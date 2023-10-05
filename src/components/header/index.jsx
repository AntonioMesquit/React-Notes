
import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { Link } from 'react-router-dom';
import {useAuth} from '../../hooks/auth'
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/icon-user.svg"
export function Header(){
  const {signOut, user} = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
      <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name}/>
        <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick = {signOut}>
        <RiShutDownLine/>
      </Logout>

      </Container>

    );
}