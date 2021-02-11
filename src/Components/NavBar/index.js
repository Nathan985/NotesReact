import React from 'react';

import { 
  Container,
  NavInfo,
  NoteIcon,
  Title,
  Buttons,
  SingIn,
  Register
} from './styles';

function NavBar() {
  return (
    <Container>
        <NavInfo>
            <NoteIcon />
            <Title>Bloco de Notas</Title>
        </NavInfo>
        <Buttons>
            <SingIn
              onClick={() => {window.location.assign('/SignIn');}}
            >Login</SingIn>
            <Register
              onClick={() => {window.location.assign('/Register');}}
            >Register</Register>
        </Buttons>
    </Container>
  );
}

export default NavBar;