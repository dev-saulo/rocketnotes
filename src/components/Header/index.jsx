import { Container, Profile } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/dev-saulo.png" 
                alt="Foto do usuário"
                />

                <div>
                   <span>Bem Vindo,</span>
                   <strong>Saulo Christian</strong> 
                </div>
            </Profile>

        </Container>
    )
}