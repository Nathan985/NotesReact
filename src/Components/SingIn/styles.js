import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const Context = styled.div`
    display: flex;
    margin-top: 32px;
    flex-direction: column;
    height: 70vh;
    justify-content: center;
    margin-left: 32px;
    align-items: center;
    background: var(--secondary);
    padding: 20px;
    width: 45%;
    border-radius: 55px;
`;

export const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
`;

export const TextInput = styled.input`
    outline:  0;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 20px;
    font-size: 18px;
    border-radius: 10px;
    background: var(--note);
    &::placeholder{
        color: var(--white);
    }
    width: 60%;
`;

export const ButtonForm = styled.button`
    display: flex;
    cursor: pointer;
    padding: 20px;
    font-size: 19px;
    margin-left: 5px;
    margin-top: 12px;
    margin-right: 5px;
    border-radius: 20px;
    height: 40px;
    align-items: center;
    justify-content: center;
    width: 73%;
    background: none;
    transition: .5s;
    color: var(--save); 
    border: 1px solid var(--save);
    &:hover{
        background: var(--save);
        color: var(--white);
    }
`;

export const ContainerCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;