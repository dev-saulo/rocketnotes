import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/dev-saulo.png" 
                alt="Foto do usuário"
                />

                <div>
                   <span>Bem Vindo,</span>
                   <strong>Saulo Christian</strong> 
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}