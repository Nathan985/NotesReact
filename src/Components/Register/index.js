import React, {useState} from 'react';

import { 
    Container,
    ContainerCenter,
    Context,
    Title,
    TextInput,
    ButtonForm
 } from './styles';
import NavBar from '../NavBar';
import {Register as RegisterUser} from '../../Api/Register';
import {Alerts} from '../../Events/Alerts';
function Register() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const doRegister = async () =>{
        const res = await RegisterUser(nome, email, senha);
        console.log(res);
        if(res === true){
            Alerts('Registrado com Sucesso!', 'success');
            setTimeout(() => {window.location.assign('/SignIn')}, 3000);
        }
        else{
            Alerts('Erro ao Cadastrar', 'error');
        }
    }
  return (
    <Container>
        <NavBar />
        <ContainerCenter>
            <Context>
                <Title>Register</Title>
                <TextInput
                    value={nome}
                    onChange={(event) => {setNome(event.target.value)}}
                    placeholder="Nome" 
                />
                <TextInput 
                    placeholder="Email" 
                    value={email}
                    onChange={(event) => {setEmail(event.target.value)}}
                />
                <TextInput 
                    type="password" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(event) => {setSenha(event.target.value)}}
                />
                <ButtonForm
                onClick={() => {doRegister()}}
                >Register</ButtonForm>
            </Context>
        </ContainerCenter>
    </Container>
  );
}

export default Register;