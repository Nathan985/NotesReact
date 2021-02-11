import React, {useState} from 'react';

import { 
    Container,
    Context,
    Title,
    TextInput,
    ButtonForm,
    ContainerCenter
 } from './styles';
import NavBar from '../NavBar';
import {Login} from '../../Api/Login';
import {Alerts} from '../../Events/Alerts';
function SingIn() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const doLogin = async () => {
    const result = await Login(email, senha);
    if(result === true){
      Alerts('Logado com Sucesso!', 'success');
      setTimeout(() => {window.location.assign('/Notes')}, 3000);
    }
    else{
      Alerts('Login Invalido', 'error');
    }
  }
  return (
    <Container>
        <NavBar/>
        <ContainerCenter>
            <Context>
                <Title>Login</Title>
                <TextInput 
                  value={email}
                  onChange={(event) => {setEmail(event.target.value)}}
                  placeholder="Email" />
                <TextInput 
                  value={senha}
                  onChange={(event) => {setSenha(event.target.value)}}
                  type="password" 
                  placeholder="Senha" 
                />
                <ButtonForm
                  onClick={() => {doLogin()}}
                >Login</ButtonForm>
            </Context>
        </ContainerCenter>
    </Container>
  );
}

export default SingIn;