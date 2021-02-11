import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: min(1170px, 100%);
  height: 100vh;
  background-color: var(--search);
  box-shadow: 5px 5px 5px black;
  /* justify-content: center; */
  flex-direction: column;
`;

export const HeaderInformation = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 30px;
    background-color: var(--secondary);
    border-left: 1px solid var(--primary);
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: var(--save)
    }
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const TextField = styled.input`
  width: 90%;
  height: 80px;
  padding: 20px;
  color: #fff;
  background-color: var(--note);
  font-size: 30px;
  border-radius: 20px;
  outline: 0;
  &::placeholder{
    color: #fff
  }
`;

export const TextArea = styled.textarea`
  margin-top: 20px;
  width: 90%;
  height: 60vh;
  padding: 20px;
  color: #fff;
  font-size: 22px;
  background-color: var(--note);
  border-radius: 20px;
  &::placeholder{
    color: #fff
  }
  resize: none;
`;

export const ButtonSave = styled.button`
  display: flex;
  background-color: none;
  color: var(--save);
  font-size: 26px;
  width: 100%;
  transition: .5s;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 60px;
  &:hover{
    color: var(--white);
    background: var(--save);
  }
`;